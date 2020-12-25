import '@fortawesome/fontawesome-free/css/all.css';
import 'style/base.css';

import { render } from 'lighterhtml';
import { App } from 'components/app/app.js';
import { Store } from 'state/store.js';

window.addEventListener('DOMContentLoaded', () => {
  setLoading();
  main();
});

function setLoading() {
  document.body.innerHTML = `
    <div class="app-loader">
      <h1>Loading Pinto</h1>
      <div class="fa-4x">
        <i class="fas fa-stroopwafel fa-spin"></i>
      </div>
    </div>
  `;
}

function main() {
  init();

  async function init() {
    const { element, onRenderComplete } = App(await Store);
    render(document.body, element);

    onRenderComplete();
  }
}
