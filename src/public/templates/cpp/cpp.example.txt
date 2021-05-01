#include <c10/cuda/CUDAStream.h>
#include <c10/cuda/CUDAFunctions.h>
#include <c10/cuda/CUDAGuard.h>
#include <c10/util/Exception.h>

#include <array>
#include <atomic>
#include <cstdint>
#include <mutex>
#include <vector>

#include <iostream>

namespace c10 {
  namespace cuda {

    namespace {
      struct LeakyStreamInternals {
        LeakyStreamInternals() = default;
        C10_DISABLE_COPY_AND_ASSIGN(LeakyStreamInternals);

        ~LeakyStreamInternals() {
        }

        DeviceIndex device_index = -1;
        int32_t stream_id = -1;
        cudaStream_t stream = nullptr;
      };

      // Global stream state and constants
      static DeviceIndex num_gpus = -1;
      static constexpr int kStreamsPerPoolBits = 5;
      static constexpr int kStreamsPerPool = 1 << kStreamsPerPoolBits;
      static constexpr unsigned int kDefaultFlags = cudaStreamNonBlocking;

      // Note: stream priority is not supported by HIP
      // Note: lower numbers are higher priorities, zero is default priority
#ifndef __HIP_PLATFORM_HCC__
      static int kHighPriority = -1;
      static int kLowPriority = 0;
#endif // __HIP_PLATFORM_HCC__

      // Default streams
      static std::once_flag init_flag;
      static LeakyStreamInternals default_streams[C10_COMPILE_TIME_MAX_GPUS];

      static std::once_flag device_flags[C10_COMPILE_TIME_MAX_GPUS];
      static std::atomic<uint32_t> low_priority_counters[C10_COMPILE_TIME_MAX_GPUS];
      static std::atomic<uint32_t> high_priority_counters[C10_COMPILE_TIME_MAX_GPUS];
      static std::array<LeakyStreamInternals, kStreamsPerPool>
        low_priority_streams[C10_COMPILE_TIME_MAX_GPUS];
      static std::array<LeakyStreamInternals, kStreamsPerPool>
        high_priority_streams[C10_COMPILE_TIME_MAX_GPUS];

      enum class StreamIdType : uint8_t {
        DEFAULT = 0x0,
        LOW = 0x1,
        HIGH = 0x2,
      };

      std::ostream& operator<<(std::ostream& stream, StreamIdType s) {
        switch (s) {
          case StreamIdType::DEFAULT:
            stream << "DEFAULT";
            break;
          case StreamIdType::LOW:
            stream << "LOW";
            break;
          case StreamIdType::HIGH:
            stream << "HIGH";
            break;
          default:
            stream << static_cast<uint8_t>(s);
            break;
        }
        return stream;
      }

      static inline StreamIdType streamIdType(StreamId s) {
        return static_cast<StreamIdType>(s >> kStreamsPerPoolBits);
      }

      static inline size_t streamIdIndex(StreamId s) {
        return static_cast<size_t>(s & ((1 << kStreamsPerPoolBits) - 1));
      }

      StreamId makeStreamId(StreamIdType st, size_t si) {
        return (static_cast<StreamId>(st) << kStreamsPerPoolBits) |
          static_cast<StreamId>(si);
      }

      template <typename T, typename A>
        static bool pointer_within(const T* ptr, const A& arr) {
          return std::greater_equal<const T*>()(ptr, arr.data()) &&
            std::less<const T*>()(ptr, arr.data() + arr.size());
        }

      static StreamId CUDAStream_getStreamId(const LeakyStreamInternals* ptr) {
        DeviceIndex device_index = ptr->device_index;

        // Check if it's the default stream
        if (ptr == &default_streams[device_index]) {
          return makeStreamId(StreamIdType::DEFAULT, 0);
        }

        if (pointer_within<LeakyStreamInternals>(
              ptr, low_priority_streams[device_index])) {
          return makeStreamId(
              StreamIdType::LOW, ptr - low_priority_streams[device_index].data());
        }

        // Check if it's a high priority stream
        if (pointer_within<LeakyStreamInternals>(
              ptr, high_priority_streams[device_index])) {
          return makeStreamId(
              StreamIdType::HIGH, ptr - high_priority_streams[device_index].data());
        }

        AT_ASSERTM(
            0,
            "Could not compute stream ID for ",
            ptr,
            " on device ",
            device_index,
            " (something has gone horribly wrong!)");
      }

      // Thread-local current streams
      static thread_local LeakyStreamInternals** current_streams = nullptr;

