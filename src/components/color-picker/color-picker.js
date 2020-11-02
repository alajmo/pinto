import { html } from 'lighterhtml';

import './color-picker.css';
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

export { ColorPickerView, ColorPickerTemplate };

function ColorPickerTemplate({ state, Store }) {
  const selectedKeyword = state.app.selectedKeyword;
  const normalKeyword = state.theme.keywords.Normal;
  const keyword = state.theme.keywords[state.app.selectedKeyword[0]];

  return {
    state,
    Store,
    props: {
      selectedKeyword: state.app.selectedKeyword,
      normalKeyword,
      keyword,
      showColorPicker: state.app.showColorPicker,

      foregroundColor: {
        value: keyword['foregroundColor'],
        name: 'foregroundColor',
        label: 'Foreground',
        title: 'Select foreground color',
        selected: state.app.selectedInput === 'foregroundColor',
        enabled: keyword['foregroundColor'] !== null,

        onToggleEnable: e => {
          e.preventDefault();
          e.stopPropagation();

          const selected = state.app.selectedInput === 'foregroundColor';
          const enabled = keyword['foregroundColor'];

          if (selected && enabled) {
            Store.dispatch('app', 'selectColorInput', null);
            Store.dispatch('app', 'setShowColorPicker', false);
            Store.dispatch('theme', 'setForegroundColor', {
              keyword: selectedKeyword,
              color: null,
            });
          } else if (!selected && !enabled) {
            Store.dispatch('app', 'selectColorInput', 'foregroundColor');
            Store.dispatch('app', 'setShowColorPicker', true);
            Store.dispatch('theme', 'setForegroundColor', {
              keyword: selectedKeyword,
              color: state.picker.hex,
            });
          } else if (!selected && enabled) {
            Store.dispatch('theme', 'setForegroundColor', {
              keyword: selectedKeyword,
              color: null,
            });
          }

          mitt.emit('RENDER');
        },

        select: () => {
          if (keyword['foregroundColor'] === null) {
            return null;
          }

          Store.dispatch('app', 'setShowColorPicker', true);
          Store.dispatch('picker', 'setHex', keyword.foregroundColor);
          Store.dispatch('picker', 'setPreviousColor', keyword.foregroundColor);
          Store.dispatch('app', 'selectColorInput', 'foregroundColor');
          mitt.emit('RENDER');
        },
      },

      backgroundColor: {
        value: keyword['backgroundColor'],
        name: 'backgroundColor',
        label: 'Background',
        title: 'Select background color',
        selected: state.app.selectedInput === 'backgroundColor',

        enabled: keyword['backgroundColor'] !== null,
        onToggleEnable: e => {
          e.preventDefault();
          e.stopPropagation();

          const selected = state.app.selectedInput === 'backgroundColor';
          const enabled = keyword['backgroundColor'];

          if (selected && enabled) {
            Store.dispatch('app', 'selectColorInput', null);
            Store.dispatch('app', 'setShowColorPicker', false);
            Store.dispatch('theme', 'setBackgroundColor', {
              keyword: selectedKeyword,
              color: null,
            });
          } else if (!selected && !enabled) {
            Store.dispatch('app', 'selectColorInput', 'backgroundColor');
            Store.dispatch('app', 'setShowColorPicker', true);
            Store.dispatch('theme', 'setBackgroundColor', {
              keyword: selectedKeyword,
              color: state.picker.hex,
            });
          } else if (!selected && enabled) {
            Store.dispatch('theme', 'setBackgroundColor', {
              keyword: selectedKeyword,
              color: null,
            });
          }
          mitt.emit('RENDER');
        },

        select: () => {
          if (keyword['backgroundColor'] === null) {
            return null;
          }

          Store.dispatch('app', 'setShowColorPicker', true);
          Store.dispatch('picker', 'setHex', keyword.backgroundColor);
          Store.dispatch('picker', 'setPreviousColor', keyword.backgroundColor);
          Store.dispatch('app', 'selectColorInput', 'backgroundColor');
          mitt.emit('RENDER');
        },
      },

      boldCheckbox: {
        label: 'Bold',
        name: 'bold',
        title: keyword['bold'] ? 'Disable bold' : 'Enable bold',
        value: keyword['bold'],
        onclick: e => {
          Store.dispatch('theme', 'toggleTextDecoration', {
            keyword: selectedKeyword,
            attr: 'bold',
            value: !keyword['bold'],
          });

          mitt.emit('RENDER');
        },
      },

      italicCheckbox: {
        label: 'Italic',
        name: 'italic',
        title: keyword['italic'] ? 'Disable italic' : 'Enable italic',
        value: keyword['italic'],
        onclick: e => {
          Store.dispatch('theme', 'toggleTextDecoration', {
            keyword: selectedKeyword,
            attr: 'italic',
            value: !keyword['italic'],
          });

          mitt.emit('RENDER');
        },
      },

      underlineCheckbox: {
        label: 'Underline',
        name: 'underline',
        title: keyword['underline'] ? 'Disable underline' : 'Enable underline',
        value: keyword['underline'],
        onclick: e => {
          Store.dispatch('theme', 'toggleTextDecoration', {
            keyword: selectedKeyword,
            attr: 'underline',
            value: !keyword['underline'],
          });

          mitt.emit('RENDER');
        },
      },

      strikethroughCheckbox: {
        label: 'Strikethrough',
        name: 'lineThrough',
        title: keyword['lineThrough'] ? 'Disable strikethrough' : 'Enable strikethrough',
        value: keyword['lineThrough'],
        onclick: e => {
          Store.dispatch('theme', 'toggleTextDecoration', {
            keyword: selectedKeyword,
            attr: 'lineThrough',
            value: !keyword['lineThrough'],
          });

          mitt.emit('RENDER');
        },
      },
    },
  };
}

