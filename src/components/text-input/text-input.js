import './text-input.css';
import { html } from 'lighterhtml';

export { TextInput };

function TextInput({ name, value, label, onkeyup }) {
  return html`
    <div class="text-input">
      <label class="label" for="${name}">${label}</label>

      <input
        class="text-input"
        type="text"
        name="${name}"
        id="${name}"
        value="${value}"
        maxlength="30"
        onkeyup="${onkeyup}"
      />
    </div>
  `;
}
