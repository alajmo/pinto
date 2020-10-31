import './theme-export.css';
import { html } from 'lighterhtml';
import { keywordToVim } from 'lib/json-to-editor.js';
import { mitt } from 'lib/event.js';

export { ThemeExportView, ThemeExportTemplate };

function ThemeExportTemplate({ state, Store }) {
  return {
    state,

    props: {
      downloadJson: () => {
        Store.dispatch('theme', 'exportTheme', state.theme.id);
        mitt.emit('RENDER');
      },

      downloadConfig: () => {
        Store.dispatch('theme', 'downloadThemeConfig');
        mitt.emit('RENDER');
      },

      exportCode: keywordToVim(exportCode(state)),

      copyToClipboard() {
        const text = keywordToVim(exportCode(state));

        navigator.clipboard.writeText(text).then(
          () => {},
          err => {
            console.error('Could not copy to clipboard: ', err);
          },
        );
      },
    },
  };
}

function exportCode(state) {
  const {
    name,
    editorTheme,
    keywords,
    languages,
    refs,
    exportOptions,
  } = state.theme;

  return {
    name,
    editorTheme: editorTheme,
    languages: Object.entries(languages)
      .filter(language => language[1])
      .map(language => language[0]),
    refs: refs,
    keywordGroups: [
      {
        title: 'Default Keywords',
        keywords: refs.misc.filter(k => keywords[k].active),
        display: true,
      },
      {
        title: 'Major Keywords',
        keywords: refs.major.filter(k => keywords[k].active),
        display: true,
      },
      {
        title: 'Minor Keywords',
        keywords: refs.minor.filter(k => keywords[k].active),
        display: true,
      },

      ...Object.entries(languages).map(l => ({
        title: l[0],
        keywords: refs[l[0]].filter(k => keywords[k].active),
        display: l[1],
      })),
    ],
    keywords,
    exportOptions,
  };
}

function ThemeExportView({ props }) {
  return html.node`
    <div id="theme-export" class="theme-export">
      <div class="breadcrumb">
        <div class="left-icons">
          <h3>Preview</h3>
        </div>

        <div class="right-icons">

          <button
            class="text small secondary"
            onclick="${props.downloadConfig}"
          >
            Download Config
          </button>

          <button class="text small secondary" onclick="${props.downloadJson}">
            Download JSON
          </button>

          <button class="text small secondary" onclick="${props.copyToClipboard}">
            Copy to Clipboard
          </button>
        </div>
      </div>

      <div class="export-code">
        <div class="export-code-content">
          ${props.exportCode}
        </div>
      </div>
    </div>
  `;
}
