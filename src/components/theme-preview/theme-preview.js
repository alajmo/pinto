import './theme-preview.css';
import { html } from 'lighterhtml';

import { Select } from 'components/select/select.js';
import { mitt } from 'lib/event.js';

export { ThemePreviewView, ThemePreviewTemplate };

function ThemePreviewTemplate({ state, Store }) {
  return {
    state,

    props: {
      open() {
        Store.dispatch('app', 'toggleFullscreen');
        mitt.emit('RENDER');
      },

      copyToClipboard() {
        navigator.clipboard.writeText(state.theme.templateTxt).then(
          () => {},
          err => {
            console.error('Could not copy to clipboard: ', err);
          },
        );
      },

      language: () => ({
        label: 'Language',
        name: 'language',
        className: 'text',
        options: Object.keys(state.theme.languages),
        selected: state.theme.language,
        onchange: async value => {
          await Store.dispatch('theme', 'loadTemplate', value);
        },
      }),

      selectKeyword(e) {
        const { state } = Store.get();
        const groups = new Set(Object.keys(state.theme.keywords));
        const k = e.target.className;
        const { selectedKeyword } = state.app;

        if (groups.has(k)) {
          const keywordName = getEnabledLinkedKeyword(k, state);

          let selectedKeywords = [];
          if (e.ctrlKey) {
            if (
              selectedKeyword.includes(keywordName) &&
              selectedKeyword.length === 1
            ) {
              return;
            } else if (selectedKeyword.includes(keywordName)) {
              selectedKeywords = selectedKeyword.filter(k => k !== keywordName);
            } else {
              selectedKeywords = selectedKeywords.concat(
                selectedKeyword,
                keywordName,
              );
            }
          } else {
            selectedKeywords = [keywordName];
          }

          Store.dispatch('app', 'selectKeyword', selectedKeywords);
          Store.dispatch('app', 'selectOption', 'keyword');

          mitt.emit('RENDER');
        }
      },
    },
  };
}

function getEnabledLinkedKeyword(k, state) {
  const keywords = state.theme.keywords;
  const links = state.theme.keywordLinks;

  let keyword = state.theme.keywords[k];
  while (!keyword.enabled || !keyword.active) {
    keyword = keywords[links[keyword.name]];

    // This happens for cleared keywords, so we just point them to the Normal keyword.
    if (keyword === undefined) {
      keyword = keywords.Normal;
      break;
    }
  }

  return keyword.name;
}

function ThemePreviewView({ props }) {
  return html.node`
    <div id="theme" class="theme">
      <div class="breadcrumb">
        <div class="left-icons">
          <h3>Preview</h3>
          ${Select(props.language())}
        </div>

        <div class="right-icons">
          <i title="Copy template theme to clipboard for selected editor" class="far fa-copy actionable" onclick="${
            props.copyToClipboard
          }"></i>
          <i title="Show fullscreen preview" class="fas fa-expand-alt actionable" onclick="${
            props.open
          }"></i>
        </div>
      </div>

      <div id="code" class="code" onmousedown="${props.selectKeyword}"></div>
    </div>
  `;
}
