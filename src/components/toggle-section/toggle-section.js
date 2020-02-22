import { html } from 'lighterhtml';

export { ToggleSection };

function ToggleSection({ show, toggle }) {
  return html`
    <div>
      ${show
        ? html`
            <i onclick="${toggle}" class="actionable fas fa-chevron-left"></i>
          `
        : html`
            <i onclick="${toggle}" class="actionable fas fa-chevron-right"></i>
          `}
    </div>
  `;
}
