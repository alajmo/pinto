import './editor-settings.css';

import { html } from 'lighterhtml';

import { compose2 } from 'lib/util.js';
import { Select } from 'components/select/select.js';
import { NumberInput } from 'components/number-input/number-input.js';
import { Checkbox } from 'components/checkbox/checkbox.js';
import { mitt } from 'lib/event.js';
import { Card } from 'components/card/card.js';
import { ToggleDisplay } from 'components/keyword-list/keyword-list.js';

export { EditorSettingsView, EditorSettingsTemplate };

function EditorSettingsTemplate({ state, Store }) {
  const languages = [...Object.entries(state.theme.groups)].concat(
    Object.entries(state.theme.languages),
  );

  const hasUncheckedLanguages =
    languages.filter(l => l[1] === false).length > 0;

  return {
    state,

    props: {
      fontSettings: () => ({
        title: 'Font',
        show: true,
        toolbar: true,
        toggle: false,

        fontFamily: () => ({
          label: 'Font Family',
          name: 'fontFamily',
          className: 'filled',
          options: state.app.fontFamilies,
          selected: state.theme.fontSettings.fontFamily,
          toggleOpen: () => {
            Store.dispatch('app', 'toggleEditorSelect', {
              select: 'openFontFamily',
            });
            mitt.emit('RENDER');
          },
          onchange: value => {
            Store.dispatch('theme', 'setFontFamily', value);
            mitt.emit('RENDER');
          },
        }),

        fontSize: () => ({
          value: state.theme.fontSettings.fontSize,
          name: 'fontSize',
          label: 'Font Size',
          onchange: e => {
            Store.dispatch('theme', 'setFontSize', e.target.value);
            mitt.emit('RENDER');
          },
        }),

        lineHeight: () => ({
          value: state.theme.fontSettings.lineHeight,
          name: 'lineHeight',
          label: 'Line Height',
          onchange: e => {
            Store.dispatch('theme', 'setLineHeight', e.target.value);
            mitt.emit('RENDER');
          },
        }),
      }),

      editor: () => ({
        title: 'Editor',
        show: true,
        toolbar: true,
        toggle: false,

        editor: () => ({
          name: 'editor',
          label: 'Editor',
          className: 'filled',
          options: state.app.editors,
          selected: state.theme.editor,
          disabled: true,
          onchange: e => {
            const value = e.target.getAttribute('data-id');
            Store.dispatch('theme', 'setEditor', value);
            mitt.emit('RENDER');
          },
        }),

        editorTheme: () => ({
          label: 'Vim Background',
          name: 'editorTheme',
          className: 'filled',
          options: state.app.editorThemes,
          selected: state.theme.editorTheme,
          onchange: value => {
            Store.dispatch('theme', 'setEditorTheme', value);
            mitt.emit('RENDER');
          },
        }),
      }),

      exportSettings: () => ({
        title: 'Environment Support',
        show: true,
        toolbar: true,

        termCheckbox: () => ({
          label: 'Terminal',
          name: 'term',
          value: state.theme.exportOptions.term,
          onclick: e => {
            Store.dispatch('theme', 'toggleExportOption', 'term');
            mitt.emit('RENDER');
          },
        }),

        guiCheckbox: () => ({
          label: 'GUI',
          name: 'gui',
          value: state.theme.exportOptions.gui,
          onclick: e => {
            Store.dispatch('theme', 'toggleExportOption', 'gui');
            mitt.emit('RENDER');
          },
        }),
      }),

      languageSettings: () => ({
        title: 'Keyword Groups',
        show: true,
        toolbar: true,

        hasUncheckedLanguages,

        toggleSelectAllLanguages() {
          Store.dispatch(
            'theme',
            'toggleLanguage',
            languages.map(language => ({
              groupType: ['misc', 'major', 'minor'].includes(language[0])
                ? 'groups'
                : 'languages',

              language: language[0],
              enabled: hasUncheckedLanguages,
            })),
          );

          Store.dispatch('theme', 'toggleActivateKeywords', {
            keywords: Object.keys(state.theme.keywords),
            value: hasUncheckedLanguages,
          });

          mitt.emit('RENDER');
        },

        languages: languages.map(language => ({
          label: language[0],
          name: language[0],
          value: language[1],
          minimized: state.app.editorSettings.minimizedLanguages[language[0]],

          toggleMinimize: () => {
            Store.dispatch('app', 'toggleMinimizeLanguage', [language[0]]);
            mitt.emit('RENDER');
          },

          keywords: state.theme.refs[language[0]].map(
            k => state.theme.keywords[k],
          ),

          onclick: e => {
            const groupType = ['misc', 'major', 'minor'].includes(language[0])
              ? 'groups'
              : 'languages';

            Store.dispatch('theme', 'toggleLanguage', [
              { groupType, language: e.target.name, enabled: e.target.checked },
            ]);
            Store.dispatch('theme', 'toggleActivateKeywords', {
              keywords: state.theme.refs[language[0]],
              value: e.target.checked,
            });

            mitt.emit('RENDER');
          },

          toggleKeywordActiveStatus: keyword => {
            Store.dispatch('theme', 'toggleActivateKeywords', {
              keywords: [keyword.name],
            });

            const someKeywordActive = state.theme.refs[language[0]].some(
              k => state.theme.keywords[k].active,
            );

            const groupType = ['misc', 'major', 'minor'].includes(language[0])
              ? 'groups'
              : 'languages';
            Store.dispatch('theme', 'toggleLanguage', [
              { groupType, language: language[0], enabled: someKeywordActive },
            ]);

            mitt.emit('RENDER');
          },
        })),
      }),

      palette: () => ({
        title: 'Palette',
        show: true,
        toolbar: true,
        toggle: false,

        xtermColors: () => ({
          label: 'xterm 256 color palette',
          name: 'xtermColors',
          value: state.palette.palettes.some(p => p.type === 'xterm'),
          onclick: e => {
            Store.dispatch('palette', 'toggleXtermColors', {
              showXtermColors: e.target.checked,
            });
            mitt.emit('RENDER');
          },
        }),
      }),
    },
  };
}

