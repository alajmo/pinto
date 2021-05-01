import { openDB } from 'idb';
import { saveAs } from 'file-saver';
import { uuid } from 'lib/uuid.js';
import { exportCode } from 'lib/util.js';
import { mitt } from 'lib/event.js';
import { ThemeModel, PaletteModel } from 'state/models.js';
import { keywordToVim } from 'lib/json-to-editor.js';

function CreateModel() {
  let db;

  async function init() {
    db = await openDB('pinto', 1, {
      upgrade(db) {
        const themeStore = 'themes';
        if (!db.objectStoreNames.contains(themeStore)) {
          db.createObjectStore(themeStore, {
            keyPath: 'id',
          });
        }
      },
    });
  }

  function formatThemeData({
    themeName,
    themeId,
    theme,
    palette,
    created,
    updated,
  }) {
    return {
      id: themeId ? themeId : theme.id,
      created,
      updated,

      theme: {
        id: themeId ? themeId : theme.id,
        name: themeName ? themeName : theme.name,
        version: theme.version,
        editor: theme.editor,
        editorTheme: theme.editorTheme,
        fontSettings: theme.fontSettings,
        keywords: theme.keywords,
        groups: theme.groups,
        groupKeywords: theme.groupKeywords,
        keywordLinks: theme.keywordLinks,
        keywordGroups: theme.keywordGroups,

        fileHandle: theme.fileHandle,
        created,
        updated,
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
    const now = new Date().getTime();

    saveTheme(
      themeId,
      {
        themeName,
        theme,
        palette,
      },
      {
        created: now,
        updated: now,
      },
    );

    return themeId;
  }

  async function saveTheme(
    themeId,
    { themeName, theme, palette },
    { created, updated } = {},
  ) {
    if (theme.fileHandle && theme.fileHandle.kind === 'file') {
      const text = keywordToVim(exportCode(theme));
      const writable = await theme.fileHandle.createWritable();
      await writable.write(text);
      await writable.close();
    }

    const data = formatThemeData({
      themeId,
      themeName,
      theme,
      palette,
      created: theme.created ? theme.created : created,
      updated: theme.updated ? theme.updated : updated,
    });

    try {
      mitt.emit('CHANGES_SAVED');
      return await db.put('themes', data);
    } catch (e) {
      console.error(e);
    }

    return null;
  }

  async function getThemes() {
    let themes = [];
    try {
      themes = await db.getAll('themes');
    } catch (e) {
      console.error(e);
    }

    return themes;
  }

  async function getTheme(themeId) {
    let theme = null;
    try {
      theme = await db.get('themes', themeId);
    } catch (e) {
      console.error(e);
    }

    return theme;
  }

  async function removeTheme(themeId) {
    try {
      return await db.delete('themes', themeId);
    } catch (e) {
      console.error(e);
    }

    // return localStorage.removeItem(themeKey);
  }

  async function removeThemes() {
    return await db.clear('themes');
    // return localStorage.clear();
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

  async function exportThemesJson() {
    const data = await getThemes();
    const filename = 'pinto-themes.json';

    const file = new Blob([JSON.stringify(data)], {
      type: 'application/json',
      name: filename,
    });

    saveAs(file, filename);
  }

  async function exportThemeJson(themeId) {
    let data;
    let filename;

    if (themeId) {
      data = await getTheme(themeId);
      filename = `pinto-${data.theme.name}.json`;
    } else {
      data = await getThemes();
      filename = 'pinto-themes.json';
    }

    const file = new Blob([JSON.stringify(data)], {
      type: 'application/json',
      name: filename,
    });

    saveAs(file, filename);
  }

  async function importThemeJson(files) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = (err) => {
        reject(err);
      };

      reader.onload = async () => {
        const data = JSON.parse(reader.result);
        if (Array.isArray(data)) {
          for (const theme of data) {
            await saveTheme(theme.theme.id, theme);
          }
        } else {
          await saveTheme(data.theme.id, data);
        }

        resolve();
      };

      reader.readAsText(files[0], 'utf-8');
    });
  }

  return Object.freeze({
    init,
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

export const Theme = CreateModel();
