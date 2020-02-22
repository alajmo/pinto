import './toolbar.css';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';
import { GrowInput } from 'components/grow-input/grow-input.js';

export { ToolbarView, ToolbarTemplate };

function ToolbarTemplate({ state, Store }) {
  return {
    state,
    Store,
    props: {
      saveTheme() {
        Store.dispatch('app', 'saveTheme');
        mitt.emit('RENDER');
      },

      createTheme() {
        Store.dispatch('app', 'openModal', 'new');
        mitt.emit('RENDER');
      },

      exportModal() {
        Store.dispatch('app', 'openModal', 'export');
        mitt.emit('RENDER');
      },

      openTheme() {
        Store.dispatch('app', 'openModal', 'themes');
        mitt.emit('RENDER');
      },

      openHelp() {
        Store.dispatch('app', 'openModal', 'about');
        mitt.emit('RENDER');
      },

      name: {
        name: 'theme-name',
        value: state.theme.name,

        onblur(e) {
          const value = e.target.textContent.trim();
          if (value.length < 1) {
            e.target.textContent = state.theme.defaultThemeName;
            Store.dispatch(
              'theme',
              'updateThemeName',
              state.theme.defaultThemeName,
            );
          } else {
            Store.dispatch('theme', 'updateThemeName', value);
          }

          mitt.emit('RENDER');
        },
      },
    },
  };
}

function ToolbarView({ state, props }) {
  // console.log(state.app.changesSaved);
  return html`
    <div class="toolbar">
      <div class="left-items">
        ${GrowInput(props.name)}
      </div>

      <div class="right-items">
        ${state.app.changesSaved === false && state.theme.id === null
          ? html.node`<div class="warning-message">Unsaved changes</div>`
          : null}
        ${state.app.changesSaved === false && state.theme.id !== null
          ? html.node`<div class="info-message">Saving...</div>`
          : null}
        ${state.app.changesSaved === true
          ? html.node`<div class="info-message">All changes saved</div>`
          : null}

        <div class="option" onclick="${props.saveTheme}">Save</div>

        <div class="option" onclick="${props.createTheme}">Create</div>
        <div class="option" onclick="${props.openTheme}">Open</div>
        <div class="option" onclick="${props.exportModal}">Export</div>
        <div class="option" onclick="${props.openHelp}">Help</div>
      </div>
    </div>
  `;
}
