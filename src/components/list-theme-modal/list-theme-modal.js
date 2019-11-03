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
    <div class="modal medium list-theme-modal">
      <h2>Themes</h2>

      <ul class="theme-list">
        ${state.app.themes.map(
          (theme, i) => html`
            <li>
              <div class="open-btn naked">
                ${theme.theme.name}
              </div>

              <div class="theme-list-buttons">
                <button
                  class="open-btn naked"
                  onclick="${() => c.loadTheme(theme)}"
                >
                  Open
                </button>

                <button
                  class="remove-btn naked"
                  onclick="${() => c.removeTheme(theme)}"
                >
                  Remove
                </button>
              </div>
            </li>
          `,
        )}
      </ul>

      <div class="buttons">
        <button class="default" onclick="${c.close}">Close</button>
      </div>
    </div>
  `;
}
