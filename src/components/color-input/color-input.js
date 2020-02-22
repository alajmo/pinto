import './color-input.css';
import { html } from 'lighterhtml';

export { ColorInput };

function ColorInput({
  name,
  label,
  value,
  onkeyup,
  onfocus,
  onfocusout,
  triggeredFromInput = false,
}) {
  const inputValue = hex;

  return html`
    <div class="input">
      <label class="label" for="${name}">${label}</label>

      <div class="color">
        <input
          class="filled"
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

        <div class="color-sample" style="background: ${value};"></div>
      </div>
    </div>
  `;
}
