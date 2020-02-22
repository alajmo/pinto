import { Enum } from 'lib/enum.js';

export { ThemeState };

async function ThemeState(theme) {
  let state = {
    // Saved properties
    name: theme.name,
    id: theme.id,
    version: theme.version,
    editor: theme.editor,
    editorTheme: theme.editorTheme,
    fontSettings: theme.fontSettings,
    keywords: theme.keywords,
    groups: theme.groups,
    languages: theme.languages,
    exportOptions: theme.exportOptions,

    language: theme.language,
    template: theme.template,
    templateTxt: theme.templateTxt,
    defaultThemeName: theme.defaultThemeName,

    refs: theme.refs,
    keywordLinks: theme.keywordLinks,
    inverseKeywordLinks: theme.inverseKeywordLinks,
    keywordLanguages: theme.keywordLanguages,
    languageExtensions: theme.languageExtensions,
  };

  const events = Enum(
    'THEME_UPDATE',

    'LOAD_TEMPLATE',

    'TOGGLE_TEXT_DECORATION',
    'SET_FONT_FAMILY',
    'SET_FONT_SIZE',
    'SET_LINE_HEIGHT',

    'SET_FOREGROUND_COLOR',
    'SET_BACKGROUND_COLOR',

    'TOGGLE_LANGUAGE',

    'EXPORT_THEMES_JSON',
    'EXPORT_THEME_JSON',
    'IMPORT_THEME_JSON',

    'EXPORT_THEME_VIM',
  );

  const reducers = {
    load(state, data) {
      const newState = { ...state };

      Object.assign(newState.theme, data);

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    importThemeJson(state, files) {
      return {
        trigger: [{ event: events.IMPORT_THEME_JSON, payload: { files } }],
        state,
      };
    },

    exportThemesJson(state, theme) {
      return {
        trigger: [events.EXPORT_THEMES_JSON],
        state,
      };
    },

    exportThemeJson(state, theme) {
      return {
        trigger: [
          {
            event: events.EXPORT_THEME_JSON,
            payload: { themeId: theme },
          },
        ],
        state,
      };
    },

    exportThemeVim(state) {
      return {
        trigger: [
          {
            event: events.EXPORT_THEME_VIM,
            payload: { theme: state.theme },
          },
        ],
        state,
      };
    },

    async loadTemplate(state, language) {
      const newState = { ...state };
      const template = (
        await import(`../templates/${language}/${language}.html.txt`)
      ).default;
      // TODO: Fix this, it's for copying a theme, so I need the example file in txt format
      const templateTxt = (
        await import(`../templates/${language}/${language}.example.txt`)
      ).default;

      newState.theme.language = language;
      newState.theme.template = template;
      newState.theme.templateTxt = templateTxt;

      return {
        trigger: [events.LOAD_TEMPLATE],
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

      newState.theme.name = name.trim();

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setEditor(state, editor) {
      const newState = { ...state };
      newState.theme.editor = editor;

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setFontFamily(state, fontFamily) {
      const newState = { ...state };
      newState.theme.fontSettings.fontFamily = fontFamily;

      return {
        trigger: [events.SET_FONT_FAMILY, events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setFontSize(state, fontSize) {
      const newState = { ...state };
      newState.theme.fontSettings.fontSize = fontSize;

      return {
        trigger: [events.SET_FONT_SIZE, events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setLineHeight(state, lineHeight) {
      const newState = { ...state };
      newState.theme.fontSettings.lineHeight = lineHeight;

      return {
        trigger: [events.SET_LINE_HEIGHT, events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    copyFromKeywordToKeyword(state, { keywordToCopyFrom, keywordToCopyTo }) {
      const newState = { ...state };

      newState.theme.keywords[keywordToCopyTo].foregroundColor =
        newState.theme.keywords[keywordToCopyFrom].foregroundColor;
      newState.theme.keywords[keywordToCopyTo].backgroundColor =
        newState.theme.keywords[keywordToCopyFrom].backgroundColor;
      newState.theme.keywords[keywordToCopyTo].bold =
        newState.theme.keywords[keywordToCopyFrom].bold;
      newState.theme.keywords[keywordToCopyTo].italic =
        newState.theme.keywords[keywordToCopyFrom].italic;
      newState.theme.keywords[keywordToCopyTo].lineThrough =
        newState.theme.keywords[keywordToCopyFrom].lineThrough;

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setForegroundColor(state, { keyword, color }) {
      const newState = { ...state };

      keyword.forEach(k => {
        newState.theme.keywords[k].foregroundColor = color;
      });

      return {
        trigger: [events.SET_FOREGROUND_COLOR, events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setBackgroundColor(state, { keyword, color }) {
      const newState = { ...state };
      keyword.forEach(k => {
        newState.theme.keywords[k].backgroundColor = color;
      });

      return {
        trigger: [events.SET_BACKGROUND_COLOR, events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    toggleLanguage(state, languages) {
      const newState = { ...state };

      languages.forEach(({ groupType, language, enabled }) => {
        newState.theme[groupType][language] = enabled;
      });

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    toggleExportOption(state, option) {
      const newState = { ...state };

      // One of the options has to be checked
      if (option === 'gui' && state.theme.exportOptions.term === true) {
        newState.theme.exportOptions[option] = !newState.theme.exportOptions[
          option
        ];
      } else if (option === 'term' && state.theme.exportOptions.gui === true) {
        newState.theme.exportOptions[option] = !newState.theme.exportOptions[
          option
        ];
      }

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    toggleTextDecoration(state, { keyword, attr, value }) {
      const newState = { ...state };

      keyword.forEach(k => {
        newState.theme.keywords[k][attr] = value;
      });

      return {
        trigger: [events.TOGGLE_TEXT_DECORATION, events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    toggleEnableKeywords(state, { keywords, value = null }) {
      const newState = { ...state };

      keywords.forEach(k => {
        if (value === true || value === false) {
          newState.theme.keywords[k].enabled = value;
        } else {
          newState.theme.keywords[k].enabled = !newState.theme.keywords[k]
            .enabled;
        }
      });

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    setEditorTheme(state, editorTheme) {
      const newState = { ...state };

      newState.theme.editorTheme = editorTheme;

      return {
        trigger: [events.THEME_UPDATE],
        state: { ...newState },
      };
    },

    toggleActivateKeywords(state, { keywords, value = null }) {
      const newState = { ...state };

      keywords.forEach(k => {
        if (value === true || value === false) {
          newState.theme.keywords[k].active = value;
        } else {
          newState.theme.keywords[k].active = !newState.theme.keywords[k]
            .active;
        }
      });

      return {
        trigger: [events.THEME_UPDATE],
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
