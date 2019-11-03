import './color-input.css';
import { html } from 'lighterhtml';
import { hslToHex } from 'lib/color.js';

export { ColorInput };

function ColorInput({
  name,
  label,
  value,
  onkeyup,
  onfocus,
  onfocusout,
  triggeredFromInput = false,
  selected = false,
}) {
  const hex = hslToHex(value);
  const inputValue = triggeredFromInput ? hex : value;

  return html`
    <div class="color-input">
      <label class="label" for="${name}">${label}</label>

      <div class="color ${selected ? 'active' : ''}">
        <input
          autocomplete="off"
          aria-label="Type a color name or hex value"
          name="${name}"
          id="${name}"
          value="${inputValue}"
          onkeyup="${onkeyup}"
          onfocus="${onfocus}"
          onfocusout="${onfocusout}"
          maxlength="7"
          onclick="select()"
        />

        <div
          class="color-sample ${selected ? 'active' : ''}"
          style="background: ${value};"
        ></div>
      </div>
    </div>
  `;
}
