import { mitt } from 'lib/event.js';

import GrowInput from 'components/grow-input/grow-input.jsx';

import './toolbar.css';

export default ({ store, state }) => {
  const fileSystemEnabled = window.showSaveFilePicker !== undefined;

  const props = {
    fileSystemEnabled,

    async saveTheme() {
      await store.dispatch('app', 'saveTheme');
      mitt.emit('RENDER');
    },

    async saveAs() {
      if (fileSystemEnabled) {
        await store.dispatch('theme', 'createFileHandle');
      }
      mitt.emit('RENDER');
    },

    removeFileSync() {
      const removeFileHandle = confirm(
        'Are you sure you want to stop syncing to file? The file will not be deleted.',
      );

      if (removeFileHandle) {
        store.dispatch('theme', 'deleteFileHandle');
        mitt.emit('RENDER');
      }
    },

    createTheme() {
      store.dispatch('app', 'openModal', 'new');
      mitt.emit('RENDER');
    },

    exportModal() {
      store.dispatch('app', 'openModal', 'export');
      mitt.emit('RENDER');
    },

    openTheme() {
      store.dispatch('app', 'openModal', 'themes');
      mitt.emit('RENDER');
    },

    openHelp() {
      store.dispatch('app', 'openModal', 'about');
      mitt.emit('RENDER');
    },

    name: {
      name: 'theme-name',
      value: state.theme.name,

      onblur(e) {
        const value = e.target.textContent.trim();
        if (value.length < 1) {
          e.target.textContent = state.theme.defaultThemeName;
          store.dispatch(
            'theme',
            'updateThemeName',
            state.theme.defaultThemeName,
          );
        } else {
          store.dispatch('theme', 'updateThemeName', value);
        }

        mitt.emit('RENDER');
      },
    },
  };

  return (
    <div>
      <div class="toolbar">
        <div class="left-items">
          <GrowInput {...props.name} />
        </div>

        <div class="right-items">
          {state.app.changesSaved === false && state.theme.id === null && (
            <div class="warning-message">Unsaved changes</div>
          )}

          {state.app.changesSaved === false && state.theme.id !== null && (
            <div class="info-message">Saving...</div>
          )}

          {state.app.changesSaved === true && (
            <div class="info-message">All changes saved</div>
          )}

          {state.theme.fileHandle && (
            <div class="saved-file">
              <div class="saved-file_filename">
                {state.theme.fileHandle.name}
              </div>

              <div>
                <i
                  title="Remove file"
                  class="fas fa-minus-circle actionable"
                  onClick={props.removeFileSync}
                ></i>
              </div>
            </div>
          )}

          <button
            class="text menu-btn"
            title="Save theme (Ctrl + S)"
            onClick={props.saveTheme}
          >
            Save
          </button>

          <button
            class="text menu-btn"
            disabled={!props.fileSystemEnabled}
            title={
              props.fileSystemEnabled
                ? 'Save changes to file (Ctrl + Shift + S)'
                : 'File System Access API is not enabled for this browser.'
            }
            onClick={props.saveAs}
          >
            Save As
          </button>

          <button
            title="Create new theme (Shift + N)"
            class="text menu-btn"
            onClick={props.createTheme}
          >
            New
          </button>

          <button
            title="Open theme (Shift + O)"
            class="text menu-btn"
            onClick={props.openTheme}
          >
            Open
          </button>

          <button
            title="Open theme (Shift + E)"
            class="text menu-btn"
            onClick={props.exportModal}
          >
            Export
          </button>

          <button class="text menu-btn" onClick={props.openHelp}>
            Help
          </button>
        </div>
      </div>
    </div>
  );
};