function ColorPickerView({ state, Store, props }) {
  return html`
    <div class="color-picker">
      <div class="color-picker-top">
        <div
          class="keyword-preview"
          style="${cssPreviewKeyword(props.keyword, props.normalKeyword)}"
        >
          Preview
        </div>

        <div class="text-buttons">
          <div class="text-decorations">
            <div
              onclick="${props.boldCheckbox.onclick}"
              title="${props.boldCheckbox.title}"
              data-checked="${props.boldCheckbox.value}"
              class="raised-btn keyword-buttons__icon"
            >
              <i class="fas fa-bold"></i>
            </div>

            <div
              onclick="${props.italicCheckbox.onclick}"
              title="${props.italicCheckbox.title}"
              data-checked="${props.italicCheckbox.value}"
              class="raised-btn keyword-buttons__icon"
            >
              <i class="fas fa-italic"></i>
            </div>

            <div
              onclick="${props.underlineCheckbox.onclick}"
              title="${props.underlineCheckbox.title}"
              data-checked="${props.underlineCheckbox.value}"
              class="raised-btn keyword-buttons__icon"
            >
              <i class="fas fa-underline"></i>
            </div>

            <div
              onclick="${props.strikethroughCheckbox.onclick}"
              title="${props.strikethroughCheckbox.title}"
              data-checked="${props.strikethroughCheckbox.value}"
              class="raised-btn keyword-buttons__icon"
            >
              <i class="fas fa-strikethrough"></i>
            </div>
          </div>
        </div>

        <div class="tab-colors">
          <div
            data-selected="${props.foregroundColor.selected}"
            data-enabled="${props.foregroundColor.enabled}"
            onclick=${props.foregroundColor.select}
            title="${props.foregroundColor.title}"
            class="tab"
          >
            <div class="tab-text">
              Foreground
            </div>

            ${ToggleEnable({
              enabled: props.foregroundColor.enabled,
              toggle: props.foregroundColor.onToggleEnable,
              title: props.foregroundColor.enabled
                ? 'Disable foreground color, equivalent to NONE in vim'
                : 'Enable foreground color',
            })}
          </div>

          <div
            data-selected="${props.backgroundColor.selected}"
            data-enabled="${props.backgroundColor.enabled}"
            onclick=${props.backgroundColor.select}
            title="${props.backgroundColor.title}"
            class="tab"
          >
            <div class="tab-text">
              Background
            </div>

            ${ToggleEnable({
              enabled: props.backgroundColor.enabled,
              toggle: props.backgroundColor.onToggleEnable,
              title: props.backgroundColor.enabled
                ? 'Disable background color, equivalent to NONE in vim'
                : 'Enable background color',
            })}
          </div>
        </div>
      </div>

      ${props.showColorPicker
        ? html`
            <div class="color-picker-middle">
              ${compose(SlPickerView)(SlPickerTemplate)({ state, Store })}
              ${compose(HuePickerView)(HuePickerTemplate)({ state, Store })}
              ${compose(ColorInputsView)(ColorInputsTemplate)({ state, Store })}
            </div>
          `
        : html`<div></div>`}
    </div>
  `;
}

function ToggleEnable({ enabled, toggle, title = '' }) {
  return html`
    ${enabled
      ? html`
          <i
            title="${title}"
            onclick="${toggle}"
            class="far fa-check-square"
          ></i>
        `
      : html`
          <i title="Enable color" onclick="${toggle}" class="far fa-square"></i>
        `}
  `;
}
