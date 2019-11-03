import { uuid } from 'lib/uuid.js';
import {
  ThemeModel,
  KeywordModel,
  PickerModel,
  PaletteModel,
} from 'state/models.js';

function CreateLocalStorageStore() {
  function createThemeFromDefaultModel(themeName) {
    const themeId = uuid();

    const keyword = KeywordModel();
    const picker = PickerModel();
    const palette = PaletteModel();
    const theme = ThemeModel();

    const themeData = {
      theme: {
        name: themeName,
        id: themeId,
        editor: theme.editor,
      },
      keyword: {
        fontSettings: keyword.fontSettings,
        keywords: keyword.keywords,
      },
      palette: {
        name: palette.name,
        colors: palette.colors,
      },
      picker,
    };

    setTheme(themeId, themeData);

    return themeId;
  }

  function createThemeFromState(state, themeName) {
    const themeId = uuid();
    const { picker, keyword, palette, theme } = state;

    const themeData = {
      theme: {
        name: themeName,
        id: themeId,
        editor: theme.editor,
      },
      keyword: {
        fontSettings: keyword.fontSettings,
        keywords: keyword.keywords,
      },
      palette: {
        name: palette.palette.name,
        colors: palette.palette.colors,
      },
      picker,
    };

    setTheme(themeId, themeData);

    return themeId;
  }

  function getThemes() {
    let themes = [];
    for (let i = 0; i < localStorage.length; i++) {
      const theme = getTheme(localStorage.key(i));
      if (typeof theme === 'object' && theme.theme.id) {
        themes.push(theme);
      }
    }

    return themes;
  }

  function getTheme(themeId) {
    const item = localStorage.getItem(themeId);

    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }

  function saveTheme(themeId, { theme, keyword, picker, palette }) {
    setTheme(themeId, {
      theme,
      keyword,
      picker,
      palette: {
        name: palette.palette.name,
        colors: palette.palette.colors,
      },
    });
  }

  function setTheme(themeId, { theme, keyword, picker, palette }) {
    const themeData = {
      theme: {
        name: theme.name,
        id: themeId,
        editor: theme.editor,
      },
      keyword: {
        fontSettings: keyword.fontSettings,
        keywords: keyword.keywords,
      },
      palette: {
        name: palette.name,
        colors: palette.colors,
      },
      picker: {
        color: picker.color,
      },
    };

    return localStorage.setItem(themeId, JSON.stringify(themeData));
  }

  function removeTheme(themeId) {
    return localStorage.removeItem(themeId);
  }

  function clearThemes() {
    return localStorage.clear();
  }

  function getCurrentThemeId() {
    return sessionStorage.getItem('currentTheme');
  }

  function setCurrentThemeId(themeId) {
    return sessionStorage.setItem('currentTheme', themeId);
  }

  return Object.freeze({
    createThemeFromState,
    createThemeFromDefaultModel,
    getTheme,
    setTheme,
    saveTheme,
    removeTheme,
    clearThemes,
    getCurrentThemeId,
    setCurrentThemeId,
    getThemes,
  });
}

export const Theme = CreateLocalStorageStore();
