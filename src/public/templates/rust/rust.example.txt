use wgn;

use crate::{
    backend::native_gpu_future, BindingResource,
    BindingType, BufferDescriptor, 
    PipelineLayoutDescriptor, RenderPipelineDescriptor,
    TextureViewDescriptor, TextureViewDimension,
};

use arrayvec::ArrayVec;
use smallvec::SmallVec;
use std::{ffi::CString, future::Future, ops::Range, ptr, slice};

pub type AdapterId = wgc::id::AdapterId;

pub(crate) async fn request_adapter(
    options: &crate::RequestAdapterOptions<'_>,
    backends: wgt::BackendBit,
) -> Option<AdapterId> {
    unsafe extern "C" fn adapter_callback(
        id: Option<wgc::id::AdapterId>,
        user_data: *mut std::ffi::c_void,
    ) {
        *(user_data as *mut Option<wgc::id::AdapterId>) = id;
    }

    let mut id_maybe = None;
    unsafe {
        wgn::wgpu_request_adapter_async(
            Some(&wgc::instance::RequestAdapterOptions {
                power_preference: options.power_preference,
            }),
            backends,
            adapter_callback,
            &mut id_maybe as *mut _ as *mut std::ffi::c_void,
        )
    };
    id_maybe
}

pub(crate) async fn request_device_and_queue(
    adapter: &AdapterId,
    desc: Option<&wgt::DeviceDescriptor>,
) -> (DeviceId, QueueId) {
    let device_id = wgn::wgpu_adapter_request_device(*adapter, desc);
    (device_id, wgn::wgpu_device_get_default_queue(device_id))
}

pub(crate) fn create_shader_module(device: &DeviceId, spv: &[u32]) -> ShaderModuleId {
    let desc = wgc::pipeline::ShaderModuleDescriptor {
        code: wgc::U32Array {
            bytes: spv.as_ptr(),
            length: spv.len(),
        },
    };
    wgn::wgpu_device_create_shader_module(*device, &desc)
}

pub(crate) fn create_bind_group_layout(
    device: &DeviceId,
    desc: &BindGroupLayoutDescriptor,
) -> BindGroupLayoutId {
    use wgc::binding_model as bm;

    let temp_layouts = desc
        .bindings
        .iter()
        .map(|bind| bm::BindGroupLayoutEntry {
            binding: bind.binding,
            visibility: bind.visibility,
            ty: match bind.ty {
                BindingType::UniformBuffer { .. } => bm::BindingType::UniformBuffer,
                BindingType::StorageBuffer {
                    readonly: false, ..
                } => bm::BindingType::StorageBuffer,
                BindingType::StorageBuffer { readonly: true, .. } => {
                    bm::BindingType::ReadonlyStorageBuffer
                }
                BindingType::Sampler { comparison: false } => bm::BindingType::Sampler,
                BindingType::Sampler { .. } => bm::BindingType::ComparisonSampler,
                BindingType::SampledTexture { .. } => bm::BindingType::SampledTexture,
                BindingType::StorageTexture { readonly: true, .. } => {
                    bm::BindingType::ReadonlyStorageTexture
                }
                BindingType::StorageTexture { .. } => bm::BindingType::WriteonlyStorageTexture,
            },
            has_dynamic_offset: match bind.ty {
                BindingType::UniformBuffer { dynamic }
                | BindingType::StorageBuffer { dynamic, .. } => dynamic,
                _ => false,
            },
            multisampled: match bind.ty {
                BindingType::SampledTexture { multisampled, .. } => multisampled,
                _ => false,
            },
            view_dimension: match bind.ty {
                BindingType::SampledTexture { dimension, .. }
                | BindingType::StorageTexture { dimension, .. } => dimension,
                _ => TextureViewDimension::D2,
            },
            texture_component_type: match bind.ty {
                BindingType::SampledTexture { component_type, .. }
                | BindingType::StorageTexture { component_type, .. } => component_type,
                _ => wgt::TextureComponentType::Float,
            },
            storage_texture_format: match bind.ty {
                BindingType::StorageTexture { format, .. } => format,
                _ => wgt::TextureFormat::Rgb10a2Unorm, // doesn't matter
            },
        })
        .collect::<Vec<_>>();

    let owned_label = OwnedLabel::new(desc.label.as_deref());
    wgn::wgpu_device_create_bind_group_layout(
        *device,
        &bm::BindGroupLayoutDescriptor {
            entries: temp_layouts.as_ptr(),
            entries_length: temp_layouts.len(),
            label: owned_label.as_ptr(),
        },
    )
}

