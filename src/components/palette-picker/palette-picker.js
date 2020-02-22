import { html } from 'lighterhtml';

import './palette-picker.css';
import { compose, cssPreviewKeyword } from 'lib/util.js';
import {
  HuePickerView,
  HuePickerTemplate,
} from 'components/hue-picker/hue-picker.js';
import {
  SlPickerView,
  SlPickerTemplate,
} from 'components/sl-picker/sl-picker.js';
import {
  ColorInputsView,
  ColorInputsTemplate,
} from 'components/color-inputs/color-inputs.js';
import { mitt } from 'lib/event.js';

export { PalettePickerView, PalettePickerTemplate };

function PalettePickerTemplate({ state, Store }) {
  return {
    state,
    Store,
    props: {
      setPreviousColor: () => {
        Store.dispatch('picker', 'setHex', state.picker.previousColor);
        mitt.emit('RENDER');
      },

      foregroundColor: {
        value: state.palette.foregroundColor,
        name: 'foregroundColor',
        label: 'Foreground',
        selected: state.palette.selectedInput === 'foregroundColor',

        onclick: () => {
          Store.dispatch('picker', 'setHex', state.palette.foregroundColor);
          Store.dispatch(
            'picker',
            'setPreviousColor',
            state.palette.foregroundColor,
          );
          Store.dispatch('palette', 'selectColorInput', 'foregroundColor');
          mitt.emit('RENDER');
        },
      },

      backgroundColor: {
        value: state.palette.backgroundColor,
        name: 'backgroundColor',
        label: 'Background',
        selected: state.palette.selectedInput === 'backgroundColor',

        onclick: () => {
          Store.dispatch('picker', 'setHex', state.palette.backgroundColor);
          Store.dispatch(
            'picker',
            'setPreviousColor',
            state.palette.backgroundColor,
          );
          Store.dispatch('palette', 'selectColorInput', 'backgroundColor');
          mitt.emit('RENDER');
        },
      },
    },
  };
}

function PalettePickerView({ state, Store, props }) {
  return html`
    <div class="color-picker">
      <div class="color-picker-top">
        <div
          class="keyword-preview"
          style="${cssPreviewKeyword({
            foregroundColor: props.foregroundColor.value,
            backgroundColor: props.backgroundColor.value,
          })}"
        >
          Preview
        </div>

        <div class="tab-colors">
          <div
            data-selected="${props.foregroundColor.selected}"
            data-enabled="true"
            onclick=${props.foregroundColor.onclick}
            class="tab"
          >
            <div class="tab-text">
              Foreground
            </div>
          </div>

          <div
            data-selected="${props.backgroundColor.selected}"
            data-enabled="true"
            onclick=${props.backgroundColor.onclick}
            class="tab"
          >
            <div class="tab-text">
              Background
            </div>
          </div>
        </div>
      </div>

      <div class="color-picker-middle">
        ${compose(SlPickerView)(SlPickerTemplate)({ state, Store })}
        ${compose(HuePickerView)(HuePickerTemplate)({ state, Store })}
        ${compose(ColorInputsView)(ColorInputsTemplate)({ state, Store })}
      </div>
    </div>
  `;
}
