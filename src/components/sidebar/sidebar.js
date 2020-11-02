import './sidebar.css';
import { html } from 'lighterhtml';
import { mitt } from 'lib/event.js';
import { ToggleSection } from 'components/toggle-section/toggle-section.js';
import {
  KeywordList,
  ToggleEnable,
  ToggleSelectAll,
  ToggleDisplay,
} from 'components/keyword-list/keyword-list.js';

export { SidebarView, SidebarTemplate };

function SidebarTemplate({ state, Store }) {
  const { selectedOption, selectedKeyword, showSidebar } = state.app;
  const enabledKeywordGroups = Object.entries(state.theme.groups)
    .filter(l => l[1])
    .map(l => l[0]);

  const keywords = enabledKeywordGroups.flatMap(
    g => state.theme.groupKeywords[g],
  );

  const groups = Object.entries(state.theme.groups)
    .filter(group => group[1])
    .map(group => group[0]);

  const selectedKeywords = state.app.selectedKeyword;

  const activeKeywords = Object.entries(state.theme.keywords)
    .filter(k => k[1].active)
    .map(k => k[1]);

  const allKeywordsSelected = activeKeywords.length === selectedKeywords.length;
  const allKeywordsEnabled = activeKeywords.every(k => k.enabled);

  const groupSelectedKeywords = Object.keys(state.theme.groups).reduce(
    (prev, curr) => ({
      [curr]: state.theme.groupKeywords[curr].every(k =>
        selectedKeywords.includes(k),
      ),
      ...prev,
    }),
    {},
  );

  return {
    state,

    props: {
      selectedOption,
      selectedKeyword,
      showSidebar,

      selectedLanguage: state.theme.language,
      keywordData: state.theme.keywords,
      keywords,

      allKeywordsMinimized: state.app.sidebar.allKeywordsMinimized,
      minimizedGroups: state.app.sidebar.minimizedGroups,

      groupSelectedKeywords,
      allKeywordsSelected,
      allKeywordsEnabled,

      // Keyword References
      groupKeywords: state.theme.groupKeywords,

      groups,
      toggleSidebar() {
        Store.dispatch('app', 'toggleSidebar');
        mitt.emit('RENDER');
      },

      toggleEnableAllKeywords() {
        Store.dispatch('theme', 'toggleEnableKeywords', {
          keywords: activeKeywords.map(k => k.name),
          value: !allKeywordsEnabled,
        });
        mitt.emit('KEYWORD_ENABLE_TOGGLE');
        mitt.emit('RENDER', { allKeywords: true });
      },

      toggleEnableKeyword(keywords, value) {
        Store.dispatch('theme', 'toggleEnableKeywords', { keywords, value });
        mitt.emit('KEYWORD_ENABLE_TOGGLE');
        mitt.emit('RENDER', { allKeywords: true });
      },

      toggleSelectAllKeywords() {
        const selectedKeywords = state.app.selectedKeyword;

        if (allKeywordsSelected) {
          Store.dispatch('app', 'selectKeyword', [selectedKeywords[0]]);
        } else {
          // After selecting all, make sure the initial keyword is in the front of the selected keyword,
          // because after unselecting all, we want it to be highlighted, and not some randon keyword.
          Store.dispatch(
            'app',
            'selectKeyword',
            activeKeywords.map(k => k.name),
          );
        }

        mitt.emit('RENDER');
      },

      toggleSelectAllGroupKeywords(groups) {
        const groupKeywords = state.theme.groupKeywords[groups[0]];
        const selectedKeywords = state.app.selectedKeyword;

        let keywords;
        if (groupSelectedKeywords[groups[0]]) {
          keywords = selectedKeywords.filter(k => !groupKeywords.includes(k));
        } else {
          keywords = selectedKeywords.filter(k => !groupKeywords.includes(k));
          keywords = keywords.concat(groupKeywords);
        }

        // If the selection is empty, add first keyword from the group
        if (keywords.length === 0) {
          keywords = [selectedKeywords[0]];
        }

        Store.dispatch('app', 'selectKeyword', keywords);
        mitt.emit('RENDER');
      },

      toggleMinimizeAllKeywords() {
        Store.dispatch('app', 'toggleMinimizeAllKeywords');
        mitt.emit('RENDER');
      },

      toggleMinimizeKeywords(groups) {
        Store.dispatch('app', 'toggleMinimizeKeywords', groups);
        mitt.emit('RENDER');
      },

      selectKeyword(group, e) {
        const clickedKeyword = e.target.getAttribute('data-name');
        if (clickedKeyword === null) {
          return;
        }

        let selectedKeywords = [];
        if (e.ctrlKey) {
          if (
            selectedKeyword.includes(clickedKeyword) &&
            selectedKeyword.length === 1
          ) {
            return;
          } else if (selectedKeyword.includes(clickedKeyword)) {
            selectedKeywords = selectedKeyword.filter(
              k => k !== clickedKeyword,
            );
          } else {
            selectedKeywords = selectedKeywords.concat(
              selectedKeyword,
              clickedKeyword,
            );
          }
        } else {
          selectedKeywords = [clickedKeyword];
        }

        Store.dispatch('app', 'selectKeyword', selectedKeywords);
        Store.dispatch('app', 'selectOption', 'keyword');

        if (state.theme.languages.includes(group)) {
          Store.dispatch('theme', 'loadTemplate', group);
        }

        mitt.emit('RENDER');
      },

      copyFromKeywordToKeyword(keyword) {
        Store.dispatch('theme', 'copyFromKeywordToKeyword', {
          keywordToCopyFrom: keyword,
          keywordToCopyTo: selectedKeywords,
        });

        mitt.emit('RENDER');
      },

      selectSettings() {
        Store.dispatch('app', 'selectOption', 'settings');
        mitt.emit('RENDER');
      },

      selectPalette() {
        Store.dispatch('app', 'selectOption', 'palette');
        mitt.emit('RENDER');
      },

      selectColors() {
        Store.dispatch('app', 'selectOption', 'colors');
        mitt.emit('RENDER');
      },

      selectExport() {
        Store.dispatch('app', 'selectOption', 'export');
        mitt.emit('RENDER');
      },
    },
  };
}

