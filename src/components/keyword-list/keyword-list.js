import './keyword-list.css';
import { html } from 'lighterhtml';

import { cssPreviewKeyword } from 'lib/util.js';
export { KeywordList, ToggleEnable, ToggleSelectAll, ToggleDisplay };

function KeywordList({
  props: {
    title,
    showEnableKeywordToggle,
    keywordData,
    keywords: allKeywords,
    allEnabled,
    allSelected,
    minimized,
    selectedKeyword,

    toggleEnableKeyword,
    toggleEnableAll,
    toggleSelectAll,
    toggleDisplayAll,

    selectKeyword,
  },
}) {
  const keywords = allKeywords.filter(k => keywordData[k].active);
  return html`
    <nav class="keyword-list">
      <div class="keyword-list-header">
        <div
          class="keyword-list-title"
          onclick="${toggleDisplayAll}"
          data-selected="${selectedKeyword.some(k => keywords.includes(k))}"
        >
          ${title}
        </div>

        <div class="keyword-buttons">
          ${allEnabled !== undefined
            ? ToggleEnable({
                enabled: allEnabled,
                toggle: toggleEnableAll,
              })
            : null}
          ${ToggleSelectAll({
            allSelected,
            toggle: toggleSelectAll,
          })}
          ${ToggleDisplay({
            minimized,
            toggle: toggleDisplayAll,
          })}
        </div>
      </div>

      ${!minimized
        ? html`
            <ol class="items" onclick="${selectKeyword}">
              ${keywords.map(
                keyword => html`
                  <li data-selected="${selectedKeyword.includes(keyword)}">
                    <div
                      class="keyword-preview"
                      data-name="${keyword}"
                      style="${cssPreviewKeyword(keywordData[keyword], keywordData.Normal)}"
                    >
                      ${keyword}
                    </div>

                    <div class="keyword-enable-status">
                      ${showEnableKeywordToggle
                        ? ToggleEnable({
                            enabled: keywordData[keyword].enabled,
                            toggle: () => toggleEnableKeyword(keyword),
                          })
                        : null}
                    </div>
                  </li>
                `,
              )}
            </ol>
          `
        : html``}
    </nav>
  `;
}

function ToggleEnable({ enabled, toggle }) {
  return html`
    ${enabled
      ? html`
          <i
            title="Enable language keywords"
            onclick="${toggle}"
            class="fas fa-toggle-on actionable"
          ></i>
        `
      : html`
          <i
            title="Disable language keywords"
            onclick="${toggle}"
            class="fas fa-toggle-off actionable"
          ></i>
        `}
  `;
}

function ToggleSelectAll({ allSelected, toggle }) {
  return html`
    ${allSelected
      ? html`
          <i
            title="Unselect all"
            onclick="${toggle}"
            class="far fa-check-square actionable"
          ></i>
        `
      : html`
          <i
            title="Select all"
            onclick="${toggle}"
            class="far fa-square actionable"
          ></i>
        `}
  `;
}

function ToggleDisplay({ minimized, toggle }) {
  return html`
    ${minimized
      ? html`
          <i
            title="Maximize"
            onclick="${toggle}"
            class="fas fa-window-maximize actionable"
          ></i>
        `
      : html`
          <i
            title="Minimize"
            onclick="${toggle}"
            class="fas fa-window-minimize actionable"
          ></i>
        `}
  `;
}
