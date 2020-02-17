import './list-theme-modal.css';
import '../modal/modal.css';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';

export { ListThemeModal };

function ListThemeModal(state, Store) {
  const c = {
    close: e => {
      Store.dispatch('app', 'openModal', null);
      mitt.emit('RENDER');
    },

    loadTheme: theme => {
      Store.dispatch('app', 'loadTheme', theme.theme.id);
      mitt.emit('RENDER');
    },

    removeTheme: theme => {
      Store.dispatch('app', 'removeTheme', theme.theme.id);
      mitt.emit('RENDER');
    },
  };

  return html`
    <div class="modal--medium theme-list-modal">
      <div class="single-line-list">
        <h2 class="sub-header">Themes</h2>

        <ul class="list">
          ${state.app.themes.map(
            (theme, i) => html`
              <li class="row">
                <div class="support">
                  ${theme.theme.name}
                </div>

                <div class="primary"></div>

                <div class="control">
                  <button class="text" onclick="${() => c.loadTheme(theme)}">
                    Open
                  </button>

                  <button class="text" onclick="${() => c.removeTheme(theme)}">
                    Remove
                  </button>
                </div>
              </li>
            `,
          )}
        </ul>
      </div>

      <div class="buttons">
        <button class="outline" onclick="${c.close}">Close</button>
      </div>
    </div>
  `;
}
