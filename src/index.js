import '@fortawesome/fontawesome-free/css/all.css';
import 'style/base.css';

import { render } from 'lighterhtml';
import { App } from 'components/app/app.js';
import { CreateStore } from 'state/store.js';

window.addEventListener('DOMContentLoaded', () => {
  main();
});

async function main() {
  init();

  async function init() {
    const Store = await CreateStore();
    const { element, onRenderComplete } = App(Store);
    render(document.body, element);
    onRenderComplete();
  }
}
