import './sidebar.css';
import { render, html } from 'lighterhtml';
import { mitt } from 'lib/event.js';

export { Sidebar };

function Sidebar(state, Store) {
  const { selectedOption, selectedKeyword } = state.app;
  const keywords = Object.keys(state.keyword.keywords);

  function toggleSidebar() {
    Store.dispatch('app', 'toggleSidebar');
    mitt.emit('RENDER');
  }

  function selectKeyword(e) {
    const clickedKeyword = e.target.getAttribute('data-name');
    if (clickedKeyword === null) {
      return;
    }

    const state = Store.getState();
    Store.dispatch('app', 'selectOption', 'keyword');
    Store.dispatch('app', 'selectKeyword', clickedKeyword);
    mitt.emit('RENDER');
  }

  function selectFontSettings(e) {
    Store.dispatch('app', 'selectOption', 'fontSettings');
    Store.dispatch('app', 'selectKeyword', null);
    mitt.emit('RENDER');
  }

  return html`
    <div class="sidebar">
      <div onclick="${toggleSidebar}">X</div>

      <div class="sidebar--open" data-display-sidebar=${state.app.showSidebar}>
        <h3>Options</h3>

        <div class="divider--medium"></div>

        <div
          class="item"
          onclick="${selectFontSettings}"
          data-name="fontSettings"
          data-selected="${selectedOption === 'fontSettings'}"
        >
          Font Settings
        </div>

        <h3>Default Keywords</h3>

        <div class="divider--medium"></div>

        <ol class="items" onclick="${selectKeyword}">
          ${keywords.map(
            keyword => html`
              <li
                data-name="${keyword}"
                data-selected="${selectedKeyword === keyword}"
              >
                ${keyword}
              </li>
            `,
          )}
        </ol>

        <h3>Language Keywords</h3>

        <div class="divider--medium"></div>
      </div>
    </div>
  `;
}
