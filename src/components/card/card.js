import './card.css';
import { html } from 'lighterhtml';

export { Card };

function Card({
  className = '',
  toolbar = true,
  title = '',
  topLeftContet = () => {},
  topRightContent = () => {},
  mainContent = () => {},
  bottomContent = () => {},
  toggle,
  show = true,
}) {
  return html`
    <div class="card ${className}">
      ${toolbar
        ? html`
            <div class="card-header">
              <div class="card-header--left">
                <h4>${title}</h4>
                <div class="card-header--left-content">
                  ${topLeftContet && topLeftContet()}
                </div>
              </div>

              <div class="card-header--right">
                ${topRightContent && topRightContent()}
                ${toggle
                  ? show
                    ? html`
                        <i
                          onclick="${toggle}"
                          class="fas fa-window-minimize actionable"
                        ></i>
                      `
                    : html`
                        <i
                          onclick="${toggle}"
                          class="fas fa-window-maximize actionable"
                        ></i>
                      `
                  : null}
              </div>
            </div>
          `
        : null}

      <div
        class="card-main-content"
        style="display: ${show ? 'block' : 'none'}"
      >
        ${mainContent && mainContent()}
      </div>

      <div class="card-bottom-content">
        ${false && bottomContent
          ? bottomContent.map(item => html` ${item()} `)
          : null}
      </div>
    </div>
  `;
}
