import { Enum } from 'lib/enum.js';
import { cloneDeep } from 'lodash';
import { Theme } from 'state/theme.js';
import { KeywordTemplate } from 'state/models.js';

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
    descriptions: theme.descriptions,
    fileHandle: theme.fileHandle,
    created: theme.created,
    updated: theme.updated,
    groups: theme.groups,
    keywords: theme.keywords,
    groupKeywords: theme.groupKeywords,
    keywordLinks: theme.keywordLinks,
    keywordGroups: theme.keywordGroups,

    languages: theme.languages,
    language: theme.language,
    template: theme.template,
    templateTxt: theme.templateTxt,
    defaultThemeName: theme.defaultThemeName,
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

    async importThemeJson(state, files) {
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

    updateDate(state, updated) {
      const newState = { ...state };

      newState.theme.updated = updated;

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

      keywordToCopyTo.forEach(keyword => {
        newState.theme.keywords[keyword].foregroundColor =
          newState.theme.keywords[keywordToCopyFrom].foregroundColor;
        newState.theme.keywords[keyword].backgroundColor =
          newState.theme.keywords[keywordToCopyFrom].backgroundColor;
        newState.theme.keywords[keyword].bold =
          newState.theme.keywords[keywordToCopyFrom].bold;
        newState.theme.keywords[keyword].italic =
          newState.theme.keywords[keywordToCopyFrom].italic;
        newState.theme.keywords[keyword].lineThrough =
          newState.theme.keywords[keywordToCopyFrom].lineThrough;
      });

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

    toggleGroup(state, groups) {
      const newState = { ...state };

      groups.forEach(({ group, enabled }) => {
        newState.theme.groups[group] = enabled;
      });

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

    async createFileHandle(state) {
      const newState = { ...state };

      let fileHandle;

      try {
        fileHandle = await window.showSaveFilePicker();
      } catch (e) {
        fileHandle = null;
      }

      newState.theme.fileHandle = fileHandle;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    async deleteFileHandle(state) {
      const newState = { ...state };

      newState.theme.fileHandle = null;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    createGroup(state, { groupName, groupKeywords }) {
      const newState = { ...state };

      newState.theme.groups[groupName] = true;
      newState.theme.groupKeywords[groupName] = groupKeywords.map(
        ({ keyword }) => keyword,
      );

      groupKeywords.forEach(({ keyword, linkedKeyword }) => {
        newState.theme.keywords[keyword] = KeywordTemplate({
          name: keyword,
          active: true,
          enabled: true,
        });

        newState.theme.keywordLinks[keyword] = linkedKeyword;
        newState.theme.keywordGroups[keyword] = groupName;
      });

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    updateGroup(state, updatedGroup) {
      const newState = { ...state };

      const oldKeywords = [ ...newState.theme.groupKeywords[updatedGroup.oldGroupName] ];

      // Rename group
      if (updatedGroup.oldGroupName !== updatedGroup.groupName) {
        newState.theme.groups[updatedGroup.groupName] = state.theme.groups[updatedGroup.oldGroupName];
        delete newState.theme.groups[updatedGroup.oldGroupName];

        // Update keywordGroups
        const keywordGroups = Object.entries(newState.theme.keywordGroups);
        keywordGroups.forEach(kg => {
          if (kg[1] === updatedGroup.oldGroupName) {
            newState.theme.keywordGroups[kg[0]] = updatedGroup.groupName;
          }
        })

        // Delete old groupKeywords
        delete newState.theme.groupKeywords[updatedGroup.oldGroupName];
      }

      const keywordLinks = Object.entries(newState.theme.keywordLinks);
      // Created/Updated keywords
      updatedGroup.groupKeywords.forEach(
        ({ oldKeyword = null, keyword, oldLinkedKeyword = null, linkedKeyword }) => {
          if (oldKeyword === null) { // Created keywords
            newState.theme.keywords[keyword] = KeywordTemplate({
              name: keyword,
              active: true,
              enabled: true,
            });
            newState.theme.keywordLinks[keyword] = linkedKeyword;
            newState.theme.keywordGroups[keyword] = updatedGroup.groupName;
          } else if (oldKeyword !== keyword || oldLinkedKeyword !== linkedKeyword) { // Modified keywords
            newState.theme.keywords[keyword] = cloneDeep(newState.theme.keywords[oldKeyword]);
            newState.theme.keywords[keyword].name = keyword;
            newState.theme.keywordLinks[keyword] = linkedKeyword;
            newState.theme.keywordGroups[keyword] = updatedGroup.groupName;

            delete newState.theme.keywords[oldKeyword];
            delete newState.theme.keywordLinks[oldKeyword];
            delete newState.theme.keywordGroups[oldKeyword];

            // Change all keywords that link to this keyword
            if (oldKeyword !== keyword) {
              keywordLinks.forEach(k => {
                if (oldKeyword === k[1]) {
                  newState.theme.keywordLinks[k[0]] = keyword;
                }
              });
            }
          }
        },
      );

      // Deleted keywords
      const updatedKeywords = updatedGroup.groupKeywords.map(k => k.oldKeyword);
      oldKeywords.forEach(k => {
        if (!updatedKeywords.includes(k)) {

          // Change all keywords that link to this keyword, so they link to 'Normal' instead
          keywordLinks.forEach(ke => {
            if (k === ke[1] ) {
              newState.theme.keywordLinks[ke[0]] = 'Normal';
            }
          });

          delete newState.theme.keywords[k];
          delete newState.theme.keywordLinks[k];
          delete newState.theme.keywordGroups[k];
        }
      });

      newState.theme.groupKeywords[updatedGroup.groupName] = updatedGroup.groupKeywords.map(
        ({ keyword }) => keyword,
      );

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    deleteGroup(state, groupName) {
      const newState = { ...state };

      delete newState.theme.groups[groupName];

      newState.theme.groupKeywords[groupName].forEach(keyword => {
        delete newState.theme.keywords[keyword];
        delete newState.theme.keywordLinks[keyword];
        delete newState.theme.keywordGroups[keyword];
      });

      delete newState.theme.groupKeywords[groupName];

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
