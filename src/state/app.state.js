import { Enum } from 'lib/enum.js';
import { Theme } from 'state/theme.js';

export { AppState };

function AppState({ themes = [] } = {}) {
  const EDITOR = Enum('vim');
  const LANGUAGE = Enum('javascript');
  const THEME = Enum('dark', 'light');

  let state = {
    editor: EDITOR.vim,
    language: LANGUAGE.javascript,
    mode: THEME.dark,

    themes,
    activeModal: 'new',

    createThemeModal: {
      themeName: '',
      copy: false,
    },

    showSidebar: true,
    showTextDecoration: true,

    showKeyword: true,
    selectedOption: 'keyword',
    selectedKeyword: 'Normal',
    selectedInput: null,

    fontFamilies: ['monospace', 'arial', 'verdana'],
  };

  const events = Enum(
    'REMOVE_THEME',
    'CREATED_THEME',
    'LOAD_THEME',
    'SHOW_KEYWORD_FORM',
    'KEYWORD_SELECT',
    'UNSELECT_INPUT',
  );

  const reducers = {
    toggleSidebar(state, themeName) {
      const newState = { ...state };

      newState.app.showSidebar = !newState.app.showSidebar;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleShowTextDecoration(state, themeName) {
      const newState = { ...state };

      newState.app.showTextDecoration = !newState.app.showTextDecoration;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateCreateThemeNameModal(state, themeName) {
      const newState = { ...state };

      newState.app.createThemeModal.themeName = themeName;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    checkCopyCreateThemeModal(state, copy) {
      const newState = { ...state };

      newState.app.createThemeModal.copy = copy;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    loadTheme(state, themeId) {
      return {
        trigger: [{ event: events.LOAD_THEME, payload: themeId }],
        state: { ...state },
      };
    },

    saveTheme(state) {
      const newState = { ...state };

      let themeId = state.theme.id;
      if (themeId) {
        Theme.saveTheme(state.theme.id, state);
      } else {
        themeId = Theme.createThemeFromState(state, state.theme.name);
      }

      newState.app.themes = Theme.getThemes();

      return {
        trigger: [{ event: events.LOAD_THEME, payload: themeId }],
        state: { ...newState },
      };
    },

    createTheme(state) {
      const newState = { ...state };

      let themeId;
      if (state.app.createThemeModal.copy) {
        themeId = Theme.createThemeFromState(
          state,
          state.app.createThemeModal.themeName,
        );
      } else {
        themeId = Theme.createThemeFromDefaultModel(
          state.app.createThemeModal.themeName,
        );
      }
      newState.app.activeModal = null;
      newState.app.activeModal = null;
      newState.app.createThemeModal.themeName = '';
      newState.app.createThemeModal.copy = false;

      newState.app.themes = Theme.getThemes();

      return {
        trigger: [{ event: events.LOAD_THEME, payload: themeId }],
        state: { ...newState },
      };
    },

    removeTheme(state, themeId) {
      const newState = { ...state };

      Theme.removeTheme(themeId);
      newState.app.themes = Theme.getThemes();

      return {
        trigger: [events.REMOVE_THEME],
        state: { ...newState },
      };
    },

    openModal(state, modalType) {
      const newState = { ...state };

      newState.app.activeModal = modalType;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    showKeywordForm(state, showKeyword) {
      const newState = { ...state };
      newState.app.showKeyword = showKeyword;

      return {
        trigger: [events.SHOW_KEYWORD_FORM],
        state: { ...newState },
      };
    },

    selectOption(state, option) {
      const newState = { ...state };
      newState.app.selectedOption = option;

      return {
        trigger: [events.KEYWORD_SELECT],
        state: { ...newState },
      };
    },

    selectKeyword(state, keyword) {
      const newState = { ...state };
      newState.app.selectedKeyword = keyword;

      return {
        trigger: [events.KEYWORD_SELECT],
        state: { ...newState },
      };
    },

    unselectKeyword(state) {
      const newState = { ...state };
      newState.app.selectedKeyword = null;

      return {
        trigger: [events.KEYWORD_SELECT],
        state: { ...newState },
      };
    },

    selectColorInput(state, input) {
      const newState = { ...state };
      newState.app.selectedInput = input;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    unSelectColorInput(state) {
      const newState = { ...state };
      newState.app.selectedInput = null;

      return {
        trigger: [events.UNSELECT_INPUT],
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
