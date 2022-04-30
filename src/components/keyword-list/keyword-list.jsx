import { splitProps } from 'solid-js';

import "./keyword-list.css";

import { cssPreviewKeyword } from "lib/util.js";
export { KeywordList, ToggleEnable, ToggleSelectAll, ToggleDisplay };

function KeywordList(props) {
  const [local] = splitProps(props, [
    'title',
    'showEnableKeywordToggle',
    'keywordData',
    'keywords',
    'allEnabled',
    'allSelected',
    'minimized',
    'selectedKeyword',
    'descriptions',

    'toggleEnableKeyword',
    'toggleEnableAll',
    'toggleSelectAll',
    'toggleDisplayAll',

    'copyFromKeywordToKeyword',
    'selectKeyword',
  ]);

  const activeKeywords = keywords.filter((k) => local.keywordData[k].active);

  return (
    <nav class="keyword-list">
      <div class="keyword-list-header">
        <div
          class="keyword-list-title"
          onclick={local.toggleDisplayAll}
          data-selected={local.selectedKeyword.some((k) => activeKeywords.includes(k))}
        >
          {local.title}
        </div>

        <div class="keyword-buttons">
          {local.allEnabled !== undefined ? (
            <ToggleEnable enabled={local.allEnabled} toggle={local.toggleEnableAll} />
          ) : null}
          <ToggleSelectAll allSelected={local.allSelected} toggle={local.toggleSelectAll} />
          <ToggleDisplay minimized={local.minimized} toggle={local.toggleDisplayAll} />
        </div>
      </div>

      {!local.minimized ? (
        <ol class="items" onclick={selectKeyword}>
          {activeKeywords.map((keyword) => (
            <li data-selected={local.selectedKeyword.includes(keyword)}>
              <div
                title={local.descriptions[keyword]}
                class="keyword-preview"
                data-name={keyword}
                style={cssPreviewKeyword(
                  local.keywordData[keyword],
                  local.keywordData.Normal
                )}
              >
                {keyword}
              </div>

              <div class="keyword-enable-status">
                <i
                  title="Copy attributes from {keyword} to selected keywords"
                  onclick={() => local.copyFromKeywordToKeyword(keyword)}
                  class="fas fa-copy actionable"
                ></i>

                {local.showEnableKeywordToggle ? (
                  <ToggleEnable
                    enabled={local.keywordData[keyword].enabled}
                    toggle={() => local.toggleEnableKeyword(keyword)}
                  />
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      ) : null}
    </nav>
  );
}

function ToggleEnable(props) {
  return props.enabled ? (
    <i
      title="Enable language keywords"
      onclick={props.toggle}
      class="fas fa-eye actionable"
    ></i>
  ) : (
    <i
      title="Disable language keywords"
      onclick={props.toggle}
      class="fas fa-eye-slash actionable"
    ></i>
  );
}

function ToggleSelectAll(props) {
  return props.allSelected ? (
    <i
      title="Unselect all"
      onclick={props.toggle}
      class="far fa-check-square actionable"
    ></i>
  ) : (
    <i title="Select all" onclick={toggle} class="far fa-square actionable"></i>
  );
}

function ToggleDisplay(props) {
  return props.minimized ? (
    <i
      title="Maximize"
      onclick={props.toggle}
      class="fas fa-window-maximize actionable"
    ></i>
  ) : (
    <i
      title="Minimize"
      onclick={props.toggle}
      class="fas fa-window-minimize actionable"
    ></i>
  );
}
