import './export-modal.css';

import { html } from 'lighterhtml';
import { keywordToVim } from 'lib/json-to-editor.js';
import { Modal } from 'components/modal/modal.js';
import { mitt } from 'lib/event.js';
import { exportCode } from 'lib/util.js';

export { ExportModalView, ExportModalTemplate };

function ExportModalTemplate({ state, Store }) {
  const text = keywordToVim(exportCode(state.theme));

  return {
    state,
    props: {
      downloadJson: () => {
        Store.dispatch('theme', 'exportThemeJson', state.theme.id);
        mitt.emit('RENDER');
      },

      downloadVim: () => {
        Store.dispatch('theme', 'exportThemeVim');
        mitt.emit('RENDER');
      },

      exportCode: text,

      close: () => {
        Store.dispatch('app', 'openModal');
        mitt.emit('RENDER');
      },

      copyVimToClipboard() {
        navigator.clipboard.writeText(text).then(
          () => {},
          err => {
            console.error('Could not copy to clipboard: ', err);
          },
        );
      },
    },
  };
}

function ExportModalView({ props }) {
  return Modal({
    title: 'Export Theme',

    size: 'auto',

    close: props.close,

    header: html`
      <button
        class="text small secondary"
        onclick="${props.copyVimToClipboard}"
      >
        Copy to Clipboard
      </button>

      <button class="text small secondary" onclick="${props.downloadVim}">
        Download VIM File
      </button>

      <button class="text small secondary" onclick="${props.downloadJson}">
        Download JSON
      </button>
    `,

    main: html`
      <div class="export-code">
        <div class="export-code-content">
          ${props.exportCode}
        </div>
      </div>
    `,
  });
}
