import { render, html } from 'lighterhtml';
import './keyword-form.css';
import { hexToHsl, hslToHex } from 'lib/color.js';
import { SlPicker } from 'components/sl-picker/sl-picker.js';
import { HuePicker } from 'components/hue-picker/hue-picker.js';
import { Palette } from 'components/palette/palette.js';
import { ColorInput } from 'components/color-input/color-input.js';
import { Checkbox } from 'components/checkbox/checkbox.js';
import { mitt } from 'lib/event.js';

export { KeywordForm };

function KeywordForm(state, Store) {
  const selectedKeyword = state.app.selectedKeyword;
  const keyword = state.keyword.keywords[selectedKeyword];

  const components = {
    toggleTextDecoration: () => {
      Store.dispatch('app', 'toggleShowTextDecoration');
      mitt.emit('RENDER');
    },

    bold: {
      label: 'Bold',
      name: 'bold',
      value: keyword['bold'],
      onclick: e => {
        Store.dispatch('keyword', 'toggleTextDecoration', {
          keyword: selectedKeyword,
          attr: e.target.name,
          value: e.target.checked,
        });

        mitt.emit('RENDER');
      },
    },

    italic: {
      label: 'Italic',
      name: 'italic',
      value: keyword['italic'],
      onclick: e => {
        Store.dispatch('keyword', 'toggleTextDecoration', {
          keyword: selectedKeyword,
          attr: e.target.name,
          value: e.target.checked,
        });

        mitt.emit('RENDER');
      },
    },

    underline: {
      label: 'Underline',
      name: 'underline',
      value: keyword['underline'],
      onclick: e => {
        Store.dispatch('keyword', 'toggleTextDecoration', {
          keyword: selectedKeyword,
          attr: e.target.name,
          value: e.target.checked,
        });

        mitt.emit('RENDER');
      },
    },

    lineThrough: {
      label: 'Strikethrough',
      name: 'lineThrough',
      value: keyword['lineThrough'],
      onclick: e => {
        Store.dispatch('keyword', 'toggleTextDecoration', {
          keyword: selectedKeyword,
          attr: e.target.name,
          value: e.target.checked,
        });

        mitt.emit('RENDER');
      },
    },

    slPicker: {
      color: state.picker.color,
      cb: (x, y) => {
        const sl = [x, 1 - y];
        Store.dispatch('picker', 'setSl', sl);
        mitt.emit('RENDER');
      },
    },

    huePicker: {
      color: state.picker.color,
      cb: (x, y) => {
        const hue = 1 - y;
        const state = Store.getState();

        Store.dispatch('picker', 'setHue', hue);
        mitt.emit('RENDER');
      },
    },

    palette: {
      palette: state.palette,

      clickPaletteColor(e) {
        e.preventDefault();
        e.stopPropagation();
        const state = Store.getState();

        if (!e.target.getAttribute('data-index')) {
          Store.dispatch('palette', 'unSelectPaletteColor', {}, false);
          Store.dispatch('palette', 'setNormalMode');
          return;
        }

        if (state.palette.mode === state.palette.paletteModes.remove) {
          Store.dispatch('palette', 'removePaletteColor', {
            index: Number(e.target.getAttribute('data-index')),
          });
        } else {
          const colorIndex = Number(e.target.getAttribute('data-index'));
          if (colorIndex === state.palette.palette.selectedPaletteColor) {
            Store.dispatch('palette', 'unSelectPaletteColor');
          } else {
            Store.dispatch('palette', 'selectPaletteColor', colorIndex);
            const hsl = hexToHsl(state.palette.palette.colors[colorIndex]);
            Store.dispatch('picker', 'setColor', hsl);
          }
          Store.dispatch('palette', 'setNormalMode');
        }

        mitt.emit('RENDER');
      },

      addPaletteColor(e) {
        e.preventDefault();
        e.stopPropagation();
        const state = Store.getState();
        const hex = hslToHex(state.picker.color);

        Store.dispatch('palette', 'setNormalMode');
        Store.dispatch('palette', 'addPaletteColor', hex);

        mitt.emit('RENDER');
      },

      toggleRemoveMode(e) {
        e.preventDefault();
        e.stopPropagation();
        const state = Store.getState();

        if (state.palette.mode === state.palette.paletteModes.remove) {
          Store.dispatch('palette', 'setNormalMode');
        } else {
          Store.dispatch('palette', 'unSelectPaletteColor');
          Store.dispatch('palette', 'setRemoveMode');
        }

        mitt.emit('RENDER');
      },
    },

    foregroundColor: {
      value: keyword['foregroundColor'],
      name: 'foregroundColor',
      label: 'Foreground',
      selected: state.app.selectedInput === 'foregroundColor',

      onkeyup: e => {
        const state = Store.getState();
        const color = e.target.value;

        try {
          const hsl = hexToHsl(color);

          Store.dispatch('picker', 'setInputColor', hsl);
        } catch (e) {
          return;
        }

        mitt.emit('RENDER');
      },
      onfocus: e => {
        e.preventDefault();
        e.stopPropagation();

        const { state, events } = Store.get();
        const input = e.target.name;
        const selectedKeyword = state.app.selectedKeyword;
        const color = state.keyword.keywords[selectedKeyword][input];
        const hsl = hexToHsl(color);

        Store.dispatch('app', 'selectColorInput', input);
        Store.dispatch('picker', 'setColor', hsl);

        mitt.emit('RENDER');
      },
      onfocusout: e => {
        e.preventDefault();
        e.stopPropagation();
        Store.dispatch('app', 'unSelectColorInput');

        mitt.emit('RENDER');
      },
    },

    backgroundColor: {
      value: keyword['backgroundColor'],
      name: 'backgroundColor',
      label: 'Background',
      type: ColorInput,
      selected: state.app.selectedInput === 'backgroundColor',

      onkeyup: e => {
        const state = Store.getState();
        const color = e.target.value;

        try {
          const hsl = hexToHsl(color);

          Store.dispatch('picker', 'setInputColor', hsl);
        } catch (e) {
          return;
        }

        mitt.emit('RENDER');
      },
      onfocus: e => {
        e.preventDefault();
        e.stopPropagation();

        const { state, events } = Store.get();
        const input = e.target.name;
        const selectedKeyword = state.app.selectedKeyword;
        const color = state.keyword.keywords[selectedKeyword][input];
        const hsl = hexToHsl(color);

        Store.dispatch('app', 'selectColorInput', input);
        Store.dispatch('picker', 'setColor', hsl);

        mitt.emit('RENDER');
      },
      onfocusout: e => {
        e.preventDefault();
        e.stopPropagation();
        Store.dispatch('app', 'unSelectColorInput');

        mitt.emit('RENDER');
      },
    },
  };

  return html`
    <div class="keyword-form">
      <h3>${selectedKeyword}</h3>

      <div class="divider--medium"></div>

      <h4 onclick="${components.toggleTextDecoration}">Text Decoration</h4>

      <div class="divider--small"></div>

      <div
        class="text-decoration"
        data-display-text-decoration=${state.app.showTextDecoration}
      >
        ${Checkbox(components.bold)} ${Checkbox(components.italic)}
        ${Checkbox(components.underline)} ${Checkbox(components.lineThrough)}
      </div>

      <h4>Color</h4>

      <div class="divider--small"></div>

      <div class="form-column">
        <div class="form-row">
          ${SlPicker(components.slPicker)} ${HuePicker(components.huePicker)}
        </div>

        <div class="form-row">
          ${ColorInput(components.foregroundColor)}
          ${ColorInput(components.backgroundColor)}
        </div>

        <div class="form-row">
          ${Palette(components.palette, Store)}
        </div>
      </div>
    </div>
  `;
}
