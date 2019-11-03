import { Enum } from 'lib/enum.js';

export { ThemeState };

async function ThemeState({ id = null, name, editor }) {
  let state = {
    file: '../templates/javascript/javascript.html.txt',
    template: (await import('../templates/javascript/javascript.html.txt'))
      .default,
    editor,
    name,
    id,
  };

  const events = Enum();

  const reducers = {
    loadTheme(state, data) {
      const newState = { ...state };
      newState.theme.editor = data.editor;
      newState.theme.name = data.name;
      newState.theme.id = data.id;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    async loadTemplate(state, file) {
      const newState = { ...state };
      const template = (await import(file)).default;

      newState.theme.file = file;
      newState.theme.template = template;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateThemeId(state, themeId) {
      const newState = { ...state };

      newState.theme.id = themeId;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateThemeName(state, name) {
      const newState = { ...state };

      newState.theme.name = name;

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
