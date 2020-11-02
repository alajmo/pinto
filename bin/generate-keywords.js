const readline = require('readline');
const fs = require('fs');

function parseSyntax(language, file) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(file),
    });

    const synKeywords = {};
    const hiKeywords = {};

    // hi def link <keyword> <links-to-keyword>
    const hiRe = /(^|\s*)(hi def link)\s*([a-zA-Z0-9]*)\s*([a-zA-Z0-9]*)/g;

    // syn(tax) <match|region> <keyword>
    const synRe = /(^|\s*)(syn|syntax)\s*(match|region)\s*([a-zA-Z0-9]*)/g;
    rl.on('line', line => {
      const hiMatches = line.matchAll(hiRe);
      for (const match of hiMatches) {
        if (match[3]) {
          hiKeywords[match[3].trim()] = match[4].trim();
        }
      }

      const synMatches = line.matchAll(synRe);
      for (const match of synMatches) {
        if (match[4]) {
          synKeywords[match[4].trim()] = 'Normal';
        }
      }
    }).on('close', () => {
      const keywords = { ...synKeywords, ...hiKeywords };
      resolve(keywords);
    });
  });
}

const descriptions = {
  ColorColumn: "Used for the columns set with 'colorcolumn'",
  Conceal: 'Placeholder characters substituted for concealed text',
  Cursor: 'The character under the cursor',
  CursorColumn:
    "The screen column that the cursor is in when 'cursorcolumn' is set",
  CursorIM: 'Like Cursor, but used when in IME mode |CursorIM|',
  CursorLine: "The screen line that the cursor is in when 'cursorline' is set",
  CursorLineNr:
    "Like LineNr when 'cursorline' is set and 'cursorlineopt' is set to 'number' or 'both', or 'relativenumber' is set, for the cursor line",
  DiffAdd: 'Added line',
  DiffChange: 'Changed line',
  DiffDelete: 'Deleted line',
  DiffText: 'Changed text within a changed line',
  Directory: 'Directory names (and other special names in listings)',
  EndOfBuffer: 'Filler lines (~) after the last line in the buffer',
  ErrorMsg: 'Error messages on the command line',
  FoldColumn: "'foldcolumn'",
  Folded: 'Line used for closed folds',
  IncSearch:
    "'incsearch' highlighting; also used for the text replaced with ':s///c'",
  LineNr:
    "Line number for ':number' and ':#' commands, and when 'number' or 'relativenumber' option is set.",
  LineNrAbove:
    "Line number for when the 'relativenumber' option is set: 'above the cursor line'",
  LineNrBelow:
    "Line number for when the 'relativenumber' option is set: 'below the cursor line'",
  MatchParen:
    'The character under the cursor or just before it, if it is a paired bracket, and its match',
  ModeMsg: "'showmode' message (e.g., '-- INSERT --')",
  MoreMsg: '|more-prompt|',
  NonText:
    "'@' at the end of the window, characters from 'showbreak' and other characters that do not really exist in the text (e.g., " >
    " displayed when a double-wide character doesn't fit at the end of the line)",
  Pmenu: 'Popup menu: normal item',
  PmenuSbar: 'Popup menu: scrollbar',
  PmenuSel: 'Popup menu: selected item',
  PmenuThumb: 'Popup menu: Thumb of the scrollbar',
  Question: '|hit-enter| prompt and yes/no questions',
  QuickFixLine: 'Current |quickfix| item in the quickfix window',
  Search:
    "Last search pattern highlighting (see 'hlsearch'). Also used for similar items that need to stand out",
  SignColumn: 'Column where |signs| are displayed',
  SpecialKey:
    "Meta and special keys listed with ':map', also for text used to show unprintable characters in the text, 'listchars'. Generally: text that is displayed differently from what it really is",
  SpellBad:
    'Word that is not recognized by the spellchecker. |spell| This will be combined with the highlighting used otherwise',
  SpellCap:
    'Word that should start with a capital. |spell| This will be combined with the highlighting used otherwise',
  SpellLocal:
    'Word that is recognized by the spellchecker as one that is used in another region. |spell| This will be combined with the highlighting used otherwise',
  SpellRare:
    'Word that is recognized by the spellchecker as one that is hardly ever used. |spell| This will be combined with the highlighting used otherwise',
  StatusLine: 'Status line of current window',
  StatusLineNC:
    "Status lines of not-current windows Note: if this is equal to 'StatusLine' Vim will use '^^^' in the status line of the current window",
  StatusLineTerm: 'Status line of current window, if it is a |terminal| window',
  StatusLineTermNC:
    'Status lines of not-current windows that is a |terminal| window',
  TabLine: 'Tab pages line, not active tab page label',
  TabLineFill: 'Tab pages line, where there are no labels',
  TabLineSel: 'Tab pages line, active tab page label',
  Terminal: '|terminal| window (see |terminal-size-color|)',
  Title: "Titles for output from ':set all', ':autocmd' etc.",
  VertSplit: 'The column separating vertically split windows',
  Visual: 'Visual mode selection',
  VisualNOS:
    "Visual mode selection when vim is 'Not Owning the Selection'. Only X11 Gui's |gui-x11| and |xterm-clipboard| supports this.",
  WarningMsg: 'Warning messages',
  WildMenu: "Current match in 'wildmenu' completion",
  lCursor:
    "The character under the cursor when |language-mapping| is used (see 'guicursor')",

  Normal: 'Normal text',
  Comment: 'Any comment',
  Constant: 'Any constant',
  Identifier: 'Any variable name',
  Statement: 'Any statement',
  PreProc: 'Generic Preprocessor',
  Type: 'int, long, char, etc.',
  Special: 'Any special symbol',
  Underlined: 'Text that stands out, HTML links',
  Ignore: 'Left blank, hidden  |hl-Ignore|',
  Error: 'Any erroneous construct',
  Todo:
    'Anything that needs extra attention; mostly the keywords TODO FIXME and XXX',

  String: "A string constant: 'this is a string'",
  Character: "A character constant: 'c', '\n'",
  Number: 'A number constant: 234, 0xff',
  Boolean: 'A boolean constant: TRUE, false',
  Float: 'A floating point constant: 2.3e10',
  Function: 'Function name (also: methods for classes)',
  Conditional: 'if, then, else, endif, switch, etc.',
  Repeat: 'for, do, while, etc.',
  Label: 'case, default, etc.',
  Operator: "'izeof', '+', '*', etc.",
  Keyword: 'Any other keyword',
  Exception: 'try, catch, throw',
  Include: 'Preprocessor #include',
  Define: 'Preprocessor #define',
  Macro: 'Same as Define',
  PreCondit: 'Preprocessor #if, #else, #endif, etc.',
  StorageClass: 'static, register, volatile, etc.',
  Structure: 'struct, union, enum, etc.',
  Typedef: 'A typedef',
  SpecialChar: 'Special character in a constant',
  Tag: 'You can use CTRL-] on this',
  Delimiter: 'Character that needs attention',
  SpecialComment: 'Special things inside a comment',
  Debug: 'Debugging statements',
};

