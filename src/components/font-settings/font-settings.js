import { html } from 'lighterhtml';
import { Select } from 'components/select/select.js';
import { NumberInput } from 'components/number-input/number-input.js';
import { mitt } from 'lib/event.js';

export { FontSettings };

function FontSettings(state, Store) {
  const components = {
    fontFamily: {
      label: 'Font Family',
      name: 'fontFamily',
      options: state.app.fontFamilies,
      selected: state.keyword.fontSettings.fontFamily,
      onchange: e => {
        Store.dispatch(
          'keyword',
          'setFontFamily',
          state.app.fontFamilies[e.target.value],
        );
        mitt.emit('RENDER');
      },
    },

    fontSize: {
      value: state.keyword.fontSettings.fontSize,
      name: 'fontSize',
      label: 'Font Size',
      onchange: e => {
        Store.dispatch('keyword', 'setFontSize', e.target.value);
        mitt.emit('RENDER');
      },
    },

    lineHeight: {
      value: state.keyword.fontSettings.lineHeight,
      name: 'lineHeight',
      label: 'Line Height',
      onchange: e => {
        Store.dispatch('keyword', 'setLineHeight', e.target.value);
        mitt.emit('RENDER');
      },
    },
  };

  return html`
    <div class="keyword-form">
      <h3>Font Settings</h3>

      <div class="divider--medium"></div>

      ${Select(components.fontFamily)} ${NumberInput(components.fontSize)}
      ${NumberInput(components.lineHeight)}
    </div>
  `;
}
