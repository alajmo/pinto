import { html } from 'lighterhtml';

import { mitt } from 'lib/event.js';
import './color-inputs.css';
import { NumberInput } from 'components/number-input/number-input.js';
import { RadioButton } from 'components/radio-button/radio-button.js';

export { ColorInputsView, ColorInputsTemplate };

function ColorInputsTemplate({ state, Store }) {
  const { hex, red, green, blue, hue, saturation, brightness } = state.picker;

  return {
    state,
    props: {
      setPreviousColor: () => {
        Store.dispatch('picker', 'setHex', state.picker.previousColor);
        mitt.emit('RENDER');
      },

      hex: {
        value: hex,
        onkeyup: e => {
          try {
            Store.dispatch('picker', 'setHex', e.target.value);
          } catch (e) {
            return;
          }

          mitt.emit('RENDER');
        },
      },

      red: {
        radioButton: {
          value: state.picker.selectedColorAttribute === 'red',
          id: 'R',
          label: 'R',
          group: 'colors',
          onchange: () => {
            Store.dispatch('picker', 'setSelectedColorAttribute', 'red');
            mitt.emit('RENDER');
          },
        },

        input: {
          name: 'R',
          value: red,
          className: 'stripped',
          min: 0,
          max: 255,
          step: 1,
          onchange: e => {
            const value = Math.round(e.target.value);
            const validNumber = isNumberBetween(value, 0, 255);

            if (validNumber) {
              e.target.value = value;
              Store.dispatch('picker', 'setRgb', {
                red: value,
                green,
                blue,
              });
            } else {
              e.target.value = red;
              Store.dispatch('picker', 'setRgb', {
                red,
                green,
                blue,
              });
            }

            mitt.emit('RENDER');
          },
        },
      },

      green: {
        radioButton: {
          value: state.picker.selectedColorAttribute === 'green',
          id: 'G',
          label: 'G',
          group: 'colors',
          onchange: () => {
            Store.dispatch('picker', 'setSelectedColorAttribute', 'green');
            mitt.emit('RENDER');
          },
        },

        input: {
          name: 'G',
          value: green,
          className: 'stripped',
          min: 0,
          max: 255,
          step: 1,
          onchange: e => {
            const value = Math.round(e.target.value);
            const validNumber = isNumberBetween(value, 0, 255);

            if (validNumber) {
              e.target.value = value;
              Store.dispatch('picker', 'setRgb', {
                red,
                green: value,
                blue,
              });
            } else {
              e.target.value = green;
              Store.dispatch('picker', 'setRgb', {
                red,
                green,
                blue,
              });
            }

            mitt.emit('RENDER');
          },
        },
      },

      blue: {
        radioButton: {
          value: state.picker.selectedColorAttribute === 'blue',
          id: 'B',
          label: 'B',
          group: 'colors',
          onchange: () => {
            Store.dispatch('picker', 'setSelectedColorAttribute', 'blue');
            mitt.emit('RENDER');
          },
        },

        input: {
          name: 'B',
          value: blue,
          className: 'stripped',
          min: 0,
          max: 255,
          step: 1,
          onchange: e => {
            const value = Math.round(e.target.value);
            const validNumber = isNumberBetween(value, 0, 255);

            if (validNumber) {
              e.target.value = value;
              Store.dispatch('picker', 'setRgb', {
                red,
                green,
                blue: value,
              });
            } else {
              e.target.value = blue;
              Store.dispatch('picker', 'setRgb', {
                red,
                green,
                blue,
              });
            }

            mitt.emit('RENDER');
          },
        },
      },

      hue: {
        radioButton: {
          value: state.picker.selectedColorAttribute === 'hue',
          id: 'H',
          label: 'H',
          group: 'colors',
          onchange: () => {
            Store.dispatch('picker', 'setSelectedColorAttribute', 'hue');
            mitt.emit('RENDER');
          },
        },

        input: {
          name: 'H',
          value: hue,
          className: 'stripped',
          step: 1,
          min: 0,
          max: 360,
          onchange: e => {
            const value = Math.round(e.target.value);
            const validNumber = isNumberBetween(value, 0, 360);

            if (validNumber) {
              e.target.value = value;
              Store.dispatch('picker', 'setHsb', {
                hue: value,
                saturation,
                brightness,
              });
            } else {
              e.target.value = hue;
              Store.dispatch('picker', 'setHsb', {
                hue,
                saturation,
                brightness,
              });
            }

            mitt.emit('RENDER');
          },
        },
      },

      saturation: {
        radioButton: {
          value: state.picker.selectedColorAttribute === 'saturation',
          id: 'S',
          label: 'S',
          group: 'colors',
          onchange: () => {
            Store.dispatch('picker', 'setSelectedColorAttribute', 'saturation');
            mitt.emit('RENDER');
          },
        },

        input: {
          name: 'S',
          value: saturation,
          className: 'stripped',
          step: 1,
          min: 0,
          max: 100,
          onchange: e => {
            const value = Math.round(e.target.value);
            const validNumber = isNumberBetween(value, 0, 100);

            if (validNumber) {
              e.target.value = value;
              Store.dispatch('picker', 'setHsb', {
                hue,
                saturation: value,
                brightness,
              });
            } else {
              e.target.value = saturation;
              Store.dispatch('picker', 'setHsb', {
                hue,
                saturation,
                brightness,
              });
            }

            mitt.emit('RENDER');
          },
        },
      },

      brightness: {
        radioButton: {
          value: state.picker.selectedColorAttribute === 'brightness',
          id: 'BRIGHTNESS',
          label: 'B',
          group: 'colors',
          onchange: () => {
            Store.dispatch('picker', 'setSelectedColorAttribute', 'brightness');
            mitt.emit('RENDER');
          },
        },

        input: {
          name: 'Brightness',
          value: brightness,
          className: 'stripped',
          step: 1,
          min: 0,
          max: 100,
          onchange: e => {
            const value = Math.round(e.target.value);
            const validNumber = isNumberBetween(value, 0, 100);

            if (validNumber) {
              e.target.value = value;
              Store.dispatch('picker', 'setHsb', {
                hue,
                saturation,
                brightness: value,
              });
            } else {
              e.target.value = brightness;
              Store.dispatch('picker', 'setHsb', {
                hue,
                saturation,
                brightness,
              });
            }

            mitt.emit('RENDER');
          },
        },
      },
    },
  };
}

