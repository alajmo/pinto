import './number-input.css';
import { render, html } from 'lighterhtml';

export { NumberInput };

function NumberInput({ value, name, label, onchange }) {
  return html`
    <div class="form-column">
      <label class="label-input" for="${name}">${label}</label>

      <input
        class="number-input"
        type="number"
        name="${name}"
        id="${name}"
        value="${value}"
        onchange="${onchange}"
      />
    </div>
  `;
}
