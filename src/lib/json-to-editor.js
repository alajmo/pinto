export { keywordToVim };
import { hexToX256, handleNullColor } from 'lib/color.js';

function keywordToVim({
  name,
  editorTheme,
  keywordGroups,
  keywords,
}) {

  const file = `
"""
" Name: ${name}.vim
"""

set background=${editorTheme}
hi clear

if exists('syntax on')
    syntax reset
endif

let g:colors_name='${name.trim()}'
set t_Co=256

${keywordGroups
  .filter(({ display }) => display)
  .filter(({ keywords }) => keywords.length > 0)
  .map(
    group => {
      const alignedText = alignText(group.keywords
        .map(keyword => highlight(keywords[keyword]))
        ).join('');

      return `\n" ${group.title}\n\n${alignedText}`;
    }
  )
  .join('')}
`;

  return file;
}

function highlight(keyword) {
  return `hi ${keyword.name} guisp=NONE guifg=${handleNullColor(keyword.foregroundColor)} guibg=${handleNullColor(keyword.backgroundColor)} ctermfg=${hexToX256(keyword.foregroundColor)} ctermbg=${hexToX256(keyword.backgroundColor)} gui=${formatAttrs(keyword)} cterm=${formatAttrs(keyword)}\n`;
}

function formatAttrs({ bold, italic, underline, lineThrough }) {
  const attrs = Object.assign(
    [],
    [
      bold ? ['bold'] : null,
      italic ? ['italic'] : null,
      underline ? ['underline'] : null,
      lineThrough ? ['strikethrough'] : null,
    ],
  )
    .flat()
    .filter(a => a !== null)
    .join(',');

  return attrs.length > 0 ? attrs : 'NONE';
}

function alignText(arr) {
  let length = Array(arr[0].split(' ').length).fill(0);

  const alignedStr = arr
    .map(i => i.split(' '))
    .map((v) => {
      v.forEach((w, i) => {
        if (w.length > length[i]) {
          length[i] = w.length;
        }
      });

      return v;
    })
    .map((v) => {
      v.forEach((w, i) => {
        if (w.length < length[i] && i < length.length - 1) {
          v[i] = v[i].padEnd(length[i], ' ');
        }
      });

      return v;
    })
    .map(v => {
      return v.join(' ');
    });

  return alignedStr;
}
