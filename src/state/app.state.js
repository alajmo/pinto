import { Enum } from 'lib/enum.js';
import { Theme } from 'state/theme.js';

export { AppState };

function AppState({ themes = [], groups = [], keyword } = {}) {
  const EDITOR = Enum('vim');
  const LANGUAGE = Enum('javascript');
  const THEME = Enum('dark', 'light');

  let state = {
    editor: EDITOR.vim,
    language: LANGUAGE.javascript,
    mode: THEME.dark,

    changesSaved: null,
    themes,
    activeModal: null, // themes, new, about, export, null, manage-group

    createThemeModal: {
      themeName: '',
      copy: false,
    },

    showFullscreenPreview: false,
    showSidebar: true,
    showPalettes: true,
    showColorPicker: true,

    selectedOption: 'keyword', //  settings, palette, keyword
    selectedKeyword: ['Normal'], // ['Normal']
    selectedInput: 'foregroundColor', // foregroundColor, backgroundColor

    sidebar: {
      allKeywordsEnabled: true,
      allKeywordsMinimized: false,

      minimizedGroups: {
        ...Object.keys(groups).reduce(
          (prev, curr) => ({
            [curr]: true,
            ...prev,
          }),
          {},
        ),

        major: false,
      },
    },

    editorSettings: {
      minimizedGroups: {
        ...Object.keys(groups).reduce(
          (prev, curr) => ({
            [curr]: true,
            ...prev,
          }),
          {},
        ),
      },
    },

    manageGroups: {
      type: 'create', // create, update
      groupName: 'Untitled',
      groupKeywords: [{ keyword: '', linkedKeyword: 'Normal' }],
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
    'OPEN_FULLSCREEN_PREVIEW',
    'SETUP_EVENT_LISTENER',
    'LOAD_THEME',
    'SAVE_THEME',
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
        trigger: [
          {
            event: events.OPEN_FULLSCREEN_PREVIEW,
            payload: newState.app.showFullscreenPreview,
          },
        ],
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

    async syncThemes(state) {
      const newState = { ...state };

      newState.app.themes = await Theme.getThemes();

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    async saveTheme(state) {
      const newState = { ...state };

      return {
        trigger: [events.SAVE_THEME],
        state: { ...newState },
      };
    },

    async createTheme(state) {
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

      return {
        trigger: [{ event: events.LOAD_THEME, payload: themeId }],
        state: { ...newState },
      };
    },

    async removeTheme(state, themeId) {
      const newState = { ...state };

      await Theme.removeTheme(themeId);
      newState.app.themes = await Theme.getThemes();

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

      Object.keys(newState.app.sidebar.minimizedGroups).forEach(group => {
        newState.app.sidebar.minimizedGroups[group] =
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
        newState.app.sidebar.minimizedGroups[group] = !newState.app.sidebar
          .minimizedGroups[group];
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    toggleMinimizeGroup(state, groups) {
      const newState = { ...state };

      groups.forEach(group => {
        newState.app.editorSettings.minimizedGroups[group] = !newState.app
          .editorSettings.minimizedGroups[group];
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

    setManageGroupData(state, group) {
      const newState = { ...state };

      newState.app.manageGroups.type = 'update';
      newState.app.manageGroups.oldGroupName = group.name;
      newState.app.manageGroups.groupName = group.name;
      newState.app.manageGroups.groupKeywords = group.keywords.map(k => ({
        oldKeyword: k.name,
        keyword: k.name,
        oldLinkedKeyword: state.theme.keywordLinks[k.name],
        linkedKeyword: state.theme.keywordLinks[k.name],
      }));

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateGroupName(state, groupName) {
      const newState = { ...state };

      newState.app.manageGroups.groupName = groupName;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateKeyword(state, { i, keyword }) {
      const newState = { ...state };

      newState.app.manageGroups.groupKeywords[i].keyword = keyword;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateLinkedKeyword(state, { i, keyword }) {
      const newState = { ...state };

      newState.app.manageGroups.groupKeywords[i].linkedKeyword = keyword;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    resetGroupModal(state) {
      const newState = { ...state };

      newState.app.manageGroups.type = 'create';
      newState.app.manageGroups.oldGroupName = 'Untitled';
      newState.app.manageGroups.groupName = 'Untitled';
      newState.app.manageGroups.groupKeywords = [
        { keyword: '', linkedKeyword: 'Normal' },
      ];

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    removeKeyword(state, index) {
      const newState = { ...state };

      newState.app.manageGroups.groupKeywords = newState.app.manageGroups.groupKeywords.filter(
        (k, i) => i !== index,
      );

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    addKeyword(state) {
      const newState = { ...state };

      newState.app.manageGroups.groupKeywords.push({
        keyword: '',
        linkedKeyword: 'Normal',
      });

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
