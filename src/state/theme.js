import { saveAs } from 'file-saver';
import { uuid } from 'lib/uuid.js';
import { exportCode } from 'lib/util.js';
import { mitt } from 'lib/event.js';
import { ThemeModel, PaletteModel } from 'state/models.js';
import { keywordToVim } from 'lib/json-to-editor.js';

const THEME_PREFIX = 'theme_';

function CreateLocalStorageStore() {
  function formatThemeData({ themeName, themeId, theme, palette }) {
    return {
      theme: {
        name: themeName ? themeName : theme.name,
        id: themeId ? themeId : theme.id,
        version: theme.version,
        editor: theme.editor,
        editorTheme: theme.editorTheme,
        fontSettings: theme.fontSettings,
        keywords: theme.keywords,
        groups: theme.groups,
        languages: theme.languages,
        exportOptions: theme.exportOptions,
      },

      palette: {
        palettes: palette.palettes.map(p => ({
          name: p.name,
          colors: p.colors,
          type: p.type,
        })),
      },
    };
  }

  function createTheme({
    themeName,
    themeId = uuid(),
    theme = ThemeModel(),
    palette = PaletteModel(),
  }) {
    saveTheme(themeId, { themeName, theme, palette });

    return themeId;
  }

  function saveTheme(themeId, { themeName, theme, palette }) {
    mitt.emit('CHANGES_SAVED');

    const key = `${THEME_PREFIX}${themeId}`;
    const data = formatThemeData({ themeId, themeName, theme, palette });

    return localStorage.setItem(key, JSON.stringify(data));
  }

  function getThemes() {
    let themes = [];

    const themeKeys = Object.keys(localStorage)
      .filter(k => k.startsWith(THEME_PREFIX))
      .map(k => k.replace(THEME_PREFIX, ''));

    for (const themeId of themeKeys) {
      const theme = getTheme(themeId);
      if (typeof theme === 'object' && theme.theme.id) {
        themes.push(theme);
      }
    }

    return themes;
  }

  function getTheme(themeId) {
    const themeKey = `${THEME_PREFIX}${themeId}`;
    const item = localStorage.getItem(themeKey);

    const theme = JSON.parse(item);

    return theme;
  }

  function removeTheme(themeId) {
    const themeKey = `${THEME_PREFIX}${themeId}`;
    return localStorage.removeItem(themeKey);
  }

  function removeThemes() {
    return localStorage.clear();
  }

  function exportThemeVim(theme) {
    const filename = `${theme.name}.vim`;
    const text = keywordToVim(exportCode(theme));

    const file = new Blob([text], {
      type: 'text/plain;charset=utf-8',
      name: filename,
    });

    saveAs(file, filename);
  }

  function exportThemesJson() {
    const data = getThemes();
    const filename = 'idetheme-themes.json';

    const file = new Blob([JSON.stringify(data)], {
      type: 'application/json',
      name: filename,
    });

    saveAs(file, filename);
  }

  function exportThemeJson(themeId) {
    let data;
    let filename;

    if (themeId) {
      data = getTheme(themeId);
      filename = `idetheme-${data.theme.name}.json`;
    } else {
      data = getThemes();
      filename = 'idetheme-themes.json';
    }

    const file = new Blob([JSON.stringify(data)], {
      type: 'application/json',
      name: filename,
    });

    saveAs(file, filename);
  }

  function importThemeJson(files) {
    const reader = new FileReader();

    reader.onload = () => {
      const data = JSON.parse(reader.result);
      if (Array.isArray(data)) {
        for (const theme of data) {
          saveTheme(theme.theme.id, theme);
        }
      } else {
        saveTheme(data.theme.id, data);
      }

      mitt.emit('SYNC');
    };

    reader.readAsText(files[0], 'utf-8');
  }

  return Object.freeze({
    exportThemeVim,

    exportThemesJson,
    exportThemeJson,
    importThemeJson,

    createTheme,
    saveTheme,

    getTheme,
    getThemes,

    removeTheme,
    removeThemes,
  });
}

export const Theme = CreateLocalStorageStore();