function SidebarView({ Store, state, props }) {
  return html`
    <div class="sidebar">
      <div class="sidebar--closed" data-display-sidebar=${props.showSidebar}>
        <div class="toggle-sidebar-display">
          ${ToggleSection({
            show: props.showSidebar,
            toggle: props.toggleSidebar,
          })}
        </div>
      </div>

      <div class="sidebar--opened" data-display-sidebar=${props.showSidebar}>
        <div class="toggle-sidebar-display">
          ${ToggleSection({
            show: props.showSidebar,
            toggle: props.toggleSidebar,
          })}
        </div>

        <div class="header divider">
          <h3>Options</h3>
        </div>

        <ol class="list">
          <li
            title="Go to settings (Shift + S)"
            onclick="${props.selectSettings}"
            data-name="settings"
            data-selected="${props.selectedOption === 'settings'}"
          >
            Settings
          </li>

          <li
            title="Go to palette editor (Shift + P)"
            onclick="${props.selectPalette}"
            data-name="palette"
            data-selected="${props.selectedOption === 'palette'}"
          >
            Palette
          </li>
        </ol>

        <div class="header divider">
          <h3>Keywords</h3>

          <div class="keyword-buttons">
            ${ToggleEnable({
              enabled: props.allKeywordsEnabled,
              toggle: props.toggleEnableAllKeywords,
            })}
            ${ToggleSelectAll({
              allSelected: props.allKeywordsSelected,
              toggle: props.toggleSelectAllKeywords,
            })}
            ${ToggleDisplay({
              minimized: props.allKeywordsMinimized,
              toggle: props.toggleMinimizeAllKeywords,
            })}
          </div>
        </div>

        ${props.groups.map(group =>
          KeywordList({
            Store,
            props: {
              title: group,
              showEnableKeywordToggle: true,
              allEnabled: props.groupKeywords[group].every(
                k => props.keywordData[k].enabled,
              ),
              allSelected: props.groupSelectedKeywords[group],
              minimized: props.minimizedGroups[group],
              keywordData: props.keywordData,
              keywords: props.groupKeywords[group],
              selectedKeyword: props.selectedKeyword,
              selectKeyword: e => props.selectKeyword(group, e),
              descriptions: state.theme.descriptions,

              copyFromKeywordToKeyword: props.copyFromKeywordToKeyword,

              toggleEnableKeyword: keyword => {
                props.toggleEnableKeyword([keyword]);
              },
              toggleEnableAll: () => {
                const allEnabled = props.groupKeywords[group].every(
                  k => props.keywordData[k].enabled,
                );
                props.toggleEnableKeyword(
                  props.groupKeywords[group],
                  !allEnabled,
                );
              },
              toggleSelectAll: () => {
                props.toggleSelectAllGroupKeywords([group]);
              },
              toggleDisplayAll: () => {
                props.toggleMinimizeKeywords([group]);
              },
            },
          }),
        )}
      </div>
    </div>
  `;
}
