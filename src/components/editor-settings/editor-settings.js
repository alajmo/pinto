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
  const groups = Object.entries(state.theme.groups);
  const hasUncheckedGroups = groups.filter(l => l[1] === false).length > 0;

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

      groupSettings: () => ({
        title: 'Keyword Groups',
        show: true,
        toolbar: true,

        hasUncheckedGroups,

        toggleSelectAllGroups() {
          Store.dispatch(
            'theme',
            'toggleGroup',
            groups.map(group => ({
              group: group[0],
              enabled: hasUncheckedGroups,
            })),
          );

          Store.dispatch('theme', 'toggleActivateKeywords', {
            keywords: Object.keys(state.theme.keywords),
            value: hasUncheckedGroups,
          });

          Store.dispatch('theme', 'toggleEnableKeywords', {
            keywords: Object.keys(state.theme.keywords),
            value: hasUncheckedGroups,
          });

          mitt.emit('RENDER');
        },

        addGroup: {
          text: 'Add',

          onclick() {
            Store.dispatch('app', 'openModal', 'manage-group');
            mitt.emit('RENDER');
          },
        },

        editGroup(group) {
          Store.dispatch('app', 'setManageGroupData', group);
          Store.dispatch('app', 'openModal', 'manage-group');
          mitt.emit('RENDER');
        },

        deleteGroup(group) {
          if (confirm(`Are you sure you want to delete ${group.name}?`)) {
            const containsNormalKeyword = state.theme.groupKeywords[
              group.name
            ].includes('Normal');

            if (containsNormalKeyword) {
              alert(
                'This group contains the "Normal" keyword and cannot be deleted.',
              );
              return;
            }

            Store.dispatch('theme', 'deleteGroup', group.name);
            mitt.emit('MODIFY_GROUP');
            mitt.emit('RENDER');
          }
        },

        groups: groups.map(group => ({
          label: group[0],
          name: group[0],
          value: group[1],
          title: `${group[1] ? 'Deactivate' : 'Activate'} ${group[0]}`,
          minimized: state.app.editorSettings.minimizedGroups[group[0]],

          toggleMinimize: () => {
            Store.dispatch('app', 'toggleMinimizeGroup', [group[0]]);
            mitt.emit('RENDER');
          },

          keywords: state.theme.groupKeywords[group[0]].map(
            k => state.theme.keywords[k],
          ),

          onclick: e => {
            const checked = e.target.checked;

            Store.dispatch('theme', 'toggleGroup', [
              { group: e.target.name, enabled: checked },
            ]);
            Store.dispatch('theme', 'toggleActivateKeywords', {
              keywords: state.theme.groupKeywords[group[0]],
              value: checked,
            });

            Store.dispatch('theme', 'toggleEnableKeywords', {
              keywords: state.theme.groupKeywords[group[0]],
              value: checked,
            });

            mitt.emit('RENDER');
          },

          toggleKeywordActiveStatus: keyword => {
            Store.dispatch('theme', 'toggleEnableKeywords', {
              keywords: [keyword.name],
            });

            Store.dispatch('theme', 'toggleActivateKeywords', {
              keywords: [keyword.name],
            });

            const someKeywordActive = state.theme.groupKeywords[group[0]].some(
              k => state.theme.keywords[k].active,
            );

            Store.dispatch('theme', 'toggleGroup', [
              { group: group[0], enabled: someKeywordActive },
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
          title: `${
            state.palette.palettes.some(p => p.type === 'xterm')
              ? 'Hide'
              : 'Show'
          } xterm palette`,
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

          topLeftContet: () => html`
            <i
              title="Add keyword group"
              onclick="${props.addGroup.onclick}"
              class="fas fa-plus actionable"
            ></i>
          `,

          mainContent: () => html`
            <p class="label-text">
              Choose which keywords you want to use:
            </p>

            <button class="text" onclick="${props.toggleSelectAllGroups}">
              ${props.hasUncheckedGroups ? 'Enable all' : 'Disable all'}
            </button>

            ${props.groups.map(
              group => html`
                <div class="language-status">
                  <div class="language-status--title">
                    ${Checkbox(group)}

                    <div class="right-buttons">
                      <i
                        title="Edit keywords"
                        onclick="${() => props.editGroup(group)}"
                        class="fas fa-edit actionable"
                      ></i>

                      <i
                        title="Delete group"
                        onclick="${() => props.deleteGroup(group)}"
                        class="fas fa-trash actionable"
                      ></i>

                      ${ToggleDisplay({
                        minimized: group.minimized,
                        toggle: group.toggleMinimize,
                      })}
                    </div>
                  </div>

                  ${!group.minimized
                    ? group.keywords.map(
                        k => html`
                          <div class="language-status--keyword">
                            ${Checkbox({
                              name: k.name,
                              title: `${k.active ? 'Deactivate' : 'Activate'} ${
                                k.name
                              }`,
                              label: k.name,
                              value: k.active,
                              onclick: () => group.toggleKeywordActiveStatus(k),
                            })}
                          </div>
                        `,
                      )
                    : null}
                </div>
              `,
            )}
          `,
        }))(props.groupSettings)({ state, Store })}
      </div>
    </div>
  `;
}
