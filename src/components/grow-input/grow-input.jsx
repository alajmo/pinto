import { splitProps } from "solid-js";

import "./grow-input.css";

export default (props) => {
  const [local] = splitProps(props, [
    "value",
    "name",
    "onclick",
    "onblur",
    "readonly",
  ]);

  const handleBlur = (e) => {
    e.target.scroll(0, 0);
    local.onblur(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    let text = e.clipboardData.getData("text");
    text = text.replace(/\r?\n|\r/g, "");
    document.execCommand("insertText", false, text);
  };

  const handleMousedown = (e) => {
    local.onclick(e);
  };

  return (
    <span
      class="input-grow"
      contenteditable={!local.readonly}
      spellcheck="false"
      type="text"
      name={local.name}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMousedown}
      onBlur={handleBlur}
      onPaste={handlePaste}
    >
      {local.value}
    </span>
  );
};
