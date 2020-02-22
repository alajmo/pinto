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

async function main() {
  const languages = {
    javascript: './bin/templates/javascript/javascript.vim',
    typescript: './bin/templates/typescript/typescript.vim',
    css: './bin/templates/css/css.vim',
    html: './bin/templates/html/html.vim',
    markdown: './bin/templates/markdown/markdown.vim',
    json: './bin/templates/json/json.vim',
    yaml: './bin/templates/yaml/yaml.vim',
    bash: './bin/templates/bash/bash.vim',
    rust: './bin/templates/rust/rust.vim',
    ruby: './bin/templates/ruby/ruby.vim',
    go: './bin/templates/go/go.vim',
    c: './bin/templates/c/c.vim',
    cpp: './bin/templates/cpp/cpp.vim',
    lisp: './bin/templates/lisp/lisp.vim',
    lua: './bin/templates/lua/lua.vim',
    perl: './bin/templates/perl/perl.vim',
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
    refs: {},
    keywordLinks: {},
    keywordLanguages: {},
    inverseKeywordLinks,
  };

  for (const lang of Object.entries(languages)) {
    data.refs[lang[0]] = Object.keys(keywords[lang[0]]);
    data.keywords = [...Object.keys(keywords[lang[0]]), ...data.keywords];
    data.keywordLinks = { ...keywords[lang[0]], ...data.keywordLinks };

    const kl = Object.keys(keywords[lang[0]]).reduce(
      (prev, curr) => ({ [curr]: lang[0], ...prev }),
      {},
    );

    data.keywordLanguages = { ...kl, ...data.keywordLanguages };
  }

  data.refs.misc = [
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
  data.keywords = [...data.refs.misc, ...data.keywords];
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

  data.refs.misc.forEach(k => {
    if (!data.inverseKeywordLinks.hasOwnProperty(k)) {
      data.inverseKeywordLinks[k] = [];
    }
  });

  // Major
  data.refs.major = [
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
  data.keywords = [...data.refs.major, ...data.keywords];
  data.keywordLanguages = {
    ...data.refs.major.reduce(
      (prev, curr) => ({ [curr]: 'major', ...prev }),
      {},
    ),
    ...data.keywordLanguages,
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
  data.refs.major.forEach(k => {
    if (!data.inverseKeywordLinks.hasOwnProperty(k)) {
      data.inverseKeywordLinks[k] = [];
    }
  });
  // Major
  data.refs.minor = [
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
  data.keywords = [...data.refs.minor, ...data.keywords];
  data.keywordLanguages = {
    ...data.refs.minor.reduce(
      (prev, curr) => ({ [curr]: 'minor', ...prev }),
      {},
    ),
    ...data.keywordLanguages,
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

  data.refs.minor.forEach(k => {
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

  fs.writeFileSync(
    './src/state/keywords.model.js',
    `export const keywords = ${JSON.stringify(data, null, 2)};
  `,
  );
}

main();
