import './fullscreen-preview.css';
import { html } from 'lighterhtml';
import { mitt } from 'lib/event.js';

export { FullscreenPreviewView, FullscreenPreviewTemplate };

function updateTemplate(element, keyword, value) {
  const elements = element.getElementsByClassName(keyword);

  for (let e of elements) {
    e.style.color = value.foregroundColor;
    e.style.backgroundColor = value.backgroundColor;
    e.style.fontWeight = value.bold ? 'bold' : 'normal';
    e.style.fontStyle = value.italic ? 'italic' : 'normal';
    const underline = value.underline ? 'underline ' : '';
    const strikethrough = value.lineThrough ? 'line-through' : '';
    e.style.textDecoration = `${underline}${strikethrough}`;
  }
}

function FullscreenPreviewTemplate({ state, Store }) {
  return {
    state,

    props: {
      close() {
        Store.dispatch('app', 'toggleFullscreen');
        mitt.emit('RENDER');
      },
    },
  };
}

function FullscreenPreviewView({ state, props }) {
  const themeElement = html.node`
      <div class="language-preview"></div>
  `;
  themeElement.innerHTML = state.theme.template;

  const { fontFamily, fontSize, lineHeight } = state.theme.fontSettings;
  const { backgroundColor } = state.theme.keywords.Normal;

  const element = html.node`
    <div class="fullscreen-preview">
      <div class="close" onclick="${props.close}">
        <i class="fas fa-times actionable" tabindex="0"></i>
      </div>
      <div
        class="code"
        style="background: ${backgroundColor}; font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}px"
      >
        ${themeElement}
      </div>
    </div>
  `;

  Object.entries(state.theme.keywords).forEach(keyword =>
    updateTemplate(element, ...keyword),
  );

  return element;
}