async function main() {
  const languages = {
    javascript: './bin/templates/javascript/javascript.vim',
    typescript: './bin/templates/typescript/typescript.vim',
    css: './bin/templates/css/css.vim',
    html: './bin/templates/html/html.vim',
    markdown: './bin/templates/markdown/markdown.vim',
    bash: './bin/templates/bash/bash.vim',
    rust: './bin/templates/rust/rust.vim',
    ruby: './bin/templates/ruby/ruby.vim',
    go: './bin/templates/go/go.vim',
    c: './bin/templates/c/c.vim',
    cpp: './bin/templates/cpp/cpp.vim',
    lisp: './bin/templates/lisp/lisp.vim',
    lua: './bin/templates/lua/lua.vim',
    perl: './bin/templates/perl/perl.vim',
    haskell: './bin/templates/haskell/haskell.vim',
    clojure: './bin/templates/clojure/clojure.vim',
    erlang: './bin/templates/erlang/erlang.vim',
    json: './bin/templates/json/json.vim',
    yaml: './bin/templates/yaml/yaml.vim',
    toml: './bin/templates/toml/toml.vim',
    make: './bin/templates/make/make.vim',
    vim: './bin/templates/vim/vim.vim',
  };

  const keywords = {};
  // Parse files and get keywords
  for (const language of Object.entries(languages)) {
    keywords[language[0]] = await parseSyntax(language[0], language[1]);
  }

  // TODO: Currently this segment is not used, but maybe will use it in future to clear keywords
  // Resolve linked groups (if not found and is not capital, set it to cleared, javaScriptValue is cleared, Keyword is cleared, etc.)
  inverseKeywordLinks = {};
  for (const lang of Object.entries(languages)) {
    const ks = keywords[lang[0]];

    for (const k of Object.entries(ks)) {
      if (inverseKeywordLinks.hasOwnProperty(k[1])) {
        inverseKeywordLinks[k[1]].push(k[0]);
      } else {
        inverseKeywordLinks[k[1]] = [k[0]];
      }
    }

    for (const kw of Object.keys(ks)) {
      if (!inverseKeywordLinks.hasOwnProperty(kw)) {
        inverseKeywordLinks[kw] = [];
      }
    }

    // This is for those keywords in language that point to a keyword defined in the same language, we resolve them
    // if (ks[k[1]]) {
    //   console.log(k[1], ks[k[1]]);
    //   ks[k[0]] = ks[k[1]];
    // }
  }

  // Go through major/minor and add empty array if none of them have any keywords that point to them, like keyword `Tag`

  // Data
  const data = {
    keywords: [],
    groupKeywords: {},
    keywordLinks: {},
    keywordGroups: {},
    inverseKeywordLinks,
  };

  for (const lang of Object.entries(languages)) {
    data.groupKeywords[lang[0]] = Object.keys(keywords[lang[0]]);
    data.keywords = [...Object.keys(keywords[lang[0]]), ...data.keywords];
    data.keywordLinks = { ...keywords[lang[0]], ...data.keywordLinks };

    const kl = Object.keys(keywords[lang[0]]).reduce(
      (prev, curr) => ({ [curr]: lang[0], ...prev }),
      {},
    );

    data.keywordGroups = { ...kl, ...data.keywordGroups };
  }

  data.groupKeywords.misc = [
    'ColorColumn',
    'Conceal',
    'Cursor',
    'lCursor',
    'CursorIM',
    'CursorColumn',
    'CursorLine',
    'Directory',
    'DiffAdd',
    'DiffChange',
    'DiffDelete',
    'DiffText',
    'EndOfBuffer',
    'ErrorMsg',
    'VertSplit',
    'Folded',
    'FoldColumn',
    'SignColumn',
    'IncSearch',
    'LineNr',
    'LineNrAbove',
    'LineNrBelow',
    'CursorLineNr',
    'MatchParen',
    'ModeMsg',
    'MoreMsg',
    'NonText',
    'Pmenu',
    'PmenuSel',
    'PmenuSbar',
    'PmenuThumb',
    'Question',
    'QuickFixLine',
    'Search',
    'SpecialKey',
    'SpellBad',
    'SpellCap',
    'SpellLocal',
    'SpellRare',
    'StatusLine',
    'StatusLineNC',
    'StatusLineTerm',
    'StatusLineTermNC',
    'TabLine',
    'TabLineFill',
    'TabLineSel',
    'Terminal',
    'Title',
    'Visual',
    'VisualNOS',
    'WarningMsg',
    'WildMenu',
  ];
  data.keywords = [...data.groupKeywords.misc, ...data.keywords];
  data.keywordLinks = {
    ColorColumn: 'Normal',
    Conceal: 'Normal',
    Cursor: 'Normal',
    lCursor: 'Normal',
    CursorIM: 'Normal',
    CursorColumn: 'Normal',
    CursorLine: 'Normal',
    Directory: 'Normal',
    DiffAdd: 'Normal',
    DiffChange: 'Normal',
    DiffDelete: 'Normal',
    DiffText: 'Normal',
    EndOfBuffer: 'Normal',
    ErrorMsg: 'Normal',
    VertSplit: 'Normal',
    Folded: 'Normal',
    FoldColumn: 'Normal',
    SignColumn: 'Normal',
    IncSearch: 'Normal',
    LineNr: 'Normal',
    LineNrAbove: 'Normal',
    LineNrBelow: 'Normal',
    CursorLineNr: 'Normal',
    MatchParen: 'Normal',
    ModeMsg: 'Normal',
    MoreMsg: 'Normal',
    NonText: 'Normal',
    Pmenu: 'Normal',
    PmenuSel: 'Normal',
    PmenuSbar: 'Normal',
    PmenuThumb: 'Normal',
    Question: 'Normal',
    QuickFixLine: 'Normal',
    Search: 'Normal',
    SpecialKey: 'Normal',
    SpellBad: 'Normal',
    SpellCap: 'Normal',
    SpellLocal: 'Normal',
    SpellRare: 'Normal',
    StatusLine: 'Normal',
    StatusLineNC: 'Normal',
    StatusLineTerm: 'Normal',
    StatusLineTermNC: 'Normal',
    TabLine: 'Normal',
    TabLineFill: 'Normal',
    TabLineSel: 'Normal',
    Terminal: 'Normal',
    Title: 'Normal',
    Visual: 'Normal',
    VisualNOS: 'Normal',
    WarningMsg: 'Normal',
    WildMenu: 'Normal',

    ...data.keywordLinks,
  };

  data.groupKeywords.misc.forEach(k => {
    if (!data.inverseKeywordLinks.hasOwnProperty(k)) {
      data.inverseKeywordLinks[k] = [];
    }
  });

  // Major
  data.groupKeywords.major = [
    'Normal',
    'Comment',
    'Constant',
    'Identifier',
    'Statement',
    'PreProc',
    'Type',
    'Special',
    'Underlined',
    'Ignore',
    'Error',
    'Todo',
  ];
  data.keywords = [...data.groupKeywords.major, ...data.keywords];
  data.keywordGroups = {
    ...data.groupKeywords.major.reduce(
      (prev, curr) => ({ [curr]: 'major', ...prev }),
      {},
    ),
    ...data.keywordGroups,
  };
  data.keywordLinks = {
    Normal: null,
    Comment: 'Normal',
    Constant: 'Normal',
    Identifier: 'Normal',
    Statement: 'Normal',
    PreProc: 'Normal',
    Type: 'Normal',
    Special: 'Normal',
    Underlined: 'Normal',
    Ignore: 'Normal',
    Error: 'Normal',
    Todo: 'Normal',

    ...data.keywordLinks,
  };
  data.groupKeywords.major.forEach(k => {
    if (!data.inverseKeywordLinks.hasOwnProperty(k)) {
      data.inverseKeywordLinks[k] = [];
    }
  });
  // Major
  data.groupKeywords.minor = [
    'String',
    'Character',
    'Number',
    'Boolean',
    'Float',
    'Function',
    'Conditional',
    'Repeat',
    'Label',
    'Operator',
    'Keyword',
    'Exception',
    'Include',
    'Define',
    'Macro',
    'PreCondit',
    'StorageClass',
    'Structure',
    'Typedef',
    'SpecialChar',
    'Tag',
    'Delimiter',
    'SpecialComment',
    'Debug',
  ];
  data.keywords = [...data.groupKeywords.minor, ...data.keywords];
  data.keywordGroups = {
    ...data.groupKeywords.minor.reduce(
      (prev, curr) => ({ [curr]: 'minor', ...prev }),
      {},
    ),
    ...data.keywordGroups,
  };

  const minorKeywordLinks = {
    String: 'Constant',
    Character: 'Constant',
    Number: 'Constant',
    Boolean: 'Constant',
    Float: 'Constant',
    Function: 'Identifier',
    Conditional: 'Statement',
    Repeat: 'Statement',
    Label: 'Statement',
    Operator: 'Statement',
    Keyword: 'Statement',
    Exception: 'Statement',
    Include: 'PreProc',
    Define: 'PreProc',
    Macro: 'PreProc',
    PreCondit: 'PreProc',
    StorageClass: 'Type',
    Structure: 'Type',
    Typedef: 'Type',
    SpecialChar: 'Special',
    Tag: 'Special',
    Delimiter: 'Special',
    SpecialComment: 'Special',
    Debug: 'Special',
  };

  data.keywordLinks = {
    ...minorKeywordLinks,
    ...data.keywordLinks,
  };

  Object.entries(minorKeywordLinks).forEach(k => {
    if (inverseKeywordLinks.hasOwnProperty(k[1])) {
      inverseKeywordLinks[k[1]].push(k[0]);
    } else {
      inverseKeywordLinks[k[1]] = [k[0]];
    }
  });

  data.groupKeywords.minor.forEach(k => {
    if (!data.inverseKeywordLinks.hasOwnProperty(k)) {
      data.inverseKeywordLinks[k] = [];
    }
  });

  // Cleanup cleared keywords like javaScriptValue
  // Loop through keywordLinks, see that the linked value points to a keyword found in KeywordLinks, if not do:
  //
  //  - inverseKeywordLinks, remove javaScriptValue and add the value of it to Normal keyword instead
  for (const [keyword, linkedKeyword] of Object.entries(data.keywordLinks)) {
    if (
      data.keywordLinks[linkedKeyword] === undefined &&
      linkedKeyword !== null
    ) {
      // Link to Normal
      data.keywordLinks[keyword] = 'Normal';

      // Delete the linked keyword
      delete data.inverseKeywordLinks[linkedKeyword];
      data.inverseKeywordLinks.Normal.push(keyword);

      // console.log(data.keywordLinks[linkedKeyword], keyword, linkedKeyword);
    }
  }

  data.descriptions = descriptions;

  fs.writeFileSync(
    './src/state/keywords.model.js',
    `export const keywords = ${JSON.stringify(data, null, 2)};
  `,
  );
}

main();
