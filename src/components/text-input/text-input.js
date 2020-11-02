import { html } from 'lighterhtml';

export { TextInput };

function TextInput({
  name,
  value,
  placeholder = '',
  label,
  autofocus = false,
  onkeyup,
  minlength = 0,
  maxlength = 99,
  className = '',
  disabled = false,
}) {
  return html`
    <div class="input">
      ${label ? html`<label for="${name}">${label}</label>` : null}

      <input
        autofocus=${autofocus}
        class="filled ${className}"
        type="text"
        placeholder="${placeholder}"
        name="${name}"
        id="${name}"
        value="${value}"
        minlength="${minlength}"
        maxlength="${maxlength}"
        onkeyup="${onkeyup}"
        disabled="${disabled}"
      />
    </div>
  `;
}
