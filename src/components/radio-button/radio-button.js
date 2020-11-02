import './radio-button.css';
import { html } from 'lighterhtml';

export { RadioButton };

function RadioButton({
  id,
  group,
  title,
  value = false,
  label,
  onchange = () => {},
  onclick,
  disabled = false,
}) {
  return html`
    <div>
      <input
        type="radio"
        name="${group}"
        title="${title}"
        id="${id}"
        checked="${value}"
        value="${value} "
        disabled="${disabled}"
        onchange="${onchange}"
        onclick="${onclick}"
      />

      <label title="${title}" for="${id}">
        ${label}
      </label>
    </div>
  `;
}