function ColorInputsView({ state, props }) {
  return html`
    <div class="color-inputs">
      <div class="color-inputs__hex">
        <div class="color-inputs__previews">
          <div
            class="color-inputs__preview"
            style="background: ${state.picker.hex}"
          ></div>

          <div
            class="color-inputs__preview"
            onclick="${props.setPreviousColor}"
            style="background: ${state.picker.previousColor}"
          ></div>
        </div>

        ${HexInput(props.hex)}
      </div>

      <div class="color-inputs__items">
        <span class="color-inputs__title">
          RGB
        </span>

        ${ColorInput(props.red)} ${ColorInput(props.green)}
        ${ColorInput(props.blue)}
      </div>

      <div class="color-inputs__items">
        <span class="color-inputs__title">
          HSB
        </span>
        ${ColorInput(props.hue)} ${ColorInput(props.saturation)}
        ${ColorInput(props.brightness)}
      </div>
    </div>
  `;
}

function ColorInput(props) {
  return html`
    <div class="radio-color-input">
      ${RadioButton(props.radioButton)} ${NumberInput(props.input)}
    </div>
  `;
}

function HexInput({ value, onkeyup }) {
  return html`
    <div class="hex-input">
      <input
        class="hex-filled"
        autocomplete="off"
        aria-label="Type a color name or hex value"
        name=""
        id=""
        value="${value}"
        maxlength="7"
        onkeyup="${onkeyup}"
        onclick="select()"
      />
    </div>
  `;
}

function isNumberBetween(number, min, max) {
  return number >= min && number <= max;
}
