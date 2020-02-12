import 'style/base.css';

import { render, html } from 'lighterhtml';
import { App } from 'components/app/app.js';
import { Store } from 'state/store.js';

window.addEventListener('DOMContentLoaded', () => {
  main();
});

function main() {
  init();

  async function init() {
    const app = App(await Store);
    render(document.body, app);
  }
}
