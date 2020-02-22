import './select.css';
import { html } from 'lighterhtml';

export { Select };

function Select({
  name,
  label,
  disabled = false,
  selected,
  options = [],
  className = 'filled',
  onchange,
}) {
  let selectElement;
  let optionsElement;

  function onFocus(e) {
    selectElement = e.currentTarget;
    optionsElement = e.currentTarget.nextSibling.nextSibling;

    e.stopImmediatePropagation();
    e.preventDefault();

    selectElement.addEventListener(
      'keydown',
      onKeyDown,
      { capture: true, once: false },
      false,
    );
  }

  function onBlur(e) {
    e.currentTarget.removeEventListener(
      'keydown',
      onKeyDown,
      { capture: true, once: false },
      false,
    );
  }

  function onSelectClick(e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    selectElement.children[1].children[0].className =
      'select-icon fas fa-caret-up actionable';

    window.addEventListener(
      'click',
      onOptionSelect,
      { capture: true, once: true },
      false,
    );

    showOptions();
  }

  function onKeyDown(e) {
    const selectedOptionElement = optionsElement.querySelector(
      'div[data-selected="true"]',
    );
    const selectedName = selectedOptionElement.getAttribute('data-option-id');
    const isOpen = optionsElement.getAttribute('data-open');

    const i = options.indexOf(selectedName);
    switch (e.code) {
      case 'Space':
        onSelectClick(e);
        break;
      case 'Tab':
        hideMenu();
        break;
      case 'Enter':
        e.stopImmediatePropagation();
        e.preventDefault();

        if (isOpen === 'true') {
          hideMenu();
        } else {
          onSelectClick(e);
        }

        break;
      case 'Escape':
        e.stopImmediatePropagation();
        e.preventDefault();

        if (isOpen === 'true') {
          hideMenu();
        }

        break;
      case 'ArrowUp':
        e.stopImmediatePropagation();
        e.preventDefault();

        if (i > 0) {
          onchange(options[i - 1]);
        }

        break;
      case 'ArrowLeft':
        e.stopImmediatePropagation();
        e.preventDefault();

        if (i > 0) {
          onchange(options[i - 1]);
        }

        break;
      case 'ArrowDown':
        e.stopImmediatePropagation();
        e.preventDefault();

        if (i < options.length - 1) {
          onchange(options[i + 1]);
        }
        break;
      case 'ArrowRight':
        e.stopImmediatePropagation();
        e.preventDefault();

        if (i < options.length - 1) {
          onchange(options[i + 1]);
        }
        break;
      default:
    }
  }

  function onOptionSelect(e) {
    e.stopImmediatePropagation();
    e.preventDefault();

    if (e.target.hasAttribute('data-option-id')) {
      const value = e.target.getAttribute('data-option-id');
      onchange(value);
    }

    hideMenu();
  }

  function showOptions() {
    const { height } = selectElement.getBoundingClientRect();
    const width = selectElement.offsetWidth;

    optionsElement.style.left = `0px`;
    optionsElement.style.top = `${height}px`;
    optionsElement.style.width = `${width}px`;
    optionsElement.setAttribute('data-open', 'true');
  }

  function hideMenu() {
    optionsElement.setAttribute('data-open', 'false');

    selectElement.children[1].children[0].className =
      'select-icon fas fa-caret-down actionable';
  }

  return html`
    <div class="select ${className}">
      <div
        class="select-input-content ${disabled ? 'disabled' : ''}"
        tabindex="${disabled ? null : 0}"
        onfocus="${disabled ? null : onFocus}"
        onblur="${disabled ? null : onBlur}"
        onclick="${disabled ? null : onSelectClick}"
      >
        <label for="${name}">${label}</label>
        <div class="select-input ${disabled ? 'disabled' : ''}" id="${name}">
          ${selected}
          <i class="select-icon fas fa-caret-down actionable"></i>
        </div>
      </div>

      <div class="options" data-open="false">
        ${Object.values(options).map(
          (option, i) =>
            html`
              <div
                class="option"
                data-option-index="${i}"
                data-option-id="${option}"
                data-selected=${selected === option}
              >
                ${option}
              </div>
            `,
        )}
      </div>
    </div>
  `;
}
