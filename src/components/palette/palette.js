import { html } from 'lighterhtml';

import './palette.css';
import { mitt } from 'lib/event.js';
import GrowInput from 'components/grow-input/grow-input.jsx';

export { PaletteView, PaletteTemplate };

function PaletteTemplate({ palette, Store }) {
  return {
    props: {
      name: {
        value: palette.name,
        readonly: palette.readonly,

        onblur() {
          mitt.emit('RENDER');
        },
      },

      readonly: palette.readonly,

      selectedColor: palette.selectedColor,

      colors: palette.colors,

      currentMode: palette.currentMode,
      modes: palette.modes,

      removePalette(e) {
        e.preventDefault();
        e.stopPropagation();

        const state = Store.getState();

        const yes = confirm('Are you sure you want to delete the palette?');
        if (yes) {
          if (state.palette.palettes[palette.i].xtermColors) {
            Store.dispatch('palette', 'toggleXtermColors', {
              showXtermColors: false,
            });
          }

          Store.dispatch('palette', 'removePalette', palette.i);

          mitt.emit('RENDER');
        }
      },

      clickPaletteColor(e) {
        e.preventDefault();
        e.stopPropagation();

        const state = Store.getState();

        if (!e.target.getAttribute('data-index')) {
          Store.dispatch('palette', 'unSelectColor', [palette.i], false);
          Store.dispatch('palette', 'setNormalMode', [palette.i]);
          return;
        }

        if (
          state.palette.palettes[palette.i].currentMode === palette.modes.remove
        ) {
          // Remove Mode
          Store.dispatch('palette', 'removeColor', {
            i: [palette.i],
            index: Number(e.target.getAttribute('data-index')),
          });
        } else {
          // Normal Mode
          const colorIndex = Number(e.target.getAttribute('data-index'));

          if (colorIndex === palette.selectedColor) {
            Store.dispatch('palette', 'unSelectColor', [palette.i]);
          } else {
            if (!palette.readonly) {
              Store.dispatch('palette', 'selectColor', {
                i: [palette.i],
                colorIndex,
              });
            }

            Store.dispatch('picker', 'setHex', palette.colors[colorIndex]);
          }

          Store.dispatch('palette', 'setNormalMode', [palette.i]);
        }

        mitt.emit('RENDER');
      },

      addColor(e) {
        e.preventDefault();
        e.stopPropagation();
        const state = Store.getState();
        const hex = state.picker.hex;

        Store.dispatch('palette', 'setNormalMode', [palette.i]);
        Store.dispatch('palette', 'addColor', { i: [palette.i], color: hex });
        Store.dispatch('palette', 'selectColor', {
          i: [palette.i],
          colorIndex: palette.colors.length - 1,
        });

        mitt.emit('RENDER');
      },

      toggleRemoveMode(e) {
        e.preventDefault();
        e.stopPropagation();
        const state = Store.getState();

        if (
          state.palette.palettes[palette.i].currentMode ===
          state.palette.modes.remove
        ) {
          Store.dispatch('palette', 'setNormalMode', [palette.i]);
        } else {
          Store.dispatch('palette', 'unSelectColor', [palette.i]);
          Store.dispatch('palette', 'setRemoveMode', [palette.i]);
        }

        mitt.emit('RENDER');
      },
    },
  };
}

function PaletteView({ props }) {
  return html`
    <div class="palette">
      <div class="palette-toolbar">
        <div class="palette-name">
          ${GrowInput({
            name: 'palette-name',
            value: props.name.value,
            onblur: props.name.onblur,
            readonly: props.name.readonly,
          })}
        </div>

        <div class="palette-buttons">
          ${props.readonly
            ? html`<div></div>`
            : html`
                <div class="palette-button">
                  <i
                    title="Add new color"
                    onclick="${props.addColor}"
                    class="fas fa-xs fa-plus-circle actionable"
                  ></i>
                </div>

                <div
                  class="palette-button ${props.currentMode ===
                  props.modes.remove
                    ? 'palette-button-remove--active'
                    : ''}"
                  onclick="${props.toggleRemoveMode}"
                >
                  <i
                    onclick="${props.toggleRemoveMode}"
                    title="Toggle remove mode"
                    class="fas fa-xs fa-minus-circle actionable"
                  ></i>
                </div>
              `}

          <div class="palette-button">
            <i
              title="Delete palette"
              onclick=${props.removePalette}
              class="fas fa-xs fa-trash actionable"
            ></i>
          </div>
        </div>
      </div>

      <div class="palette-colors" onclick="${props.clickPaletteColor}">
        ${props.colors.map((color, i) =>
          PaletteColorView({
            props: {
              selectedColor: props.selectedColor,
              modes: props.modes,
              currentMode: props.currentMode,
              color,
              i,
            },
          }),
        )}
      </div>
    </div>
  `;
}

function PaletteColorView({ props }) {
  const element = html.node`
    <div
      data-index="${props.i}"
      class="palette-color ${
        props.selectedColor === props.i ? 'palette-color--selected' : ''
      }
    ${props.currentMode === props.modes.remove ? 'palette-color--remove' : ''}
  "
      style="background: ${props.color}"
    ></div>
  `;

  element.addEventListener('mousedown', e => {
    e.preventDefault();
    e.stopPropagation();
  });

  return element;
}
