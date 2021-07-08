import '@fortawesome/fontawesome-free/css/all.css';
import 'style/base.css';

import { render } from 'solid-js/web';
import { App } from 'components/app/app.jsx';
import { CreateStore } from 'state/store.js';

window.addEventListener('DOMContentLoaded', () => {
  main();
});

async function main() {
  init();

  async function init() {
    const Store = await CreateStore();
    const app = App(Store);

    render(() => app, document.body);
    const appLoader = document.getElementById('app-loader');
    appLoader.remove();
  }
}
