import { html } from 'lighterhtml';
import './grow-input.css';

export { GrowInput };

function GrowInput({
  value,
  name,
  onkeydown = () => {},
  onclick = () => {},
  onblur = () => {},
  readonly = false,
}) {
  const handleBlur = e => {
    e.target.scroll(0, 0);
    onblur(e);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    let text = e.clipboardData.getData('text');
    text = text.replace(/\r?\n|\r/g, '');
    document.execCommand('insertText', false, text);
  };

  const handleMousedown = e => {
    onclick(e);
  };

  return html`
    <span
      class="input-grow"
      contenteditable="${!readonly}"
      spellcheck="false"
      type="text"
      name="${name}"
      onkeydown="${handleKeyDown}"
      onmousedown="${handleMousedown}"
      onblur="${handleBlur}"
      onpaste="${handlePaste}"
    >
      ${value}
    </span>
  `;
}
