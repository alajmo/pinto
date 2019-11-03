import { Enum } from 'lib/enum.js';
import { KeywordModel } from 'state/models.js';

export { KeywordState };

function KeywordState({ fontSettings, keywords }) {
  let state = {
    fontSettings,
    keywords,
  };

  const events = Enum(
    'SET_FONT_FAMILY',
    'SET_FONT_SIZE',
    'SET_LINE_HEIGHT',
    'SET_FOREGROUND_COLOR',
    'SET_BACKGROUND_COLOR',
    'TOGGLE_TEXT_DECORATION',
  );

  const reducers = {
    loadKeywords(state, data) {
      const newState = { ...state };
      newState.keyword.fontSettings = data.fontSettings;
      newState.keyword.keywords = data.keywords;

      return {
        trigger: [],
        state: { ...newState },
      };
    },

    setFontFamily(state, fontFamilyIndex) {
      const newState = { ...state };
      newState.keyword.fontSettings.fontFamily = fontFamilyIndex;

      return {
        trigger: [events.SET_FONT_FAMILY],
        state: { ...newState },
      };
    },

    setFontSize(state, fontSize) {
      const newState = { ...state };
      newState.keyword.fontSettings.fontSize = fontSize;

      return {
        trigger: [events.SET_FONT_SIZE],
        state: { ...newState },
      };
    },

    setLineHeight(state, lineHeight) {
      const newState = { ...state };
      newState.keyword.fontSettings.lineHeight = lineHeight;

      return {
        trigger: [events.SET_LINE_HEIGHT],
        state: { ...newState },
      };
    },

    setForegroundColor(state, { keyword, color, triggeredFromInput }) {
      const newState = { ...state };
      newState.keyword.keywords[keyword].foregroundColor = color;

      return {
        trigger: [
          {
            event: events.SET_FOREGROUND_COLOR,
            payload: { triggeredFromInput },
          },
        ],
        state: { ...newState },
      };
    },

    setBackgroundColor(state, { keyword, color, triggeredFromInput }) {
      const newState = { ...state };
      newState.keyword.keywords[keyword].backgroundColor = color;

      return {
        trigger: [
          {
            event: events.SET_BACKGROUND_COLOR,
            payload: { triggeredFromInput },
          },
        ],
        state: { ...newState },
      };
    },

    toggleTextDecoration(state, { keyword, attr, value }) {
      const newState = { ...state };
      newState.keyword.keywords[keyword][attr] = value;

      return {
        trigger: [events.TOGGLE_TEXT_DECORATION],
        state: { ...newState },
      };
    },

    selectColorInput(state, { keyword, input, value }) {
      const newState = { ...state };
      return {
        trigger: [],
        state: { ...newState },
      };
    },
  };

  return {
    state,
    events,
    reducers,
  };
}
