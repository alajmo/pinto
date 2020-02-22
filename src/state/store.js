import { createStore } from 'lib/redux.js';
import { Enum } from 'lib/enum.js';
import { AppState } from 'state/app.state.js';
import { PickerState } from 'state/picker.state.js';
import { PaletteState } from 'state/palette.state.js';
import { ThemeState } from 'state/theme.state.js';
import { Theme } from 'state/theme.js';
import {
  ThemeModel,
  PickerModel,
  PaletteModel,
  KeywordTemplate,
} from 'state/models.js';
import { mitt } from 'lib/event.js';
import { range } from 'lib/util.js';

window.clearThemes = Theme.removeThemes;

async function State({ themeModel, themes }) {
  const app = AppState({
    themes,
    languages: themeModel.theme.languages,
    keyword: KeywordTemplate(),
  });
  const picker = PickerState(themeModel.picker);
  const palette = PaletteState(themeModel.palette);
  const theme = await ThemeState(themeModel.theme);

  let state = {
    app: { ...app.state },
    picker: { ...picker.state },
    palette: { ...palette.state },
    theme: { ...theme.state },
  };

  const events = Enum(
    ...Object.keys(app.events).concat(
      Object.keys(picker.events),
      Object.keys(palette.events),
      Object.keys(theme.events),
    ),
  );

  const reducers = {
    app: { ...app.reducers },
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
    picker: PickerModel(),
    palette: PaletteModel(),
    theme: await ThemeModel(),
  };

  const state = await State({ themeModel, themes });
  const store = createStore(state);
  const events = store.getEvents();

  let saveChangesTimeout;

  let appElement;
  let appContentElement;
  let appOverlayElement;
  let appModalElement;
  let focusableElements;
  let firstFocusableElement;
  let focusableContent;
  let lastFocusableElement;


  // Save shortcut
  window.addEventListener('keydown', (e) => {

    if (e.ctrlKey && e.code === 'KeyS') {
      e.preventDefault();
      e.stopPropagation();

      store.dispatch('app', 'saveTheme');
      mitt.emit('RENDER');

      return;
    }
  }, false);

  function handleOverlayClick() {
    store.dispatch('app', 'openModal', null);
    mitt.emit('RENDER');
  }

  function handleModalKeydown(e) {
    if (e.code === 'Escape') {
      store.dispatch('app', 'openModal', null);
      mitt.emit('RENDER');
    } else if (e.shiftKey && e.code === 'Tab') {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else if (e.code === 'Tab') {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    } else{
      return;
    }
  }

  store.subscribe({
    [events.SETUP_EVENT_LISTENER]: (element) => {
      appElement = element;
      appContentElement = appElement.querySelector('.app-content');
      appOverlayElement = appElement.querySelector('.app-overlay');
    },


    [events.OPEN_MODAL]: (openedModal) => {
      const { state } = store.get();

      store.dispatch('palette', 'unSelectColor', range(0, state.palette.palettes.length - 1));
      store.dispatch('palette', 'setNormalMode', range(0, state.palette.palettes.length - 1));

      if (openedModal) {
        appContentElement.setAttribute('data-modal-open', 'true');
        appOverlayElement.setAttribute('data-modal-open', 'true');
        appOverlayElement.addEventListener('click', handleOverlayClick, false);
        window.addEventListener('keydown', handleModalKeydown, false);

        appModalElement = document.querySelector('.modal');
        focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        firstFocusableElement = appModalElement.querySelectorAll(focusableElements)[0];
        focusableContent = appModalElement.querySelectorAll(focusableElements);
        lastFocusableElement = focusableContent[focusableContent.length - 1];

        setTimeout(function () {
          if (firstFocusableElement.hasAttribute('autofocus') && document.activeElement !== firstFocusableElement) {
            firstFocusableElement.focus();
          } else {
            firstFocusableElement.focus();
          }
        }, 0);

      } else {
        appContentElement.setAttribute('data-modal-open', 'false');
        appOverlayElement.setAttribute('data-modal-open', 'false');
        window.removeEventListener('keydown', handleModalKeydown, false);
        appOverlayElement.removeEventListener('click', handleOverlayClick, false);
      }

      mitt.emit('RENDER');
    },

    [events.THEME_UPDATE]: () => {
      mitt.emit('UNSAVED_CHANGES');
      // mitt.emit('RENDER');
    },

    [events.PALETTE_UPDATE]: () => {
      mitt.emit('UNSAVED_CHANGES');
      mitt.emit('RENDER');
    },

    [events.LOAD_TEMPLATE]: () => {
      mitt.emit('LOAD_TEMPLATE');
    },

    [events.IMPORT_THEME_JSON]: ({ files }) => {
      Theme.importThemeJson(files);
    },

    [events.EXPORT_THEMES_JSON]: () => {
      Theme.exportThemesJson();
    },

    [events.EXPORT_THEME_JSON]: ({ themeId }) => {
      Theme.exportThemeJson(themeId);
    },

    [events.EXPORT_THEME_VIM]: ({ theme }) => {
      Theme.exportThemeVim(theme);
    },

    [events.LOAD_THEME]: themeId => {
      const { theme, palette } = Theme.getTheme(themeId);

      store.dispatch('theme', 'load', theme);
      store.dispatch('palette', 'load', palette.palettes);

      mitt.emit('LOAD_TEMPLATE');
    },

    [events.TOGGLE_COMPONENT]: () => {
      const state = store.getState();
      if (state.theme.id) {
        store.dispatch('app', 'saveTheme');
      }
    },

    [events.SET_FONT_FAMILY]: () => {
      const state = store.getState();
      if (state.theme.id) {
        store.dispatch('app', 'saveTheme');
      } else {
        mitt.emit('UNSAVED_CHANGES');
      }
    },

    [events.SET_FONT_SIZE]: () => {
      const state = store.getState();
      if (state.theme.id) {
        store.dispatch('app', 'saveTheme');
      } else {
        mitt.emit('UNSAVED_CHANGES');
      }
    },

    [events.SET_LINE_HEIGHT]: () => {
      const state = store.getState();
      if (state.theme.id) {
        store.dispatch('app', 'saveTheme');
      } else {
        mitt.emit('UNSAVED_CHANGES');
      }
    },

    [events.TOGGLE_TEXT_DECORATION]: () => {
      const state = store.getState();
      if (state.theme.id) {
        Theme.saveTheme(state.theme.id, state);
      } else {
        mitt.emit('UNSAVED_CHANGES');
      }
    },

    [events.SELECT_OPTION]: () => {
      const state = store.getState();

      store.dispatch('palette', 'unSelectColor', range(0, state.palette.palettes.length - 1));
      store.dispatch('palette', 'setNormalMode', range(0, state.palette.palettes.length - 1));

      mitt.emit('RENDER');
    },

    [events.SELECT_KEYWORD]: (keyword) => {
      console.log('SELECT_KEYWORD');

      const state = store.getState();

      store.dispatch('palette', 'unSelectColor', range(0, state.palette.palettes.length - 1));
      store.dispatch('palette', 'setNormalMode', range(0, state.palette.palettes.length - 1));

      if (keyword.length === 1) {
        const previousSelectedInput = state.app.selectedInput ? state.app.selectedInput : 'foregroundColor';
        const hasKeywordEnabledInput = state.theme.keywords[keyword[0]][previousSelectedInput];

        // Set color for the Color Picker
        if (hasKeywordEnabledInput) {
          store.dispatch('picker', 'initHex', state.theme.keywords[keyword[0]][previousSelectedInput]);
          store.dispatch('picker', 'setPreviousColor', state.theme.keywords[keyword[0]][previousSelectedInput]);
          store.dispatch('app', 'selectColorInput', previousSelectedInput);
          store.dispatch('app', 'setShowColorPicker', true);
        } else {
          store.dispatch('app', 'selectColorInput', null);
          store.dispatch('app', 'setShowColorPicker', false);
        }

        mitt.emit('RENDER');
      }
    },

    [events.SET_COLOR]: ({ triggeredFromInput } = {}) => {
      const state = store.getState();
      const selectedInput = state.app.selectedInput;
      const paletteSelectedInput = state.palette.selectedInput;

      let selectedPaletteColors = [];
      state.palette.palettes.forEach((palette, i) => {
        if (Number.isInteger(palette.selectedColor)) {
          selectedPaletteColors.push({ palette, i });
        }
      });

      selectedPaletteColors.forEach(palette => {
        store.dispatch('palette', 'changeColor', {
          i: [palette.i],
          colorIndex: palette.palette.selectedColor,
          color: state.picker.hex,
        });
      });

      if (paletteSelectedInput) {
        const color = state.picker.hex;

        if (paletteSelectedInput === 'backgroundColor') {
          store.dispatch('palette', 'setBackgroundColor', { color });
        } else if (paletteSelectedInput === 'foregroundColor') {
          store.dispatch('palette', 'setForegroundColor', { color });
        }
      }

      if (selectedInput) {
        const selectedKeyword = state.app.selectedKeyword;
        const color = state.picker.hex;

        if (selectedInput === 'backgroundColor') {
          store.dispatch('theme', 'setBackgroundColor', {
            keyword: selectedKeyword,
            color,
            triggeredFromInput,
          });
        } else if (selectedInput === 'foregroundColor') {
          store.dispatch('theme', 'setForegroundColor', {
            keyword: selectedKeyword,
            color,
            triggeredFromInput,
          });
        }
      }

      mitt.emit('UNSAVED_CHANGES');
      // mitt.emit('RENDER');
    },
  });

  mitt.on('SYNC', () => {
    store.dispatch('app', 'syncThemes');
    mitt.emit('RENDER');
  });

  mitt.on('UNSAVED_CHANGES', () => {
    store.dispatch('app', 'unsavedChanges');

    const state = store.getState();
    if (state.theme.id !== null) {

      if (saveChangesTimeout) {
        clearTimeout(saveChangesTimeout);
        saveChangesTimeout = null;
      }

      saveChangesTimeout = setTimeout(() => {
        Theme.saveTheme(state.theme.id, state);
      }, 5000);
    }

    // TODO: Uncomment these
    // promptUnsavedChangesOnExit();
  });

  mitt.on('CHANGES_SAVED', () => {
    store.dispatch('app', 'changesSaved');

    clearTimeout(saveChangesTimeout);
    saveChangesTimeout = null;

    mitt.emit('RENDER');

    // TODO: Uncomment these
    // dontPromptUnsavedChangesOnExit();
  });

  return store;
}

function tabClose(event) {
  event.preventDefault();
  event.returnValue = '';
}

function promptUnsavedChangesOnExit() {
  window.addEventListener('beforeunload', tabClose);
}

function dontPromptUnsavedChangesOnExit() {
  window.removeEventListener('beforeunload', tabClose);
}

export const Store = CreateStore();
