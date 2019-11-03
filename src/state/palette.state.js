import { Enum } from 'lib/enum.js';

export { PaletteState };

function PaletteState(palette) {
  const PALETTE_MODES = Enum('normal', 'remove');

  let state = {
    palette: {
      name: palette.name,
      colors: palette.colors,
      selectedPaletteColor: null,
    },

    mode: PALETTE_MODES.normal,
    paletteModes: PALETTE_MODES,
  };

  const events = Enum(
    'SET_COLOR_PALETTE',
    'CHANGE_PALETTE_COLOR',
    'ADD_PALETTE_COLOR',
    'SELECT_PALETTE_COLOR',
    'UNSELECT_PALETTE_COLOR',
    'REMOVE_PALETTE_COLOR',

    'SET_NORMAL_MODE',
    'SET_REMOVE_MODE',
  );

  const reducers = {
    loadPalette(state, data) {
      const newState = { ...state };
      newState.palette.palette = data;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setColorPalette(state, colors) {
      const newState = { ...state };
      newState.palette.palette.colors = colors;

      return {
        trigger: [events.SET_COLOR_PALETTE],
        state: { ...newState },
      };
    },

    selectPaletteColor(state, colorIndex) {
      const newState = { ...state };

      newState.palette.palette.selectedPaletteColor = colorIndex;

      return {
        trigger: [events.SELECT_PALETTE_COLOR],
        state: { ...newState },
      };
    },

    unSelectPaletteColor(state) {
      const newState = { ...state };

      newState.palette.palette.selectedPaletteColor = null;

      return {
        trigger: [events.UNSELECT_PALETTE_COLOR],
        state: { ...newState },
      };
    },

    changePaletteColor(state, { colorIndex, color }) {
      const newState = { ...state };

      newState.palette.palette.colors[colorIndex] = color;

      return {
        trigger: [events.CHANGE_PALETTE_COLOR],
        state: { ...newState },
      };
    },

    addPaletteColor(state, color) {
      const newState = { ...state };
      newState.palette.palette.colors.push(color);
      newState.palette.palette.selectedPaletteColor =
        newState.palette.palette.colors.length - 1;

      return {
        trigger: [events.ADD_PALETTE_COLOR],
        state: { ...newState },
      };
    },

    removePaletteColor(state, { index }) {
      const newState = { ...state };
      newState.palette.palette.colors = state.palette.palette.colors.filter(
        (color, key) => key !== index,
      );

      return {
        trigger: [events.ADD_PALETTE_COLOR],
        state: { ...newState },
      };
    },

    setNormalMode(state) {
      const newState = { ...state };
      newState.palette.mode = PALETTE_MODES.normal;

      return {
        trigger: [events.SET_NORMAL_MODE],
        state: { ...newState },
      };
    },

    setRemoveMode(state) {
      const newState = { ...state };
      newState.palette.mode = PALETTE_MODES.remove;

      return {
        trigger: [events.SET_REMOVE_MODE],
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
