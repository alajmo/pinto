import { html } from 'lighterhtml';
import { compose } from 'lib/util.js';
import { Checkbox } from 'components/checkbox/checkbox.js';
import { TextInput } from 'components/text-input/text-input.js';
import { Modal } from 'components/modal/modal.js';
import { mitt } from 'lib/event.js';

export { CreateThemeView, CreateThemeTemplate };

function CreateThemeTemplate({ state, Store }) {
  return {
    state,

    props: {
      themeName: {
        value: state.app.createThemeModal.themeName,
        name: 'themeName',
        autofocus: true,
        label: 'Name',
        onkeyup: e => {
          Store.dispatch('app', 'updateCreateThemeNameModal', e.target.value);
          mitt.emit('RENDER');
        },
      },

      copy: () => ({
        label: 'Copy current theme',
        name: 'copy',
        value: state.app.createThemeModal.copy,
        onclick: e => {
          Store.dispatch('app', 'checkCopyCreateThemeModal', e.target.checked);
          mitt.emit('RENDER');
        },
      }),

      create() {
        if (state.app.createThemeModal.themeName.length > 0) {
          Store.dispatch('app', 'createTheme');
          Store.dispatch('app', 'openModal', null);
          Store.dispatch('app', 'selectOption', 'settings');
        } else {
          alert('Enter name');
        }

        mitt.emit('RENDER');
      },

      close() {
        Store.dispatch('app', 'openModal', null);
        mitt.emit('RENDER');
      },
    },
  };
}

function CreateThemeView({ props }) {
  return Modal({
    title: 'New Theme',

    size: 'small',

    close: props.close,

    header: html``,

    main: html`
      <div class="form">
        <div class="item">
          ${TextInput(props.themeName)}
        </div>

        <div class="item">
          ${compose(Checkbox)(props.copy)()}
        </div>

        <div class="buttons">
          <button class="filled secondary" onclick="${props.create}">
            Create
          </button>
          <button class="filled gray" onclick="${props.close}">Cancel</button>
        </div>
      </div>
    `,
  });
}
