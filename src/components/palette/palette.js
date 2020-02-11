import './palette.css';
import { render, html } from 'lighterhtml';

export { Palette };

function Palette(state, Store) {
  return html`
    <div class="palette">
      <div class="palette-header">Palette</div>

      <div class="palette-colors" onclick="${state.clickPaletteColor}">
        ${state.palette.palette.colors.map((color, i) =>
          PaletteColorElement(
            state.palette.palette.selectedPaletteColor,
            state.palette.paletteModes,
            state.palette.mode,
            color,
            i,
          ),
        )}
      </div>

      <div class="palette-buttons">
        <div class="palette-button-add" onclick="${state.addPaletteColor}">
          +
        </div>
        <div
          class="palette-button-remove ${state.palette.mode ===
          state.palette.paletteModes.remove
            ? 'palette-button-remove--active'
            : ''}"
          onclick="${state.toggleRemoveMode}"
        >
          -
        </div>
      </div>
    </div>
  `;
}

function PaletteColorElement(selectedPaletteColor, modes, mode, color, i) {
  const element = html.node`
    <div
      data-index="${i}"
      class="palette-color ${
        selectedPaletteColor === i ? 'palette-color--selected' : ''
      }
    ${mode === modes.remove ? 'palette-color--remove' : ''}
  "
      style="background: ${color}"
    ></div>
  `;

  element.addEventListener('mousedown', e => {
    e.preventDefault();
    e.stopPropagation();
  });

  return element;
}
