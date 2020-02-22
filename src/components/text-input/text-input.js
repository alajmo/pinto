import { html } from 'lighterhtml';

export { TextInput };

function TextInput({
  name,
  value,
  label,
  autofocus = false,
  onkeyup,
  minlength = 0,
  maxlength = 99,
}) {
  return html`
    <div class="input">
      <label for="${name}">${label}</label>

      <input
        autofocus=${autofocus}
        class="filled"
        type="text"
        name="${name}"
        id="${name}"
        value="${value}"
        minlength="${minlength}"
        maxlength="${maxlength}"
        onkeyup="${onkeyup}"
      />
    </div>
  `;
}
