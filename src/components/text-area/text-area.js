import { html } from 'lighterhtml';

export { TextArea };

function TextArea({
  name,
  value,
  label,
  autofocus = false,
  onkeyup,
  placeholder,
  minlength = 0,
  maxlength = 9999999,
}) {
  return html`
    <div class="input">
      <label for="${name}">${label}</label>

      <textarea
        autofocus=${autofocus}
        class="filled"
        type="text"
        name="${name}"
        id="${name}"
        value="${value}"
        minlength="${minlength}"
        maxlength="${maxlength}"
        onkeyup="${onkeyup}"
        placeholder="${placeholder}"
      />
    </div>
  `;
}
