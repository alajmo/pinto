import './modal.css';
import { mitt } from 'lib/event.js';
import { html } from 'lighterhtml';

export { Modal };

function Modal({ size = 'small', children }) {
  return html`
    <div class="modal--${size}">
      ${children}
    </div>
  `;
}