function EditorSettingsView({ state, Store, props }) {
  return html`
    <div class="editor-settings form">
      <div class="item divider">
        <h3 class="max-width">Theme Settings</h3>
      </div>

      <div class="editor-settings-content">
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () => html`
            ${Select(props.editor())} ${Select(props.editorTheme())}
          `,
        }))(props.editor)({ state, Store })}
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () =>
            html`
              ${Select(props.fontFamily())} ${NumberInput(props.fontSize())}
              ${NumberInput(props.lineHeight())}
            `,
        }))(props.fontSettings)({ state, Store })}
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () => html`
            <p class="label-text">
              Select if you want the xterm 256 color palette displayed.
            </p>

            ${Checkbox(props.xtermColors())}
          `,
        }))(props.palette)({ state, Store })}
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () => html`
            <p class="label-text">
              Select one or more:
            </p>

            ${Checkbox(props.termCheckbox())} ${Checkbox(props.guiCheckbox())}
          `,
        }))(props.exportSettings)({ state, Store })}
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () => html`
            <p class="label-text">
              Choose which languages/keywords you want to modify:
            </p>

            <button class="text" onclick="${props.toggleSelectAllLanguages}">
              ${props.hasUncheckedLanguages ? 'Enable all' : 'Disable all'}
            </button>

            ${props.languages.map(
              language => html`
                <div class="language-status">
                  <div class="language-status--title">
                    ${language} ${Checkbox(language)}
                    ${ToggleDisplay({
                      minimized: language.minimized,
                      toggle: language.toggleMinimize,
                    })}
                  </div>

                  ${!language.minimized
                    ? language.keywords.map(
                        k => html`
                          <div class="language-status--keyword">
                            ${Checkbox({
                              name: k.name,
                              label: k.name,
                              value: k.active,
                              onclick: () =>
                                language.toggleKeywordActiveStatus(k),
                            })}
                          </div>
                        `,
                      )
                    : null}
                </div>
              `,
            )}
          `,
        }))(props.languageSettings)({ state, Store })}
      </div>
    </div>
  `;
}
