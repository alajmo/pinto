import { cloneDeep } from 'lodash';
import { keywords } from './keywords.model.js';
import { hexToRgb, rgbToHsb } from 'lib/color.js';
import { XTERM_COLORS } from 'lib/colors.js';
import { Enum } from 'lib/enum.js';

function AppModel() {
  return {
    showSidebar: true,
    showColorPicker: true,
    showColorInputs: true,
    showPalettes: true,
    showKeyword: true,

    selectedOption: 'keyword',
    selectedKeyword: 'Normal',
  };
}

function PickerModel() {
  const hex = '#ffffff';
  const rgb = hexToRgb(hex);
  const hsb = rgbToHsb(...rgb);

  return {
    hex,

    red: rgb[0],
    green: rgb[1],
    blue: rgb[2],

    hue: hsb[0],
    saturation: hsb[1],
    brightness: hsb[2],

    selectedColorAttribute: 'hue',

    leftData: [],
    rightData: [],
  };
}

async function ThemeModel() {
  const groups = {
    misc: true,
    major: true,
    minor: true,
  };

  const languages = {
    javascript: false,
    typescript: false,
    json: false,
    yaml: false,
    html: false,
    css: false,
    markdown: false,
    bash: false,
    c: false,
    cpp: false,
    go: false,
    lisp: false,
    lua: false,
    rust: false,
    ruby: false,
    perl: false,
  };

  return {
    name: 'Untitled',
    id: null,
    version: 'v1',
    editor: 'vim',
    editorTheme: 'dark',
    exportOptions: {
      gui: true,
      term: true,
    },
    groups,
    languages,
    fontSettings: {
      lineHeight: '16',
      fontSize: '12',
      fontFamily: 'monospace',
    },
    keywords: keywords.keywords.reduce((o, name) => {
      const language = keywords.keywordLanguages[name];
      let langActive;

      if (Object.keys(groups).includes(language)) {
        langActive = groups[language];
      } else {
        langActive = languages[language];
      }

      return {
        ...o,
        [name]: KeywordTemplate({
          name,
          active: langActive,
          enabled: langActive,
        }),
      };
    }, {}),

    defaultThemeName: 'Untitled',
    template: (await import('../templates/javascript/javascript.html.txt'))
      .default,
    templateTxt: (
      await import('../templates/javascript/javascript.example.txt')
    ).default,
    language: 'javascript',
    refs: keywords.refs,
    keywordLinks: keywords.keywordLinks,
    inverseKeywordLinks: keywords.inverseKeywordLinks,
    keywordLanguages: keywords.keywordLanguages,
    languageExtensions: {
      javascript: 'javaScript',
      typescript: 'typescript',
      css: 'css',
      html: 'html',
      markdown: 'markdown',
      json: 'json',
      yaml: 'yaml',
      bash: 'sh',
      rust: 'rust',
      ruby: 'ruby',
      go: 'go',
      c: 'c',
      cpp: 'cpp',
      lisp: 'lisp',
      lua: 'lua',
      perl: 'pl',
    },
  };
}

function PaletteModel() {
  const PALETTE_MODES = Enum('normal', 'remove');

  const defaultPalette = {
    name: 'Untitled',
    colors: ['#BE6E46', '#CDE7B0', '#A3BFA8', '#7286A0', '#59594A'],
    type: 'default',

    selectedColor: null,
    currentMode: PALETTE_MODES.normal,
    readonly: false,
  };

  const xtermPalette = {
    name: 'xterm 256 colors',
    colors: XTERM_COLORS.map(c => c.hexString),
    type: 'xterm',

    selectedColor: null,
    currentMode: PALETTE_MODES.normal,
    readonly: true,
  };

  return {
    foregroundColor: '#ffffff',
    backgroundColor: '#1c1c1c',
    selectedInput: 'foregroundColor',
    modes: PALETTE_MODES,

    xtermPalette,
    defaultPalette,

    palettes: [cloneDeep(defaultPalette), cloneDeep(xtermPalette)],
  };
}

function KeywordTemplate({ name = '', active = true, enabled = true } = {}) {
  const keyword = {
    name,
    foregroundColor: '#ffffff',
    backgroundColor: '#1c1c1c',
    bold: false,
    italic: false,
    underline: false,
    lineThrough: false,

    active, // If a keyword is to be used at all
    enabled, // To temporarily enable / disable a keyword and have its linked counterpart take predence
  };

  return keyword;
}

export { AppModel, ThemeModel, PickerModel, PaletteModel, KeywordTemplate };
