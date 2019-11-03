import './sl-picker.css';
import { printHsl } from 'lib/color.js';
import { html } from 'lighterhtml';
import { dragTrack } from 'lib/drag.js';

export { SlPicker };

function SlPicker({ color, cb }) {
  const [h, s, l] = color;
  const hueBackgroundCss = printHsl([h, 1, 0.5]);
  const selectorHslaCss = printHsl([h, s, l]);

  return html`
    <div
      id="sl-picker"
      class="picker-sl"
      style="background-color: ${hueBackgroundCss}"
      onmousedown="${e => dragTrack(e, 'sl-picker', cb)}"
    >
      <div
        class="picker-selector"
        style="background: ${selectorHslaCss}; left: ${s * 100}%; top: ${(1 -
          l) *
          100}%"
      ></div>
    </div>
  `;
}
