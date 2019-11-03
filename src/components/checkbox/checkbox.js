import './checkbox.css';
import { render, html } from 'lighterhtml';

export { Checkbox };

function Checkbox({ name, value, label, onclick }) {
  return html`
    <div class="form-column">
      <input
        class="checkbox"
        type="checkbox"
        name="${name}"
        id="${name}"
        onclick="${onclick}"
        checked=${value ? true : false}
      />
      <label class="label-checkbox" for="${name}">
        ${label}
      </label>
    </div>
  `;
}
