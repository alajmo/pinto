import './palettes.css';
import { html } from 'lighterhtml';
import { compose } from 'lib/util.js';
import { PaletteView, PaletteTemplate } from 'components/palette/palette.js';

export { Palettes };

function Palettes({ state, Store }) {
  return html`
    <div class="palettes">
      ${state.palette.palettes.map(
        (palette, i) => html`
          ${compose(PaletteView)(PaletteTemplate)({
            palette: { ...palette, i, modes: state.palette.modes },
            Store,
          })}
        `,
      )}
    </div>
  `;
}
