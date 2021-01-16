import '@fortawesome/fontawesome-free/css/all.css';
import 'style/base.css';

import { render } from 'lighterhtml';
import { App } from 'components/app/app.js';
import { Store } from 'state/store.js';

window.addEventListener('DOMContentLoaded', () => {
  main();
});

function main() {
  init();

  async function init() {
    const { element, onRenderComplete } = App(await Store);
    render(document.body, element);

    onRenderComplete();
  }
}
