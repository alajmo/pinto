import 'output.css';

function outputPreview(className) {
  const rootElement = document.getElementsByClassName(className)[0];

  function init() {
    renderView();
    subscribe();
  }

  function updateVimTemplate({ template }) {
    console.log('Updating Template...');
  }

  function subscribe() {
    const events = STORE.getEvents();

    STORE.subscribe({
      // [events.TEMPLATE_UPDATE]: () => {
      //   const state = STORE.getState();
      //   updateVimTemplate(state);
      // },
    });
  }

  function renderView() {
    const html = vimTemplate({});
    const element = htmlToElements(html);

    const preElement = document.getElementsByClassName(
      'output__preview-pre',
    )[0];
    preElement.appendChild(element);

    const el = rootElement.getElementsByClassName('colors-select__fg-color')[0];
    el.replaceChild(element, el.children[0]);
  }

  return {
    init,
  };
}
