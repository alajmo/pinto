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
<div class="app-loader loader loader--style6" title="5">
  <h1>Loading</h1>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="13" width="4" height="5" fill="#333">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5"
        begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="13" width="4" height="5" fill="#333">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5"
        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="13" width="4" height="5" fill="#333">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5"
        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
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
