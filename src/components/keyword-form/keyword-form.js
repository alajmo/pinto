import { html } from 'lighterhtml';

import './keyword-form.css';

import { compose2 } from 'lib/util.js';
import { mitt } from 'lib/event.js';

import {
  ColorPickerView,
  ColorPickerTemplate,
} from 'components/color-picker/color-picker.js';
import { Palettes } from 'components/palettes/palettes.js';
import { Card } from 'components/card/card.js';

export { KeywordFormView, KeywordFormTemplate };

function KeywordFormTemplate({ state, Store }) {
  let keyword;
  const selectedKeyword = state.app.selectedKeyword;

  if (selectedKeyword.length === 1) {
    keyword = state.theme.keywords[selectedKeyword[0]];
  } else {
    keyword = state.app.defaultKeyword;
  }

  const selectKeyword = () => {
    const linkedKeyword = state.theme.keywordLinks[keyword.name];
    Store.dispatch('app', 'selectKeyword', [linkedKeyword]);
    mitt.emit('RENDER');
  };

  return {
    state,

    Store,

    props: {
      title:
        selectedKeyword.length === 1
          ? state.theme.keywordLinks[keyword.name]
            ? html`<pre>${keyword.name}  <i class="fas fa-arrow-right" title="${keyword.name} links to ${state.theme.keywordLinks[keyword.name]}"></i>  <span class="actionable" onclick="${selectKeyword}" title="Go to keyword">${state
                .theme.keywordLinks[
                keyword.name
              ]}</span> <i title="Copy settings from ${state.theme.keywordLinks[keyword.name]}" class="fas fa-clone actionable" onclick=${() => {
                Store.dispatch('theme', 'copyFromKeywordToKeyword', {
                  keywordToCopyFrom: state.theme.keywordLinks[keyword.name],
                  keywordToCopyTo: [keyword.name],
                });
                mitt.emit('RENDER');
              }}></i></pre>`
            : keyword.name
          : 'Multiple Selected',

      palettes: () => {
        return {
          title: 'Palettes',
          show: state.app.showPalettes,
          toolbar: true,
          className: 'card-overflow',

          toggle: () => {
            Store.dispatch('app', 'toggleComponent', 'showPalettes');
            mitt.emit('RENDER');
          },

          addPalette: {
            text: 'Add',

            onclick(e) {
              e.preventDefault();
              e.stopPropagation();

              Store.dispatch('palette', 'addPalette');

              mitt.emit('RENDER');
            },
          },

          palettes: () => ({ state, Store }),
        };
      },

      colorPicker() {
        return {
          show: true,
          toolbar: false,

          colorPicker: () => ColorPickerTemplate({ state, Store }),
        };
      },
    },
  };
}

function KeywordFormView({ state, Store, props }) {
  return html`
    <div class="keyword-form form">
      <div class="item divider">
        <h3 class="max-width">${props.title}</h3>
      </div>

      ${compose2(Card)(props => ({
        ...props,
        mainContent: () => html`${ColorPickerView(props.colorPicker())}`,
      }))(props.colorPicker)({ state, Store })}

      ${compose2(Card)(props => ({
        ...props,
        topLeftContet: () => html`
          <i onclick="${props.addPalette.onclick}" class="fas fa-plus actionable"></i>
        `,
        mainContent: () => html` ${Palettes(props.palettes())} `,
      }))(props.palettes)({ state, Store })}

    </div>
  `;
}
