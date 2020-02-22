import { html } from 'lighterhtml';

export { NumberInput };

function NumberInput({
  type = 'number',
  step = 1,
  value,
  className = 'filled',
  name,
  label,
  onchange,
  min = false,
  max = false,
}) {
  return html`
    <div class="input">
      ${label ? html`<label for="${name}">${label}</label>` : null}

      <input
        class="${className}"
        type="${type}"
        step="${step}"
        name="${name}"
        id="${name}"
        value="${value}"
        min="${min}"
        max="${max}"
        onchange="${onchange}"
      />
    </div>
  `;
}

onkeypress="return isNumberKey(event)"
