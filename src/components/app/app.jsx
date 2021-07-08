import { render } from 'solid-js/web';
import { createSignal, createState } from "solid-js";

import { FullscreenPreviewView, FullscreenPreviewTemplate, } from 'components/fullscreen-preview/fullscreen-preview.js';
import Toolbar from 'components/toolbar/toolbar.jsx';
import Sidebar from 'components/sidebar/sidebar.jsx';
import { KeywordFormView, KeywordFormTemplate, } from 'components/keyword-form/keyword-form.js';
import { PaletteFormView, PaletteFormTemplate, } from 'components/palette-form/palette-form.js';
import { EditorSettingsView, EditorSettingsTemplate, } from 'components/editor-settings/editor-settings.js';
import { ThemePreviewView, ThemePreviewTemplate, } from 'components/theme-preview/theme-preview.js';
import { ColorsView, ColorsTemplate } from 'components/colors/colors.js';
import { CreateThemeView, CreateThemeTemplate, } from 'components/create-theme/create-theme.js';
import { ListThemeView, ListThemeTemplate, } from 'components/list-theme/list-theme.js';
import { ExportModalView, ExportModalTemplate, } from 'components/export-modal/export-modal.js';
import { ManageGroupsView, ManageGroupsTemplate, } from 'components/manage-groups/manage-groups.js';
import { AboutView, AboutTemplate } from 'components/about/about.js';
import { compose } from 'lib/util.js';
import * as square from 'lib/color-canvas.js';
import TemplateRenderer from 'lib/template-renderer.js';
import { mitt } from 'lib/event.js';

import './app.css';

export { App };

