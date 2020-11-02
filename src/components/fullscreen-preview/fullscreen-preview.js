import './fullscreen-preview.css';
import { html } from 'lighterhtml';
import { mitt } from 'lib/event.js';

export { FullscreenPreviewView, FullscreenPreviewTemplate };

function FullscreenPreviewTemplate({ state, Store, templateRenderer }) {
  return {
    state,
    templateRenderer,

    props: {
      close() {
        Store.dispatch('app', 'toggleFullscreen');
        mitt.emit('RENDER');
      },
    },
  };
}

function FullscreenPreviewView({ state, props }) {
  const el = document.getElementById('code').cloneNode(true);

  const { fontFamily, fontSize, lineHeight } = state.theme.fontSettings;
  const { backgroundColor } = state.theme.keywords.Normal;

  const element = html.node`
    <div class="fullscreen-preview">
      <div class="close" onclick="${props.close}">
        <i class="fas fa-times actionable" tabindex="0"></i>
      </div>

      <div
        id="code"
        class="code"
        style="background: ${backgroundColor}; font-family: ${fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight}px"
      >
        ${el}
      </div>
    </div>
  `;

  return element;
}
