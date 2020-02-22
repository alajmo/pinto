import { Enum } from 'lib/enum.js';
import { rgbToHex, rgbToHsb, hsbToRgb, hexToRgb } from 'lib/color.js';

export { PickerState };

function PickerState(picker) {
  let state = {
    hex: picker.hex,

    red: picker.red,
    green: picker.green,
    blue: picker.blue,

    hue: picker.hue,
    saturation: picker.saturation,
    brightness: picker.brightness,

    leftData: picker.leftData,
    rightData: picker.rightData,

    previousColor: picker.hex,
    selectedColorAttribute: picker.selectedColorAttribute, // hue, saturation, brightness, red, green, blue
  };

  const events = Enum('SET_COLOR');

  const reducers = {
    loadPicker(state, data) {
      const newState = { ...state };

      Object.assign(newState.picker, data);

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setSelectedColorAttribute(state, attr) {
      const newState = { ...state };
      newState.picker.selectedColorAttribute = attr;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setPreviousColor(state, hex) {
      const newState = { ...state };

      if (hex !== null) {
        newState.picker.previousColor = hex;
      }

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    // Used when clicking sidebar to initialize a color.
    initHex(state, hex) {
      const newState = { ...state };
      if (hex !== null) {
        newState.picker.hex = hex;

        const rgb = hexToRgb(hex);
        newState.picker.red = rgb[0];
        newState.picker.green = rgb[1];
        newState.picker.blue = rgb[2];

        const hsb = rgbToHsb(...rgb);
        newState.picker.hue = hsb[0];
        newState.picker.saturation = hsb[1];
        newState.picker.brightness = hsb[2];
      }

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setHex(state, hex) {
      const newState = { ...state };
      if (hex !== null) {
        newState.picker.hex = hex;

        const rgb = hexToRgb(hex);
        newState.picker.red = rgb[0];
        newState.picker.green = rgb[1];
        newState.picker.blue = rgb[2];

        const hsb = rgbToHsb(...rgb);
        newState.picker.hue = hsb[0];
        newState.picker.saturation = hsb[1];
        newState.picker.brightness = hsb[2];
      }

      return {
        trigger: [
          { event: events.SET_COLOR, payload: { triggeredFromInput: true } },
        ],
        state: { ...newState },
      };
    },

    setRgb(state, { red, green, blue }) {
      const newState = { ...state };

      newState.picker.hex = rgbToHex([red, green, blue]);

      const hsb = rgbToHsb(red, green, blue);
      newState.picker.hue = hsb[0];
      newState.picker.saturation = hsb[1];
      newState.picker.brightness = hsb[2];

      newState.picker.red = red;
      newState.picker.green = green;
      newState.picker.blue = blue;

      return {
        trigger: [events.SET_COLOR],
        state: { ...newState },
      };
    },

    setHsb(state, { hue, saturation, brightness }) {
      const newState = { ...state };

      newState.picker.hue = hue;
      newState.picker.saturation = saturation;
      newState.picker.brightness = brightness;

      const rgb = hsbToRgb(hue, saturation, brightness);

      newState.picker.red = rgb[0];
      newState.picker.green = rgb[1];
      newState.picker.blue = rgb[2];

      newState.picker.hex = rgbToHex([rgb[0], rgb[1], rgb[2]]);

      return {
        trigger: [events.SET_COLOR],
        state: { ...newState },
      };
    },

    setColorCubes(state, { leftData, rightData }) {
      const newState = { ...state };

      newState.picker.leftData = leftData;
      newState.picker.rightData = rightData;

      return {
        trigger: [],
        state: { ...newState },
      };
    },
  };

  return {
    state,
    events,
    reducers,
  };
}
