import { cloneDeep } from 'lodash-es';
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
  const languages = [
    'javascript',
    'typescript',
    'html',
    'css',
    'markdown',
    'bash',
    'c',
    'cpp',
    'go',
    'lisp',
    'lua',
    'rust',
    'ruby',
    'perl',
    'haskell',
    'clojure',
    'erlang',
    'python',
    'php',
    'json',
    'yaml',
    'toml',
    'make',
    'vim',
  ];

  const groups = {
    ...languages.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}),

    misc: true,
    major: true,
    minor: true,
    javascript: true,
  };

  const now = new Date().getTime();

  const keywordsData = {};
  const ks = Object.values(keywords.keywords);
  for (let i = 0; i < ks.length; i++) {
    keywordsData[ks[i]] = KeywordTemplate({
      name: ks[i],
      active: groups[keywords.keywordGroups[name]],
      enabled: groups[keywords.keywordGroups[name]],
    });
  }

  return {
    name: 'Untitled',
    id: null,
    version: 'v1',
    editor: 'vim',
    editorTheme: 'dark',

    groups,

    fontSettings: {
      lineHeight: '14',
      fontSize: '12',
      fontFamily: 'monospace',
    },
    fileHandle: null,
    created: now,
    updated: now,

    descriptions: keywords.descriptions,

    keywords: keywordsData,
    defaultThemeName: 'Untitled',
    template: (await import('templates/javascript/javascript.html.txt?raw')).default,
    templateTxt: ( await import('templates/javascript/javascript.example.txt?raw')).default,
    language: 'javascript',
    groupKeywords: keywords.groupKeywords,
    keywordLinks: keywords.keywordLinks,
    // inverseKeywordLinks: keywords.inverseKeywordLinks, // TODO: Remove this, it's not needed anymore
    keywordGroups: keywords.keywordGroups,
    languages,
    languageExtensions: {
      javascript: 'javaScript',
      typescript: 'typescript',
      css: 'css',
      html: 'html',
      markdown: 'markdown',
      bash: 'sh',
      rust: 'rust',
      ruby: 'ruby',
      go: 'go',
      c: 'c',
      cpp: 'cpp',
      lisp: 'lisp',
      lua: 'lua',
      perl: 'pl',
      haskell: 'hs',
      clojure: 'clj',
      erlang: 'erl',
      python: 'py',
      php: 'php',
      json: 'json',
      yaml: 'yaml',
      toml: 'toml',
      make: 'mak',
      vim: 'vim',
    },
  };
}

function PaletteModel() {
  const PALETTE_MODES = Enum('normal', 'remove');

  const defaultPalette = {
    name: 'Untitled',
    colors: ['#000000', '#ffffff', '#A3BFA8'],
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

  return cloneDeep(keyword);
}

export { AppModel, ThemeModel, PickerModel, PaletteModel, KeywordTemplate };
