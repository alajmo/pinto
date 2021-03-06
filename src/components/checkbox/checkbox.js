import './checkbox.css';
import { html } from 'lighterhtml';

export { Checkbox };

function Checkbox({
  name,
  title = '',
  value = false,
  label,
  onchange = () => {},
  onclick,
  disabled = false,
}) {
  return html`
    <div>
      <input
        tabindex="0"
        class="checkbox"
        type="checkbox"
        title="${title}"
        id="${name}"
        name="${name}"
        checked="${value}"
        value="${value}"
        disabled="${disabled}"
        onchange="${onchange}"
        onclick="${onclick}"
      />
      <label title="${title}" class="label-checkbox" for="${name}">
        ${label}
      </label>
    </div>
  `;
}
