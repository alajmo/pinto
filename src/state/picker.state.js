import { Enum } from 'lib/enum.js';
import { mitt } from 'lib/event.js';

export { PickerState };

function PickerState({ color }) {
  const PICKER_MODES = Enum('normal', 'remove');

  let state = {
    color,
  };

  const events = Enum('SET_COLOR', 'SET_COLOR_INPUT', 'SET_SL', 'SET_HUE');

  const reducers = {
    loadPicker(state, data) {
      const newState = { ...state };
      newState.picker.color = data.color;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setColor(state, hsl) {
      const newState = { ...state };
      newState.picker.color = hsl;
      mitt.emit('SET_COLOR');

      return {
        trigger: [events.SET_COLOR],
        state: { ...newState },
      };
    },

    setInputColor(state, hex) {
      const newState = { ...state };
      newState.picker.color = hex;

      return {
        trigger: [
          { event: events.SET_COLOR, payload: { triggeredFromInput: true } },
        ],
        state: { ...newState },
      };
    },

    setHue(state, h) {
      const newState = { ...state };
      newState.picker.color[0] = h;

      return {
        trigger: [events.SET_COLOR],
        state: { ...newState },
      };
    },

    setSl(state, sl) {
      const newState = { ...state };
      newState.picker.color[1] = sl[0];
      newState.picker.color[2] = sl[1];

      return {
        trigger: [events.SET_COLOR],
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
