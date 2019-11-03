import './hue-picker.css';
import { html } from 'lighterhtml';
import { printHsl } from 'lib/color.js';
import { dragTrack } from 'lib/drag.js';

export { HuePicker };

function HuePicker({ color, cb }) {
  const hue = color[0];
  const hslaCss = printHsl([hue, 1, 0.5]);

  return html`
    <div
      id="hue-picker"
      class="picker-hue picker-slider"
      onmousedown="${e => dragTrack(e, 'hue-picker', cb)}"
    >
      <div
        class="picker-selector"
        style="background: ${hslaCss}; top: ${(1 - hue) * 100}%"
      ></div>
    </div>
  `;
}
