const path = require('path');
const fs = require('fs');
const templatesPath = path.resolve('./src/templates');

const templates = fs.readdirSync(templatesPath);

templates.forEach(template => {
  const templatePath = `${path.join(
    templatesPath,
    template,
  )}/${template}.template.js`;

  let chars = require(templatePath);

  let str = '';
  let prevRow = -1;
  let prevGroup = '';
  let nextGroup = '';
  chars.forEach(({ group, row, column, char }, i) => {
    if (prevRow !== row) {
      str += '\n';
    }

    if (i === 0) {
      str += `<span class="${group}">${char}`;
    } else if (i === chars.length - 1) {
      str += `${char}</span>`;
    } else {
      prevGroup = chars[i - 1].group;
      nextGroup = chars[i + 1].group;

      if (prevGroup === group) {
        str += `${char}`;
      }

      if (nextGroup !== group) {
        str += '</span>';
      }

      if (prevGroup !== group) {
        str += `<span class="${group}">${char}`;
      }
    }

    prevRow = row;
  });

  const outputFileParts = path.basename(templatePath).split('.');
  const outputFilePath = path.join(
    templatesPath,
    template,
    `${template}.html.txt`,
  );

  fs.writeFileSync(outputFilePath, str);
});
