import './toolbar.css';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';
import { GrowInput } from 'components/grow-input/grow-input.js';

export { ToolbarView, ToolbarTemplate };

function ToolbarTemplate({ state, Store }) {
  const fileSystemEnabled = window.showSaveFilePicker !== undefined;

  return {
    state,
    Store,
    props: {
      fileSystemEnabled,

      async saveTheme() {
        await Store.dispatch('app', 'saveTheme');
        mitt.emit('RENDER');
      },

      async saveAs() {
        if (fileSystemEnabled) {
          await Store.dispatch('theme', 'createFileHandle');
        }
        mitt.emit('RENDER');
      },

      removeFileSync() {
        const removeFileHandle = confirm(
          'Are you sure you want to stop syncing to file? The file will not be deleted.',
        );

        if (removeFileHandle) {
          Store.dispatch('theme', 'deleteFileHandle');
          mitt.emit('RENDER');
        }
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
        ${state.theme.fileHandle
          ? html.node`
            <div class="saved-file">
              <div class="saved-file_filename">
                ${state.theme.fileHandle.name}
              </div>

              <div>
                <i title="Remove file" class="fas fa-minus-circle actionable" onclick="${props.removeFileSync}"></i>
              </div>
            </div>
          `
          : null}

        <button
          class="text menu-btn"
          title="Save theme (Ctrl + S)"
          onclick="${props.saveTheme}"
        >
          Save
        </button>

        <button
          class="text menu-btn"
          disabled="${!props.fileSystemEnabled}"
          title="${props.fileSystemEnabled
            ? 'Save changes to file (Ctrl + Shift + S)'
            : 'File System Access API is not enabled for this browser.'}"
          onclick="${props.saveAs}"
        >
          Save As
        </button>

        <button
          title="Create new theme (Shift + N)"
          class="text menu-btn"
          onclick="${props.createTheme}"
        >
          New
        </button>

        <button
          title="Open theme (Shift + O)"
          class="text menu-btn"
          onclick="${props.openTheme}"
        >
          Open
        </button>

        <button
          title="Open theme (Shift + E)"
          class="text menu-btn"
          onclick="${props.exportModal}"
        >
          Export
        </button>

        <button class="text menu-btn" onclick="${props.openHelp}">Help</button>
      </div>
    </div>
  `;
}
