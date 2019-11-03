import { createStore } from 'lib/redux.js';
import { Enum } from 'lib/enum.js';
import { KeywordState } from 'state/keyword.state.js';
import { AppState } from 'state/app.state.js';
import { PickerState } from 'state/picker.state.js';
import { PaletteState } from 'state/palette.state.js';
import { ThemeState } from 'state/theme.state.js';
import { hslToHex } from 'lib/color.js';
import { Theme } from 'state/theme.js';
import {
  ThemeModel,
  KeywordModel,
  PickerModel,
  PaletteModel,
} from 'state/models.js';

window.clearThemes = Theme.clearThemes;

async function State({ themeModel, themes }) {
  const app = AppState({ themes });
  const keyword = KeywordState(themeModel.keyword);
  const picker = PickerState(themeModel.picker);
  const palette = PaletteState(themeModel.palette);
  const theme = await ThemeState(themeModel.theme);

  let state = {
    app: { ...app.state },
    keyword: { ...keyword.state },
    picker: { ...picker.state },
    palette: { ...palette.state },
    theme: { ...theme.state },
  };

  const events = Enum(
    ...Object.keys(app.events).concat(
      Object.keys(keyword.events),
      Object.keys(picker.events),
      Object.keys(palette.events),
      Object.keys(theme.events),
    ),
  );

  const reducers = {
    app: { ...app.reducers },
    keyword: { ...keyword.reducers },
    picker: { ...picker.reducers },
    palette: { ...palette.reducers },
    theme: { ...theme.reducers },
  };

  return {
    state,
    events,
    reducers,
  };
}

async function CreateStore() {
  const themes = Theme.getThemes();
  const themeModel = {
    keyword: KeywordModel(),
    picker: PickerModel(),
    palette: PaletteModel(),
    theme: ThemeModel(),
  };

  const state = await State({ themeModel, themes });
  const store = createStore(state);
  const events = store.getEvents();

  store.subscribe({
    [events.LOAD_THEME]: themeId => {
      const theme = Theme.getTheme(themeId);

      store.dispatch('keyword', 'loadKeywords', theme.keyword);
      store.dispatch('theme', 'loadTheme', theme.theme);
      store.dispatch('picker', 'loadPicker', theme.picker);
      store.dispatch('palette', 'loadPalette', theme.palette);
    },

    [events.TOGGLE_TEXT_DECORATION]: () => {
      const state = store.getState();
      if (state.theme.id) {
        Theme.saveTheme(state.theme.id, state);
      }
    },

    [events.SET_COLOR]: ({ triggeredFromInput } = {}) => {
      const state = store.getState();
      const selectedInput = state.app.selectedInput;

      if (state.palette.palette.selectedPaletteColor) {
        store.dispatch('palette', 'changePaletteColor', {
          colorIndex: state.palette.palette.selectedPaletteColor,
          color: hslToHex(state.picker.color),
        });
      }

      if (selectedInput) {
        const selectedKeyword = state.app.selectedKeyword;
        const color = state.picker.color;

        if (selectedInput === 'backgroundColor') {
          store.dispatch('keyword', 'setBackgroundColor', {
            keyword: selectedKeyword,
            color: hslToHex(color),
            triggeredFromInput,
          });
        } else if (selectedInput === 'foregroundColor') {
          store.dispatch('keyword', 'setForegroundColor', {
            keyword: selectedKeyword,
            color: hslToHex(color),
            triggeredFromInput,
          });
        }
      }

      if (state.theme.id) {
        Theme.saveTheme(state.theme.id, state);
      }
    },
  });

  return store;
}

export const Store = CreateStore();
