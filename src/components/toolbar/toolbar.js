import './toolbar.css';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';

export { Toolbar };

function Toolbar(state, Store) {
  const { editor, name } = state.theme;

  function saveTheme() {
    Store.dispatch('app', 'saveTheme');
    mitt.emit('RENDER');
  }

  function createTheme() {
    Store.dispatch('app', 'openModal', 'new');
    mitt.emit('RENDER');
  }

  function openTheme() {
    Store.dispatch('app', 'openModal', 'themes');
    mitt.emit('RENDER');
  }

  return html`
    <div class="toolbar">
      <div class="left-items">
        ${name}
      </div>

      <div class="right-items">
        <div onclick="${saveTheme}">Save</div>
        <div onclick="${createTheme}">New Theme</div>
        <div onclick="${openTheme}">Themes</div>
      </div>
    </div>
  `;
}
