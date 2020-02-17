import './create-theme.css';
import '../modal/modal.css';
import { Checkbox } from 'components/checkbox/checkbox.js';
import { TextInput } from 'components/text-input/text-input.js';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';

export { CreateTheme };

function CreateTheme(state, Store) {
  const c = {
    themeName: {
      value: state.app.createThemeModal.themeName,
      name: 'themeName',
      label: 'Name',
      onkeyup: e => {
        Store.dispatch('app', 'updateCreateThemeNameModal', e.target.value);
        mitt.emit('RENDER');
      },
    },

    copy: {
      label: 'Copy current theme',
      name: 'copy',
      value: state.app.createThemeModal.copy,
      onclick: e => {
        Store.dispatch('app', 'checkCopyCreateThemeModal', e.target.checked);
        mitt.emit('RENDER');
      },
    },

    create: e => {
      if (state.app.createThemeModal.themeName.length > 0) {
        Store.dispatch('app', 'createTheme');
      } else {
        alert('Enter name');
      }

      mitt.emit('RENDER');
    },

    cancel: e => {
      Store.dispatch('app', 'openModal', null);
      mitt.emit('RENDER');
    },
  };

  return html`
    <div class="modal--small create-theme-modal">
      <div class="create-theme-form">
        <h2>New Theme</h2>

        ${TextInput(c.themeName)} ${Checkbox(c.copy)}
      </div>

      <div class="buttons">
        <button class="outline" onclick="${c.create}">Create</button>
        <button class="outline" onclick="${c.cancel}">Cancel</button>
      </div>
    </div>
  `;
}