      static void initGlobalStreamState() {
        num_gpus = device_count();
        // Check if the number of GPUs matches the expected compile-time max number
        // of GPUs.
        AT_ASSERTM(
            num_gpus <= C10_COMPILE_TIME_MAX_GPUS,
            "Number of CUDA devices on the machine is larger than the compiled "
            "max number of gpus expected (",
            C10_COMPILE_TIME_MAX_GPUS,
            "). Increase that and recompile.");

        // Initializes default streams
        for (auto i = decltype(num_gpus){0}; i < num_gpus; ++i) {
          default_streams[i].device_index = i;
          low_priority_counters[i] = 0;
          high_priority_counters[i] = 0;
        }
      }

      // Init front-end to ensure initialization only occurs once
      static void initCUDAStreamsOnce() {
        // Inits default streams (once, globally)
        std::call_once(init_flag, initGlobalStreamState);

        if (current_streams) {
          return;
        }

        // Inits current streams (thread local) to default streams
        current_streams =
          (LeakyStreamInternals**)malloc(num_gpus * sizeof(LeakyStreamInternals*));
        for (auto i = decltype(num_gpus){0}; i < num_gpus; ++i) {
          current_streams[i] = &default_streams[i];
        }
      }

      // Helper to verify the GPU index is valid
      static inline void check_gpu(DeviceIndex device_index) {
        AT_ASSERT(device_index >= 0 && device_index < num_gpus);
      }

      // Helper to determine the index of the stream to return
      // Note: Streams are returned round-robin (see note in CUDAStream.h)
      static uint32_t get_idx(std::atomic<uint32_t>& counter) {
        auto raw_idx = counter++;
        return raw_idx % kStreamsPerPool;
      }

      // See Note [StreamId assignment]
      LeakyStreamInternals* CUDAStream_internals(CUDAStream s) {
        c10::DeviceIndex device_index = s.device_index();
        StreamIdType st = streamIdType(s.unwrap().id());
        size_t si = streamIdIndex(s.unwrap().id());
        switch (st) {
          case StreamIdType::DEFAULT:
            AT_ASSERTM(
                si == 0,
                "Unrecognized stream ",
                s.unwrap(),
                " (I think this should be the default stream, but I got a non-zero index ",
                si,
                ").",
                " Did you manufacture the StreamId yourself?  Don't do that; use the",
                " official API like c10::cuda::getStreamFromPool() to get a new stream.");
            return &default_streams[device_index];
          case StreamIdType::LOW:
            return &low_priority_streams[device_index][si];
          case StreamIdType::HIGH:
            return &high_priority_streams[device_index][si];
          default:
            AT_ASSERTM(
                0,
                "Unrecognized stream ",
                s.unwrap(),
                " (I didn't recognize the stream type, ",
                st,
                ")");
        }
      }

      CUDAStream CUDAStream_fromInternals(const LeakyStreamInternals* ptr) {
        return CUDAStream(
            CUDAStream::UNCHECKED,
            Stream(
              Stream::UNSAFE,
              c10::Device(DeviceType::CUDA, ptr->device_index),
              CUDAStream_getStreamId(ptr)));
      }

    } // anonymous namespace

    cudaStream_t CUDAStream::stream() const {
      auto ptr = CUDAStream_internals(*this);
      AT_ASSERT(ptr);
      return ptr->stream;
    }

    // Returns a stream from the requested pool
    CUDAStream getStreamFromPool(
        const bool isHighPriority,
        DeviceIndex device_index) {
      initCUDAStreamsOnce();
      if (device_index == -1)
        device_index = current_device();
      check_gpu(device_index);

      // Initializes the stream pools (once)
      std::call_once(
          device_flags[device_index], initDeviceStreamState, device_index);

      if (isHighPriority) {
        const auto idx = get_idx(high_priority_counters[device_index]);
        return CUDAStream_fromInternals(&high_priority_streams[device_index][idx]);
      }

      const auto idx = get_idx(low_priority_counters[device_index]);
      return CUDAStream_fromInternals(&low_priority_streams[device_index][idx]);
    }

    CUDAStream getDefaultCUDAStream(DeviceIndex device_index) {
      initCUDAStreamsOnce();
      if (device_index == -1) {
        device_index = current_device();
      }
      check_gpu(device_index);
      return CUDAStream_fromInternals(&default_streams[device_index]);
    }
    CUDAStream getCurrentCUDAStream(DeviceIndex device_index) {
      initCUDAStreamsOnce();
      if (device_index == -1) {
        device_index = current_device();
      }
      check_gpu(device_index);
      return CUDAStream_fromInternals(current_streams[device_index]);
    }

    void setCurrentCUDAStream(CUDAStream stream) {
      initCUDAStreamsOnce();
      auto ptr = CUDAStream_internals(stream);
      AT_ASSERT(ptr);
      current_streams[ptr->device_index] = ptr;
    }

    std::ostream& operator<<(std::ostream& stream, const CUDAStream& s) {
      return stream << s.unwrap();
    }

  } // namespace cuda
} // namespace c10
