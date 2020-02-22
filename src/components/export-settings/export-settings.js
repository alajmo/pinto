import './export-settings.css';

import { html } from 'lighterhtml';

export { ExportSettingsView, ExportSettingsTemplate };

function ExportSettingsTemplate({ state, Store }) {
  return {
    state,

    Store,

    props: {
    },
  };
}

function ExportSettingsView({ state, Store, props }) {
  return html`
    <div class="export-settings form">
      <div class="item divider">
        <h3 class="max-width">Export Theme</h3>
      </div>

      <div class="export-buttons">
      </div>
    </div>
  `;
}
