import './font-settings.css';

import { html } from 'lighterhtml';
import { compose2 } from 'lib/util.js';
import { Select } from 'components/select/select.js';
import { NumberInput } from 'components/number-input/number-input.js';
import { mitt } from 'lib/event.js';
import { Card } from 'components/card/card.js';

export { FontSettingsView, FontSettingsTemplate };

function FontSettingsTemplate({ state, Store }) {
  return {
    state,

    Store,

    props: {
    },
  };
}

function FontSettingsView({ state, Store, props }) {
  return html`
    <div class="font-settings form">
      <div class="item divider">
        <h3>Font</h3>
      </div>

      <div class="font-settings-content">
      </div>
    </div>
  `;
}
