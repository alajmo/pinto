const path = require('path');
const fs = require('fs');
const templatesPath = path.resolve('./bin/templates');

const templates = fs.readdirSync(templatesPath).sort();

const keywords = {
  groupKeywords: {},
  keywords: [],
};

templates.forEach(template => {
  const templatePath = `${path.join(
    templatesPath,
    template,
  )}/${template}.template.js`;

  const chars = require(templatePath);

  const processedChars = [];

  let prevRow = null;
  chars.forEach(char => {
    if (char.row !== prevRow) {
      const rowString = char.row.toString();

      for (const c of rowString) {
        const lineNrChar = { group: 'LineNr', row: char.row, char: c };
        processedChars.push(lineNrChar);
      }
    }

    processedChars.push(char);
    prevRow = char.row;
  });

  const groups = [];
  let currGroup = {};
  prevRow = 1;

  // Combine character groups
  processedChars.forEach(({ group, linkedGroup, row, char }, i) => {
    char = escapeChar(char);
    if (currGroup.group === undefined) {
      currGroup = { group, linkedGroup, row, char: '' };
    }

    if (row !== prevRow) {
      currGroup.char += '\n';
    }

    if (group === currGroup.group) {
      currGroup.char += char;
    } else {
      groups.push(currGroup);
      currGroup = { group, linkedGroup, row, char };
    }

    if (i === processedChars.length - 1) {
      groups.push(currGroup);
    }

    prevRow = row;
  });

  // Generate intermediate groups
  const intermediateFilePath = path.join(
    templatesPath,
    template,
    `${template}.intermediate.js`,
  );

  const intermediateGroups = `module.exports = ${JSON.stringify(
    groups,
    null,
    4,
  )}`;
  fs.writeFileSync(intermediateFilePath, intermediateGroups);

  let str = '';
  groups.forEach(({ group, linkedGroup, row, char }, i) => {
    if (group === 'LineNr' && row === 1) {
      str += `<span title="${group} "class="${group} first-LineNr">${char}</span>  `;
    } else if (group === 'LineNr' && row === groups[groups.length - 1].row) {
      str += `<span title="${group} "class="${group} last-LineNr">${char}</span>  `;
    } else if (group === 'LineNr') {
      str += `<span title="${group} "class="${group}">${char}</span>  `;
    } else {
      str += `<span title="${group} "class="${group}">${char}</span>`;
    }
  });

  // Output html template
  const outputFilePath = path.join(
    templatesPath,
    template,
    `${template}.html.txt`,
  );

  fs.writeFileSync(outputFilePath, str);

  // Find unique groups and order them from most occurrences to least
  const uniqGroups = Object.entries(
    groups.reduce((prev, curr) => {
      let sum = 1;

      if (prev[curr.group]) {
        sum = prev[curr.group] + 1;
      }

      return { ...prev, [curr.group]: sum };
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .sort((a, b) => {
      // Make sure default keywords come first
      const aCapital = startsWithCapitalLetter(a[0]);
      const bCapital = startsWithCapitalLetter(b[0]);

      if (aCapital && bCapital) {
        return 0;
      } else if (aCapital) {
        return -1;
      }
      return 1;
    })
    .map(x => {
      return x[0];
    });

  keywords.groupKeywords[template] = uniqGroups;
  keywords.keywords = Array.from(new Set(keywords.keywords.concat(uniqGroups)));
});

function escapeChar(char) {
  let escape;
  switch (char) {
    case '"': // "
      escape = '&quot;';
      break;
    case '&': // &
      escape = '&amp;';
      break;
    case "'": // '
      escape = '&#39;';
      break;
    case '=':
      escape = '&#61;';
      break;
    case '<': // <
      escape = '&lt;';
      break;
    case '>': // >
      escape = '&gt;';
      break;
    default:
      escape = char;
  }

  return escape;
}

function startsWithCapitalLetter(word) {
  return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
}