pub(crate) fn create_bind_group(device: &DeviceId, desc: &BindGroupDescriptor) -> BindGroupId {
    use wgc::binding_model as bm;

    let bindings = desc
        .bindings
        .iter()
        .map(|binding| bm::BindGroupEntry {
            binding: binding.binding,
            resource: match binding.resource {
                BindingResource::Buffer {
                    ref buffer,
                    ref range,
                } => bm::BindingResource::Buffer(bm::BufferBinding {
                    buffer: buffer.id,
                    offset: range.start,
                    size: range.end - range.start,
                }),
                BindingResource::Sampler(ref sampler) => bm::BindingResource::Sampler(sampler.id),
                BindingResource::TextureView(ref texture_view) => {
                    bm::BindingResource::TextureView(texture_view.id)
                }
            },
        })
        .collect::<Vec<_>>();

    let owned_label = OwnedLabel::new(desc.label.as_deref());
    wgn::wgpu_device_create_bind_group(
        *device,
        &bm::BindGroupDescriptor {
            layout: desc.layout.id,
            entries: bindings.as_ptr(),
            entries_length: bindings.len(),
            label: owned_label.as_ptr(),
        },
    )
}

pub(crate) fn create_pipeline_layout(
    device: &DeviceId,
    desc: &PipelineLayoutDescriptor,
) -> PipelineLayoutId {
    //TODO: avoid allocation here
    let temp_layouts = desc
        .bind_group_layouts
        .iter()
        .map(|bgl| bgl.id)
        .collect::<Vec<_>>();
    wgn::wgpu_device_create_pipeline_layout(
        *device,
        &wgc::binding_model::PipelineLayoutDescriptor {
            bind_group_layouts: temp_layouts.as_ptr(),
            bind_group_layouts_length: temp_layouts.len(),
        },
    )
}

pub(crate) fn create_render_pipeline(
    device: &DeviceId,
    desc: &RenderPipelineDescriptor,
) -> RenderPipelineId {
    use wgc::pipeline as pipe;

    let vertex_entry_point = CString::new(desc.vertex_stage.entry_point).unwrap();
    let vertex_stage = pipe::ProgrammableStageDescriptor {
        module: desc.vertex_stage.module.id,
        entry_point: vertex_entry_point.as_ptr(),
    };
    let (_fragment_entry_point, fragment_stage) = if let Some(fragment_stage) = &desc.fragment_stage
    {
        let fragment_entry_point = CString::new(fragment_stage.entry_point).unwrap();
        let fragment_stage = pipe::ProgrammableStageDescriptor {
            module: fragment_stage.module.id,
            entry_point: fragment_entry_point.as_ptr(),
        };
        (fragment_entry_point, Some(fragment_stage))
    } else {
        (CString::default(), None)
    };

    let temp_color_states = desc.color_states.to_vec();
    let temp_vertex_buffers = desc
        .vertex_state
        .vertex_buffers
        .iter()
        .map(|vbuf| pipe::VertexBufferLayoutDescriptor {
            array_stride: vbuf.stride,
            step_mode: vbuf.step_mode,
            attributes: vbuf.attributes.as_ptr(),
            attributes_length: vbuf.attributes.len(),
        })
        .collect::<Vec<_>>();

    wgn::wgpu_device_create_render_pipeline(
        *device,
        &pipe::RenderPipelineDescriptor {
            layout: desc.layout.id,
            vertex_stage,
            fragment_stage: fragment_stage
                .as_ref()
                .map_or(ptr::null(), |fs| fs as *const _),
            rasterization_state: desc
                .rasterization_state
                .as_ref()
                .map_or(ptr::null(), |p| p as *const _),
            primitive_topology: desc.primitive_topology,
            color_states: temp_color_states.as_ptr(),
            color_states_length: temp_color_states.len(),
            depth_stencil_state: desc
                .depth_stencil_state
                .as_ref()
                .map_or(ptr::null(), |p| p as *const _),
            vertex_state: pipe::VertexStateDescriptor {
                index_format: desc.vertex_state.index_format,
                vertex_buffers: temp_vertex_buffers.as_ptr(),
                vertex_buffers_length: temp_vertex_buffers.len(),
            },
            sample_count: desc.sample_count,
            sample_mask: desc.sample_mask,
            alpha_to_coverage_enabled: desc.alpha_to_coverage_enabled,
        },
    )
}
