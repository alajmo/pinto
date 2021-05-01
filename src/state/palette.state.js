import { cloneDeep } from 'lodash-es';
import { Enum } from 'lib/enum.js';

export { PaletteState };

function PaletteState(palette) {
  const PALETTE_MODES = palette.modes;

  let state = {
    // Saved properties
    palettes: palette.palettes,

    foregroundColor: palette.foregroundColor,
    backgroundColor: palette.backgroundColor,
    selectedInput: palette.selectedInput,
    modes: PALETTE_MODES,
  };

  const events = Enum(
    'PALETTE_UPDATE',
    'SELECT_PALETTE_COLOR',
    'SET_REMOVE_MODE',
  );

  const reducers = {
    load(state, data) {
      const newState = { ...state };

      newState.palette.palettes = data.map(p => ({
        ...p,
        selectedColor: null,
        currentMode: PALETTE_MODES.normal,
        readonly: false,
      }));

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleXtermColors(state, { showXtermColors }) {
      const newState = { ...state };

      if (showXtermColors) {
        const p = cloneDeep(palette.xtermPalette);
        newState.palette.palettes.push(p);
      } else {
        newState.palette.palettes = newState.palette.palettes.filter(
          p => p.type !== 'xterm',
        );
      }

      return {
        trigger: [events.PALETTE_UPDATE],
        state: { ...newState },
      };
    },

    addPalette(state) {
      const newState = { ...state };

      const p = cloneDeep(palette.defaultPalette);
      newState.palette.palettes.unshift(p);

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    removePalette(state, i) {
      const newState = { ...state };
      newState.palette.palettes.splice(i, 1);

      return {
        trigger: [events.PALETTE_UPDATE],
        state: { ...newState },
      };
    },

    selectColor(state, { i, colorIndex }) {
      const newState = { ...state };

      i.forEach(i => {
        newState.palette.palettes[i].selectedColor = colorIndex;
      });

      return {
        trigger: [events.SELECT_PALETTE_COLOR],
        state: { ...newState },
      };
    },

    unSelectColor(state, i) {
      const newState = { ...state };

      i.forEach(i => {
        newState.palette.palettes[i].selectedColor = null;
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    changeColor(state, { i, colorIndex, color }) {
      const newState = { ...state };

      i.forEach(i => {
        newState.palette.palettes[i].colors[colorIndex] = color;
      });

      return {
        trigger: [events.PALETTE_UPDATE],
        state: { ...newState },
      };
    },

    addColor(state, { i, color }) {
      const newState = { ...state };

      i.forEach(i => {
        newState.palette.palettes[i].colors.push(color);
      });

      return {
        trigger: [events.PALETTE_UPDATE],
        state: { ...newState },
      };
    },

    removeColor(state, { i, index }) {
      const newState = { ...state };
      i.forEach(i => {
        newState.palette.palettes[i].colors = state.palette.palettes[
          i
        ].colors.filter((color, key) => key !== index);
      });

      return {
        trigger: [events.PALETTE_UPDATE],
        state: { ...newState },
      };
    },

    setNormalMode(state, i) {
      const newState = { ...state };

      i.forEach(i => {
        newState.palette.palettes[i].currentMode = PALETTE_MODES.normal;
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setRemoveMode(state, i) {
      const newState = { ...state };
      newState.palette.palettes[i].currentMode = PALETTE_MODES.remove;

      return {
        trigger: [events.SET_REMOVE_MODE],
        state: { ...newState },
      };
    },

    selectColorInput(state, value) {
      const newState = { ...state };
      newState.palette.selectedInput = value;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setForegroundColor(state, { color }) {
      const newState = { ...state };

      newState.palette.foregroundColor = color;

      return {
        trigger: [events.PALETTE_UPDATE],
        state: { ...newState },
      };
    },

    setBackgroundColor(state, { color }) {
      const newState = { ...state };

      newState.palette.backgroundColor = color;

      return {
        trigger: [events.PALETTE_UPDATE],
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