function App(store) {
  const { state: kaka } = store.get();

  const templateRenderer = TemplateRenderer();

  const [state, setState] = createState({
    app: kaka.app,
    picker: kaka.picker,
    theme: kaka.theme,
  });

  mitt.on('RENDER', options => {
    // console.log('RENDER');

    const kaka = store.getState();

    setState({
      app: {...kaka.app},
      picker: kaka.picker,
      theme: {...kaka.theme},
    });

    console.log('----------------------');
    console.log(kaka.theme.name);
    console.log(state.theme.name);
    console.log('----------------------');

    // renderers.forEach(fn => fn(state, Store, options));
  });

  const app = (
    <div>
      <div class="app-content">
        <div class="row-1">
          <div class="column">
            <Toolbar store={store} state={state} />
          </div>
        </div>

        <div class="row-2">
          <Sidebar store={store} state={state} />
        </div>
        </div>
    </div>
  );

  return app;










  main();

  function main() {
    const { state } = Store.get();

    renderView(state);
  }

  function onRenderComplete() {
    const { state } = Store.get();

    const renderers = renderApp(state);

    Store.dispatch('app', 'setupEventListeners', element);

    mitt.on('LOAD_TEMPLATE', () => {
      // console.log('LOAD_TEMPLATE');

      const state = Store.getState();

      initThemePreview(state, Store);
      renderers.forEach(fn => fn(state, Store));
      templateRenderer.render(state, { allKeywords: true });
    });

    mitt.on('MODIFY_GROUP', () => {
      // console.log('CREATE_GROUP');

      const state = Store.getState();
      templateRenderer.updateKeywordElement(state);
    });

    mitt.on('KEYWORD_ENABLE_TOGGLE', () => {
      // console.log('KEYWORD_ENABLE_TOGGLE');

      const state = Store.getState();
      templateRenderer.updateKeywordElement(state);
      templateRenderer.render(state, { allKeywords: true });
    });

    mitt.on('RENDER', options => {
      // console.log('RENDER');

      const state = Store.getState();
      renderers.forEach(fn => fn(state, Store, options));
    });
  }

  function renderApp(state) {
    const renderers = [
      (state, Store) =>
        render(
          toolbarElement,
          compose(ToolbarView)(ToolbarTemplate)({ state, Store }),
        ),

      (state, Store) =>
        render(
          sidebarElement,
          compose(SidebarView)(SidebarTemplate)({ state, Store }),
        ),

      (state, Store) => renderComponent(state, Store),

      (state, Store) => render(modalElement, renderModal(state, Store)),

      (state, Store) =>
        render(fullscreenPreviewElement, renderFullscreenPreview(state, Store)),
    ];

    renderers.forEach(fn => fn(state, Store));

    initThemePreview(state, Store);

    renderPreview(state, Store);

    return [
      ...renderers,
      (state, Store, options) => renderPreview(state, Store, options),
    ];
  }

  function renderPreview(state, Store, options = {}) {
    exportThemePreviewElement.style.display = 'none';
    themePreviewElement.style.display = 'block';
    templateRenderer.render(state, { allKeywords: options.allKeywords });
  }

  function initThemePreview(state, Store) {
    render(
      themePreviewElement,
      compose(ThemePreviewView)(ThemePreviewTemplate)({ state, Store }),
    );

    templateRenderer.load('theme-preview', state);
  }

  function renderComponent(state, Store) {
    // TODO: It's this that is slow
    let component;

    keywordElement.style.display = 'none';
    settingsElement.style.display = 'none';
    paletteElement.style.display = 'none';
    colorsElement.style.display = 'none';

    switch (state.app.selectedOption) {
      case 'keyword':
        render(settingsElement, html`<div style="display: none"></div>`);
        render(paletteElement, html`<div style="display: none"></div>`);

        if (state.app.showColorPicker) {
          render(colorsElement, html`<div style="display: none"></div>`);
        }

        component = compose(KeywordFormView)(KeywordFormTemplate)({
          state,
          Store,
        });

        keywordElement.style.display = 'block';
        render(keywordElement, component);

        renderPicker(state);
        break;
      case 'palette':
        render(settingsElement, html`<div style="display: none"></div>`);
        render(keywordElement, html`<div style="display: none"></div>`);
        render(colorsElement, html`<div style="display: none"></div>`);

        component = compose(PaletteFormView)(PaletteFormTemplate)({
          state,
          Store,
        });

        paletteElement.style.display = 'block';
        render(paletteElement, component);
        renderPicker(state);
        break;
      case 'settings':
        render(keywordElement, html`<div style="display: none"></div>`);
        render(paletteElement, html`<div style="display: none"></div>`);
        render(colorsElement, html`<div style="display: none"></div>`);

        component = compose(EditorSettingsView)(EditorSettingsTemplate)({
          state,
          Store,
        });

        settingsElement.style.display = 'block';
        render(settingsElement, component);
        break;
      case 'colors':
        render(settingsElement, html`<div style="display: none"></div>`);
        render(keywordElement, html`<div style="display: none"></div>`);
        render(paletteElement, html`<div style="display: none"></div>`);

        component = compose(ColorsView)(ColorsTemplate)({
          state,
          Store,
        });

        colorsElement.style.display = 'block';
        render(colorsElement, component);
        break;
      case 'export':
        render(settingsElement, html`<div style="display: none"></div>`);
        render(keywordElement, html`<div style="display: none"></div>`);
        render(colorsElement, html`<div style="display: none"></div>`);
        render(paletteElement, html`<div style="display: none"></div>`);
        break;
      default:
        render(keywordElement, html`<div style="display: none"></div>`);
        render(settingsElement, html`<div style="display: none"></div>`);
        render(paletteElement, html`<div style="display: none"></div>`);
        render(colorsElement, html`<div style="display: none"></div>`);
    }
  }

  function renderPicker(state) {
    if (!state.app.showColorPicker) {
      return;
    }

    let leftData, rightData;
    switch (state.picker.selectedColorAttribute) {
      case 'red':
        leftData = square.redSquare({
          elementId: 'color-cube-2d',
          red: state.picker.red,
        });
        rightData = square.redRightSquare({
          elementId: 'color-cube-1d',
          green: state.picker.green,
          blue: state.picker.blue,
        });
        break;
      case 'green':
        leftData = square.greenSquare({
          elementId: 'color-cube-2d',
          green: state.picker.green,
        });
        rightData = square.greenRightSquare({
          elementId: 'color-cube-1d',
          red: state.picker.red,
          blue: state.picker.blue,
        });
        break;
      case 'blue':
        leftData = square.blueSquare({
          elementId: 'color-cube-2d',
          blue: state.picker.blue,
        });
        rightData = square.blueRightSquare({
          elementId: 'color-cube-1d',
          red: state.picker.red,
          green: state.picker.green,
        });
        break;
      case 'hue':
        leftData = square.hueSquare({
          elementId: 'color-cube-2d',
          hue: state.picker.hue,
        });
        rightData = square.hueRightSquare({
          elementId: 'color-cube-1d',
          saturation: 100,
          brightness: 100,
        });
        break;
      case 'saturation':
        leftData = square.saturationSquare({
          elementId: 'color-cube-2d',
          saturation: state.picker.saturation,
        });
        rightData = square.saturationRightSquare({
          elementId: 'color-cube-1d',
          hue: state.picker.hue,
          brightness: state.picker.brightness,
        });
        break;
      case 'brightness':
        leftData = square.brightnessSquare({
          elementId: 'color-cube-2d',
          brightness: state.picker.brightness,
        });
        rightData = square.brightnessRightSquare({
          elementId: 'color-cube-1d',
          hue: state.picker.hue,
          saturation: state.picker.saturation,
        });
        break;
      default:
    }

    Store.dispatch('picker', 'setColorCubes', { leftData, rightData });
  }

  function renderModal(state, Store) {
    let modal;
    switch (state.app.activeModal) {
      case 'about':
        modal = compose(AboutView)(AboutTemplate)({ state, Store });
        break;
      case 'new':
        modal = compose(CreateThemeView)(CreateThemeTemplate)({ state, Store });
        break;
      case 'themes':
        modal = compose(ListThemeView)(ListThemeTemplate)({ state, Store });
        break;
      case 'export':
        modal = compose(ExportModalView)(ExportModalTemplate)({ state, Store });
        break;
      case 'manage-group':
        modal = compose(ManageGroupsView)(ManageGroupsTemplate)({ state, Store });
        break;
      default:
        modal = html`<div></div>`;
    }

    return modal;
  }

  function renderFullscreenPreview(state, Store) {
    if (state.app.showFullscreenPreview) {
      return compose(FullscreenPreviewView)(FullscreenPreviewTemplate)({
        state,
        Store,
      });
    }

    return html.node`<div></div>`;
  }

  function renderView(state) {
    const template = html.node`
      <div class="app-overlay" tabindex="-1" data-modal-open="${ typeof state.app.activeModal === 'string' ? 'true' : 'false' }"></div>

      <div class="app-content" data-modal-open="${ typeof state.app.activeModal === 'string' ? 'true' : 'false' }">
        <div class="row-1">
          <div class="column">
            ${toolbarElement}
          </div>
        </div>

        <div class="row-2">
          ${sidebarElement}

          ${settingsElement}
          ${paletteElement}
          ${keywordElement}
          ${colorsElement}

          ${themePreviewElement}
          ${exportThemePreviewElement}
        </div>
      </div>

      ${modalElement}
      ${fullscreenPreviewElement}
    `;

    render(element, template);
  }

  return { element, onRenderComplete };
}
