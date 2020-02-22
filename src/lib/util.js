export function range(x = 0, y) {
  return Array.from(
    (function* () {
      while (x <= y) yield x++;
    })(),
  );
}

export function intersect(arrays) {
  if (0 === arrays.length) {
    return [];
  }

  return arrays.reduce((intersection, array) => {
    return intersection.filter(intersectedItem =>
      array.some(item => intersectedItem === item),
    );
  }, arrays[0]);
}

export function getDefaultKeywords(refs) {
  const defaultKeywords = Array.from(
    new Set(
      Object.entries(refs).reduce((prev, curr) => {
        return prev.concat(
          curr[1].filter(keyword => startsWithCapitalLetter(keyword)),
        );
      }, []),
    ),
  );

  return defaultKeywords;
}

export function getLanguageKeywords(languages, refs) {
  return Object.entries(languages)
    .filter(l => l[1])
    .map(l => ({
      language: l[0],
      keywords: refs[l[0]].filter(k => !startsWithCapitalLetter(k)),
    }));
}

export function getUniqueColors(colors) {
  const uniqueColors = [];
  for (let { foregroundColor, backgroundColor } of colors) {
    if (
      !uniqueColors.find(
        i =>
          i.foregroundColor === foregroundColor &&
          i.backgroundColor === backgroundColor,
      )
    ) {
      uniqueColors.push({ foregroundColor, backgroundColor });
    }
  }

  return uniqueColors;
}

export function startsWithCapitalLetter(word) {
  return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}

export function cssPreviewKeyword(keyword, normalKeyword) {
  const fontWeight = keyword.bold ? 'bold' : 'normal';
  const fontStyle = keyword.italic ? 'italic' : 'normal';
  const underline = keyword.underline ? 'underline ' : '';
  const strikethrough = keyword.lineThrough ? 'line-through' : '';
  const textDecoration = `${underline}${strikethrough}`;

  const foregroundColor =
    keyword.foregroundColor === null
      ? normalKeyword.foregroundColor
      : keyword.foregroundColor;
  const backgroundColor =
    keyword.backgroundColor === null
      ? normalKeyword.backgroundColor
      : keyword.backgroundColor;

  return `
    background: ${backgroundColor};
    color: ${foregroundColor};
    font-weight: ${fontWeight};
    font-style: ${fontStyle};
    text-decoration: ${textDecoration};
  `;
}

export function exportCode({
  name,
  editorTheme,
  keywords,
  languages,
  refs,
  exportOptions,
}) {
  return {
    name,
    editorTheme: editorTheme,
    languages: Object.entries(languages)
      .filter(language => language[1])
      .map(language => language[0]),
    refs: refs,
    keywordGroups: [
      {
        title: 'Default Keywords',
        keywords: refs.misc.filter(k => keywords[k].enabled),
        display: true,
      },
      {
        title: 'Major Keywords',
        keywords: refs.major.filter(k => keywords[k].enabled),
        display: true,
      },
      {
        title: 'Minor Keywords',
        keywords: refs.minor.filter(k => keywords[k].enabled),
        display: true,
      },

      ...Object.entries(languages).map(l => ({
        title: l[0],
        keywords: refs[l[0]].filter(k => keywords[k].active),
        display: l[1],
      })),
    ],
    keywords,
    exportOptions,
  };
}

export const compose = f => g => x => f(g(x));
export const compose2 = f => g => x => y => f(g(x(y)));
