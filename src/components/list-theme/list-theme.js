import './list-theme.css';

import { compose } from 'lib/util.js';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';
import { Modal } from 'components/modal/modal.js';
import { UploadButton } from 'components/upload-button/upload-button.js';

export { ListThemeView, ListThemeTemplate };

function ListThemeTemplate({ state, Store }) {
  return {
    state,

    props: {
      importBtn: () => ({
        name: 'Import',
        onchange: async e => {
          await Store.dispatch('theme', 'importThemeJson', e.target.files);

          mitt.emit('RENDER');
        },
      }),

      exportThemesJson: () => {
        Store.dispatch('theme', 'exportThemesJson');
        mitt.emit('RENDER');
      },

      exportThemeJson: theme => {
        Store.dispatch('theme', 'exportThemeJson', theme.theme.id);
      },

      loadTheme: theme => {
        Store.dispatch('app', 'loadTheme', theme.theme.id);
      },

      removeTheme: async theme => {
        const confirmed = confirm(
          `Are you sure you want to delete theme ${theme.theme.name}?`,
        );

        if (confirmed) {
          await Store.dispatch('app', 'removeTheme', theme.theme.id);
          mitt.emit('RENDER');
        }
      },

      close: () => {
        Store.dispatch('app', 'openModal', null);
        mitt.emit('RENDER');
      },
    },
  };
}

function ListThemeView({ state, props }) {
  return Modal({
    title: 'Themes',

    size: 'auto',

    close: props.close,

    header: html`
      ${compose(UploadButton)(props.importBtn)()}

      <button class="text" onclick="${() => props.exportThemesJson()}">
        Download All
      </button>
    `,

    main: html`
      <div class="theme-list">
        <div class="single-line-list">
          <ul class="list">
            ${state.app.themes.map(
              theme => html`
                <li class="row">
                  <div class="support">
                    <span class="max-width">
                      ${theme.theme.name}
                    </span>
                  </div>

                  <div class="primary">
                    ${state.theme.id === theme.theme.id
                      ? html` <span class="theme-opened">active</span> `
                      : html` <span></span> `}
                  </div>

                  <div class="control">
                    <button
                      class="text secondary small"
                      onclick="${() => props.loadTheme(theme)}"
                    >
                      Open
                    </button>

                    <button
                      class="text small"
                      onclick="${() => props.exportThemeJson(theme)}"
                    >
                      Download JSON
                    </button>

                    <button
                      class="text warning small"
                      onclick="${() => props.removeTheme(theme)}"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              `,
            )}
          </ul>
        </div>
      </div>
    `,
  });
}
