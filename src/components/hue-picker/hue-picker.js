import { mitt } from 'lib/event.js';
import './hue-picker.css';
import { html } from 'lighterhtml';
import { dragTrack } from 'lib/drag.js';

export { HuePickerView, HuePickerTemplate };

function HuePickerTemplate({ state, Store }) {
  let cb;
  let value;
  let {
    red,
    green,
    blue,

    hue,
    saturation,
    brightness,

    selectedColorAttribute,
  } = state.picker;

  switch (selectedColorAttribute) {
    case 'red':
      cb = (_, y) => {
        Store.dispatch('picker', 'setRgb', {
          red: Math.floor((1 - y) * 255),
          green,
          blue,
        });

        mitt.emit('RENDER');
      };

      value = red / 255;
      break;
    case 'green':
      cb = (_, y) => {
        Store.dispatch('picker', 'setRgb', {
          red,
          green: Math.floor((1 - y) * 255),
          blue,
        });

        mitt.emit('RENDER');
      };

      value = green / 255;
      break;
    case 'blue':
      cb = (_, y) => {
        Store.dispatch('picker', 'setRgb', {
          red,
          green,
          blue: Math.floor((1 - y) * 255),
        });

        mitt.emit('RENDER');
      };

      value = blue / 255;
      break;
    case 'hue':
      cb = (_, y) => {
        Store.dispatch('picker', 'setHsb', {
          hue: Math.floor((1 - y) * 360),
          saturation,
          brightness,
        });

        mitt.emit('RENDER');
      };

      value = hue / 360;
      break;
    case 'saturation':
      cb = (_, y) => {
        Store.dispatch('picker', 'setHsb', {
          hue,
          saturation: Math.floor((1 - y) * 100),
          brightness,
        });

        mitt.emit('RENDER');
      };

      value = saturation / 100;
      break;
    case 'brightness':
      cb = (_, y) => {
        Store.dispatch('picker', 'setHsb', {
          hue,
          saturation,
          brightness: Math.floor((1 - y) * 100),
        });

        mitt.emit('RENDER');
      };

      value = brightness / 100;
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

function HuePickerView({ props }) {
  return html`
    <div
      class="picker-hue"
      onmousedown="${e => dragTrack(e, 'color-cube-1d', props.cb)}"
    >
      <canvas id="color-cube-1d" width="20" height="202"> </canvas>

      <div class="hue-selector" style="top: ${(1 - props.value) * 100}%"></div>
    </div>
  `;
}
