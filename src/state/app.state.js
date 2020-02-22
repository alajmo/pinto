import { Enum } from 'lib/enum.js';
import { Theme } from 'state/theme.js';

export { AppState };

function AppState({ themes = [], languages = [], keyword } = {}) {
  const EDITOR = Enum('vim');
  const LANGUAGE = Enum('javascript');
  const THEME = Enum('dark', 'light');

  let state = {
    editor: EDITOR.vim,
    language: LANGUAGE.javascript,
    mode: THEME.dark,

    changesSaved: null,
    themes,
    activeModal: null, // themes, new, about, export, null

    createThemeModal: {
      themeName: '',
      copy: false,
    },

    showFullscreenPreview: false,
    showSidebar: true,
    showPalettes: true,
    showColorPicker: true,

    selectedOption: 'keyword', //  settings, palette, keyword
    selectedPreview: 'theme', // theme
    selectedKeyword: ['Normal'], // ['Normal']
    selectedInput: 'foregroundColor', // foregroundColor, backgroundColor

    sidebar: {
      allKeywordsEnabled: true,
      allKeywordsMinimized: false,

      minimizedLanguages: {
        misc: true,
        major: false,
        minor: true,

        ...Object.keys(languages).reduce(
          (prev, curr) => ({
            [curr]: true,
            ...prev,
          }),
          {},
        ),
      },
    },

    editorSettings: {
      minimizedLanguages: {
        misc: true,
        major: true,
        minor: true,

        ...Object.keys(languages).reduce(
          (prev, curr) => ({
            [curr]: true,
            ...prev,
          }),
          {},
        ),
      },
    },

    defaultKeyword: keyword,
    keyword,

    editors: ['vim'],
    editorThemes: ['dark', 'light'],
    fontFamilies: [
      'monospace',
      'Liberation Mono',
      'Ubuntu Mono',
      'Dosis',
      'arial',
      'serif',
    ],
  };

  const events = Enum(
    'SELECT_OPTION',
    'SELECT_KEYWORD',
    'TOGGLE_COMPONENT',
    'OPEN_MODAL',
    'SETUP_EVENT_LISTENER',
    'LOAD_THEME',
  );

  const reducers = {
    setupEventListeners(state, element) {
      return {
        trigger: [{ event: events.SETUP_EVENT_LISTENER, payload: element }],
        state: { ...state },
      };
    },

    toggleFullscreen(state) {
      const newState = { ...state };
      newState.app.showFullscreenPreview = !newState.app.showFullscreenPreview;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    unsavedChanges(state) {
      const newState = { ...state };
      newState.app.changesSaved = false;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    changesSaved(state) {
      const newState = { ...state };
      newState.app.changesSaved = true;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    loadApp(state, data = {}) {
      const newState = { ...state };

      newState.app.showSidebar = data.showSidebar;
      newState.app.showPalettes = data.showPalettes;
      newState.app.selectedOption = data.selectedOption;
      newState.app.selectedKeyword = data.selectedKeyword;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleSidebar(state) {
      const newState = { ...state };

      newState.app.showSidebar = !newState.app.showSidebar;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleComponent(state, component) {
      const newState = { ...state };

      newState.app[component] = !newState.app[component];

      return {
        trigger: [events.TOGGLE_COMPONENT],
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

    syncThemes(state) {
      const newState = { ...state };

      newState.app.themes = Theme.getThemes();

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    saveTheme(state) {
      const newState = { ...state };

      let themeId = state.theme.id;
      if (themeId) {
        Theme.saveTheme(state.theme.id, state);
      } else {
        themeId = Theme.createTheme(state);
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
        themeId = Theme.createTheme({
          themeName: state.app.createThemeModal.themeName,
          ...state,
        });
      } else {
        themeId = Theme.createThem({
          themeName: state.app.createThemeModal.themeName,
        });
      }

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
        trigger: [],
        state: { ...newState },
      };
    },

    openModal(state, modalType) {
      const newState = { ...state };

      newState.app.activeModal = modalType;

      return {
        trigger: [
          { event: events.OPEN_MODAL, payload: typeof modalType === 'string' },
        ],
        state: { ...newState },
      };
    },

    selectOption(state, option) {
      const newState = { ...state };
      newState.app.selectedOption = option;
      newState.app.selectedPreview = option === 'export' ? 'export' : 'theme';

      if (option !== 'keyword') {
        newState.app.selectedKeyword = [];
      }

      return {
        trigger: [events.SELECT_OPTION],
        state: { ...newState },
      };
    },

    selectKeyword(state, keyword) {
      const newState = { ...state };

      newState.app.selectedKeyword = keyword;

      return {
        trigger: [{ event: events.SELECT_KEYWORD, payload: keyword }],
        state: { ...newState },
      };
    },

    toggleMinimizeAllKeywords(state) {
      const newState = { ...state };
      newState.app.sidebar.allKeywordsMinimized = !newState.app.sidebar
        .allKeywordsMinimized;

      Object.keys(newState.app.sidebar.minimizedLanguages).forEach(group => {
        newState.app.sidebar.minimizedLanguages[group] =
          newState.app.sidebar.allKeywordsMinimized;
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleMinimizeKeywords(state, groups) {
      const newState = { ...state };

      groups.forEach(group => {
        newState.app.sidebar.minimizedLanguages[group] = !newState.app.sidebar
          .minimizedLanguages[group];
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleMinimizeLanguage(state, languages) {
      const newState = { ...state };

      languages.forEach(group => {
        newState.app.editorSettings.minimizedLanguages[group] = !newState.app
          .editorSettings.minimizedLanguages[group];
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setShowColorPicker(state, value) {
      const newState = { ...state };
      newState.app.showColorPicker = value;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    selectColorInput(state, value) {
      const newState = { ...state };
      newState.app.selectedInput = value;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    unSelectColorInput(state) {
      const newState = { ...state };
      newState.app.selectedInput = null;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleEditorSelect(state, { select }) {
      const newState = { ...state };
      newState.app.editorSettings[select] = !newState.app.editorSettings[select]
        .openFontFamily;

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
