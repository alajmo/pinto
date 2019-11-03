import './select.css';
import { html } from 'lighterhtml';

export { Select };

function Select({ name, label, selected, options = [], onchange }) {
  return html`
    <div class="select">
      <label class="label" for="${name}">${label}</label>

      <select class="select-input" onchange="${onchange}">
        ${options.map(
          (option, i) => html.node`
          <option value="${i}" selected=${option ===
            selected}>${option}</option>
        `,
        )}
      </select>
    </div>
  `;
}
