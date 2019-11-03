import { Enum } from 'lib/enum.js';

export { ThemeModel, KeywordModel, PickerModel, PaletteModel };

const TEXT_DECORATION_STATES = Enum(
  'bold',
  'underline',
  'strikethrough',
  'italic',
);

function ThemeModel() {
  return {
    file: '../templates/javascript/javascript.html.txt',
    editor: 'vim',
    name: 'Untitled',
  };
}

function PaletteModel() {
  return {
    name: 'Untitled',
    colors: ['#BE6E46', '#CDE7B0', '#A3BFA8', '#7286A0', '#59594A'],
  };
}

function PickerModel() {
  return {
    color: [0.53, 1, 0.5], // #00ccffff hsl(192,100%,50%)
  };
}

function KeywordModel() {
  return {
    fontSettings: {
      lineHeight: '18',
      fontSize: '16',
      fontFamily: 'monospace',
    },

    keywords: {
      Normal: {
        name: 'Normal',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
      Comment: {
        name: 'Comment',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
      Constant: {
        name: 'Constant',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
      Function: {
        name: 'Function',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
      Special: {
        name: 'Special',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
      Statement: {
        name: 'Statement',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
      Todo: {
        name: 'Todo',
        foregroundColor: '#FFFFFF',
        backgroundColor: '#1d1f21',
        bold: false,
        italic: false,
        underline: '',
        lineThrough: false,
      },
    },
  };
}
