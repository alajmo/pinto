import './app.css';
import { render, html } from 'lighterhtml';
import { Toolbar } from 'components/toolbar/toolbar.js';
import { Sidebar } from 'components/sidebar/sidebar.js';
import { KeywordForm } from 'components/keyword-form/keyword-form.js';
import { FontSettings } from 'components/font-settings/font-settings.js';
import { ThemePreview } from 'components/theme/theme.js';
import { CreateTheme } from 'components/create-theme/create-theme.js';
import { ListThemeModal } from 'components/list-theme-modal/list-theme-modal.js';
import { mitt } from 'lib/event.js';

export { App };

function App(Store) {
  const element = html.node`<div class="app"></div>`;

  element.addEventListener('mousedown', e => {
    Store.dispatch('app', 'unSelectColorInput', {}, false);
    Store.dispatch('palette', 'unSelectPaletteColor', {}, false);
    Store.dispatch('palette', 'setNormalMode', {}, false);

    mitt.emit('RENDER');
  });

  main();

  function main() {
    const { state } = Store.get();
    renderView(state);

    mitt.on('RENDER', () => {
      const state = Store.getState();
      renderView(state);
    });
  }

  function renderView(state) {
    const { selectedOption, activeModal } = state.app;

    let modal;
    switch (activeModal) {
      case 'new':
        modal = CreateTheme(state, Store);
        break;
      case 'themes':
        modal = ListThemeModal(state, Store);
        break;
      default:
        modal = null;
    }

    const component =
      selectedOption === 'keyword'
        ? KeywordForm(state, Store)
        : FontSettings(state, Store);

    const template = html`
      <div class="row-1">${Toolbar(state, Store)}</div>

      <div class="row-2">
        <div class="column-1">${Sidebar(state, Store)}</div>

        <div class="column-2">${component}</div>

        <div class="column-3">${ThemePreview(state, Store)}</div>
      </div>

      ${modal}
    `;

    render(element, template);
  }

  return element;
}
