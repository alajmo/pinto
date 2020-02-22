import { mitt } from 'lib/event.js';
import './sl-picker.css';
import { html } from 'lighterhtml';
import { dragTrack } from 'lib/drag.js';

export { SlPickerView, SlPickerTemplate };

function SlPickerTemplate({ state, Store }) {
  let {
    red,
    green,
    blue,
    hue,
    saturation,
    brightness,
    selectedColorAttribute,
  } = state.picker;
  let cb;
  let value;

  switch (selectedColorAttribute) {
    case 'red':
      cb = (x, y) => {
        Store.dispatch('picker', 'setRgb', {
          red,
          green: Math.floor(x * 255),
          blue: Math.floor((1 - y) * 255),
        });

        mitt.emit('RENDER');
      };

      value = [green / 255, blue / 255];
      break;
    case 'green':
      cb = (x, y) => {
        Store.dispatch('picker', 'setRgb', {
          red: Math.floor(x * 255),
          green,
          blue: Math.floor((1 - y) * 255),
        });

        mitt.emit('RENDER');
      };

      value = [red / 255, blue / 255];
      break;
    case 'blue':
      cb = (x, y) => {
        Store.dispatch('picker', 'setRgb', {
          red: Math.floor(x * 255),
          green: Math.floor((1 - y) * 255),
          blue,
        });

        mitt.emit('RENDER');
      };

      value = [red / 255, green / 255];
      break;
    case 'hue':
      cb = (x, y) => {
        Store.dispatch('picker', 'setHsb', {
          hue,
          saturation: Math.floor(x * 100),
          brightness: Math.floor((1 - y) * 100),
        });

        // mitt.emit('RENDER');
      };

      value = [saturation / 100, brightness / 100];
      break;
    case 'saturation':
      cb = (x, y) => {
        Store.dispatch('picker', 'setHsb', {
          hue: Math.floor(x * 360),
          saturation,
          brightness: Math.floor((1 - y) * 100),
        });

        mitt.emit('RENDER');
      };

      value = [hue / 360, brightness / 100];
      break;
    case 'brightness':
      cb = (x, y) => {
        Store.dispatch('picker', 'setHsb', {
          hue: Math.floor(x * 360),
          saturation: Math.floor((1 - y) * 100),
          brightness,
        });

        mitt.emit('RENDER');
      };

      value = [hue / 360, saturation / 100];
      break;
    default:
  }

  return {
    props: {
      value,
      cb,
    },
  };
}

function SlPickerView({ props }) {
  return html`
    <div
      class="picker-sl"
      onmousedown="${e => dragTrack(e, 'color-cube-2d', props.cb)}"
    >
      <canvas id="color-cube-2d" width="202" height="202"> </canvas>

      <div
        id="color-cube-selector"
        class="sl-selector"
        style="left: ${props.value[0] * 100}%; top: ${(1 - props.value[1]) *
        100}%"
      ></div>
    </div>
  `;
}
