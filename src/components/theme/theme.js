import './theme.css';
import { render, html } from 'lighterhtml';
import { mitt } from 'lib/event.js';

export { ThemePreview };

function ThemePreview(state, Store) {
  const { fontFamily, fontSize, lineHeight } = state.keyword.fontSettings;
  const { backgroundColor } = state.keyword.keywords.Normal;

  const themeElement = html.node`
      <div id="theme"
           class="language-preview"
           style="background: ${backgroundColor}; font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}px">
      </div>
  `;
  themeElement.innerHTML = state.theme.template;
  const element = html`
    <div onmousedown="${e => selectKeyword(e, Store)}" class="theme">
      ${themeElement}
    </div>
  `;

  const groups = new Set(Object.keys(state.keyword.keywords));
  requestAnimationFrame(() => {
    groups.forEach(group =>
      updateTemplate(themeElement, state.keyword.keywords[group]),
    );
  });

  return element;
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

function selectKeyword(e, Store) {
  const { state } = Store.get();
  const groups = new Set(Object.keys(state.keyword.keywords));
  if (groups.has(e.target.className)) {
    Store.dispatch('app', 'selectKeyword', e.target.className);
    mitt.emit('RENDER');
  }
}
