import './colors.css';

import { html } from 'lighterhtml';

import { compose2 } from 'lib/util.js';
import { Card } from 'components/card/card.js';
import {
  getUniqueColors,
  getDefaultKeywords,
  getLanguageKeywords,
} from 'lib/util.js';
import { mitt } from 'lib/event.js';

export { ColorsView, ColorsTemplate };

function ColorsTemplate({ state, Store }) {
  return {
    state,

    props: {
      usedColors: () => ({
        title: 'Used Colors',
        show: true,
        toolbar: true,
        toggle: false,
      }),

      keywordColors: () => ({
        title: 'Keyword Colors',
        show: true,
        toolbar: true,
        toggle: false,
      }),
    },
  };
}

function ColorsView({ state, Store, props }) {
  const defaultKeywords = getDefaultKeywords(state.theme.refs);

  const languageKeywords = getLanguageKeywords(
    state.theme.languages,
    state.theme.refs,
  );

  const uniqueColors = getUniqueColors(
    Object.values(state.theme.keywords).map(
      ({ backgroundColor, foregroundColor }) => ({
        backgroundColor,
        foregroundColor,
      }),
    ),
  );

  return html`
    <div class="colors-preview form">
      <div class="item divider">
        <h3 class="max-width">Colors</h3>
      </div>

      <div class="colors-preview-content">
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () => html`
            <div class="unique-colors">
              ${uniqueColors.map(UniqueColor)}
            </div>
          `,
        }))(props.usedColors)({ state, Store })}
        ${compose2(Card)(props => ({
          ...props,
          mainContent: () => html`
            <div class="keyword-colors-list">
              <h4>Default</h4>
              ${defaultKeywords.map(k => KeywordColor(state.theme.keywords[k]))}
            </div>

            ${languageKeywords.map(
              l => html`
                <div class="keyword-colors-list">
                  <h4>${l.language}</h4>
                  ${l.keywords.map(k => KeywordColor(state.theme.keywords[k]))}
                </div>
              `,
            )}
          `,
        }))(props.keywordColors)({ state, Store })}
      </div>
    </div>
  `;
}

function KeywordColor(keyword) {
  const color = keyword.foregroundColor;
  const backgroundColor = keyword.backgroundColor;
  const fontWeight = keyword.bold ? 'bold' : 'normal';
  const fontStyle = keyword.italic ? 'italic' : 'normal';
  const underline = keyword.underline ? 'underline ' : '';
  const strikethrough = keyword.lineThrough ? 'line-through' : '';
  const textDecoration = `${underline}${strikethrough}`;

  return html`
    <div
      class="colors-preview"
      style="background: ${backgroundColor}; color: ${color}; font-weight: ${fontWeight}; font-style: ${fontStyle}; text-decoration: ${textDecoration}"
    >
      ${keyword.name}
    </div>
  `;
}

function UniqueColor({ foregroundColor, backgroundColor }) {
  return html`
    <div
      class="unique-color"
      style="background: ${backgroundColor}; color: ${foregroundColor};"
    >
      FG
    </div>
  `;
}
