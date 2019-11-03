import './theme.css';
import { render, html } from 'lighterhtml';
import { mitt } from 'lib/event.js';

export { Theme };

function Theme(Store) {
  const element = html.node`<div onclick="${selectKeyword}" class="theme">
  </div>`;

  return element;

  let previewThemeElement;
  let groups;

  main();

  async function main() {
    const { state, events } = Store.get();

    const htmlTemplate = (await import('../../templates/javascript/javascript.html.txt'))
      .default;
    previewThemeElement = html.node`<div class="language-preview"></div>`;
    previewThemeElement.innerHTML = htmlTemplate;

    groups = new Set(Object.keys(state.keyword.keywords));
    groups.forEach(group =>
      updateTemplate(element, state.keyword.keywords[group]),
    );

    requestAnimationFrame(() => update(state));
    renderView(state);
  }

  function update(state) {
    groups.forEach(group =>
      updateTemplate(element, state.keyword.keywords[group]),
    );
  }

  async function renderView(state) {
    const { fontFamily, fontSize, lineHeight } = state.keyword.fontSettings;
    const { backgroundColor } = state.keyword.keywords.Normal;

    const template = html`
      <div
        style="background: ${backgroundColor}; font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}px"
      >
        ${previewThemeElement}
      </div>
    `;

    render(element, template);
  }

  function selectKeyword(e) {
    Store.dispatch('app', 'selectKeyword', event.target.className);
    mitt.emit('RENDER');
  }

  function updateTemplate(element, keyword) {
    const elements = Array.from(element.getElementsByClassName(keyword.name));

    elements.forEach(e => {
      e.style.color = keyword.foregroundColor;
      e.style.backgroundColor = keyword.backgroundColor;
      e.style.fontWeight = keyword.bold ? 'bold' : 'normal';
      e.style.fontStyle = keyword.italic ? 'italic' : 'normal';
      const underline = keyword.underline ? 'underline ' : '';
      const strikethrough = keyword.lineThrough ? 'line-through' : '';
      e.style.textDecoration = `${underline}${strikethrough}`;
    });
  }

  return element;
}

