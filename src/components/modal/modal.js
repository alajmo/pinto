import './modal.css';
import { html } from 'lighterhtml';

export { Modal };

function Modal({ title = '', size = 'auto', header = '', main = '', close }) {
  return html`
    <div
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      class="modal modal--${size}"
    >
      <div class="modal-header">
        <div class="modal-header--left">
          <h3 class="modal-header-title">${title}</h3>
        </div>

        <div class="modal-header--right">
          ${header}

          <i
            title="Show fullscreen preview"
            class="fas fa-times actionable modal-close"
            onclick="${close}"
          ></i>
        </div>
      </div>

      <div class="modal-main">
        ${main}
      </div>
    </div>
  `;
}
