import { html } from 'lighterhtml';

export default TemplateRenderer;

function TemplateRenderer() {
  let element;
  let themeElement;
  let codeElement;
  let elements = {};
  let selectedKeyword;
  let fontFamily;
  let fontSize;
  let lineHeight;
  let backgroundColor;
  let keywords;

  function step() {
    // Update global settings
    themeElement.style.background = backgroundColor;
    codeElement.style.background = backgroundColor;
    element.style.background = backgroundColor;
    element.style.fontFamily = fontFamily;
    element.style.fontSize = `${fontSize}px`;
    element.style.lineHeight = `${lineHeight}px`;

    // Update indiviual elements
    selectedKeyword.forEach(k => {
      updateTemplate(keywords[k], keywords.Normal);
    });
  }

  // allKeywords is used when we do initial template load.
  function render(state, { allKeywords = false } = {}) {
    fontFamily = state.theme.fontSettings.fontFamily;
    fontSize = state.theme.fontSettings.fontSize;
    lineHeight = state.theme.fontSettings.lineHeight;
    backgroundColor = state.theme.keywords.Normal.backgroundColor;
    keywords = state.theme.keywords;
    selectedKeyword = allKeywords
      ? Object.keys(keywords)
      : state.app.selectedKeyword;

    requestAnimationFrame(step);
  }

  function updateTemplate(keyword, normalKeyword) {
    for (let e of elements[keyword.name]) {
      const foregroundColor = keyword.foregroundColor === null ? normalKeyword.foregroundColor : keyword.foregroundColor;
      const backgroundColor = keyword.backgroundColor === null ? normalKeyword.backgroundColor : keyword.backgroundColor;

      e.style.color = foregroundColor;
      e.style.backgroundColor = backgroundColor;
      e.style.fontWeight = keyword.bold ? 'bold' : 'normal';
      e.style.fontStyle = keyword.italic ? 'italic' : 'normal';
      const underline = keyword.underline ? 'underline ' : '';
      const strikethrough = keyword.lineThrough ? 'line-through' : '';
      e.style.textDecoration = `${underline}${strikethrough}`;
    }
  }

  /*
   * Change the data-active-keyword attribute of each html element to
   * the most specific keyword that is active.
   */
  function updateKeywordElement(state) {
    const { keywordLinks } = state.theme;
    const ks = Object.entries(keywords);

    elements = {};
    for (let [name, keyword] of ks) {
      if (elements[name] === undefined) {
        elements[name] = [];
      }

      const keywordElements = element.getElementsByClassName(name);

      let k = keyword;

      if (k.enabled) {
        elements[name] = keywordElements;
        continue;
      }

      while (!k.enabled || !k.active) {
        k = keywords[keywordLinks[k.name]];

        // This happens for cleared keywords, so we just point them to the Normal keyword.
        if (k === undefined) {
          k = keywords.Normal;
          break;
        }
      }

      if (elements[k.name] === undefined) {
        elements[k.name] = [];
      }

      elements[k.name] = [...elements[k.name], ...keywordElements];
      elements[name] = [];
    }
  }

  function load(elementId, state) {
    themeElement = html.node`<div id="${elementId}" class="language-preview"></div>`;
    themeElement.innerHTML = state.theme.template;

    codeElement = document.getElementById('code');
    codeElement.innerHTML = '';
    codeElement.appendChild(themeElement);
    element = document.getElementById(elementId);
    keywords = state.theme.keywords;

    updateKeywordElement(state);
  }

  return { render, updateKeywordElement, load };
}
