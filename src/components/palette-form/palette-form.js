import './palette-form.css';

import { html } from 'lighterhtml';

import { mitt } from 'lib/event.js';
import { compose2 } from 'lib/util.js';
import { Card } from 'components/card/card.js';
import { Palettes } from 'components/palettes/palettes.js';
import {
  PalettePickerView,
  PalettePickerTemplate,
} from 'components/palette-picker/palette-picker.js';

export { PaletteFormView, PaletteFormTemplate };

function PaletteFormTemplate({ state, Store }) {
  return {
    state,

    Store,

    props: {
      colorPicker() {
        return {
          title: 'Color picker',
          show: true,
          toolbar: false,

          toggle: () => {
            Store.dispatch('app', 'toggleComponent', 'showColorPicker');
            mitt.emit('RENDER');
          },

          colorPicker: () => PalettePickerTemplate({ state, Store }),
        };
      },

      palettes: () => {
        return {
          title: 'Palettes',
          show: state.app.showPalettes,
          toolbar: true,
          className: 'card-overflow',

          toggle: () => {
            Store.dispatch('app', 'toggleComponent', 'showPalettes');
            mitt.emit('RENDER');
          },

          addPalette: {
            text: 'Add',

            onclick(e) {
              e.preventDefault();
              e.stopPropagation();

              Store.dispatch('palette', 'addPalette');
              mitt.emit('RENDER');
            },
          },

          palettes: () => ({ state, Store }),
        };
      },

      addPalette(e) {
        e.preventDefault();
        e.stopPropagation();

        Store.dispatch('palette', 'addPalette');

        mitt.emit('RENDER');
      },
    },
  };
}

function PaletteFormView({ state, Store, props }) {
  return html`
    <div class="palette-form form">
      <div class="item divider">
        <h3>Palette</h3>
      </div>

      ${compose2(Card)(props => ({
        ...props,
        mainContent: () => html` ${PalettePickerView(props.colorPicker())} `,
      }))(props.colorPicker)({ state, Store })}

      ${compose2(Card)(props => ({
        ...props,
        topLeftContet: () => html`
          <i
            onclick="${props.addPalette.onclick}"
            class="fas fa-plus actionable"
          ></i>
        `,
        mainContent: () => html` ${Palettes(props.palettes())} `,
      }))(props.palettes)({ state, Store })}

    </div>
  `;
}
