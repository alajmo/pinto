import { html } from 'lighterhtml';
import { validateCreateGroup } from 'lib/util.js';
import { TextInput } from 'components/text-input/text-input.js';
import { Modal } from 'components/modal/modal.js';
import { mitt } from 'lib/event.js';

export { ManageGroupsView, ManageGroupsTemplate };

function ManageGroupsTemplate({ state, Store }) {
  // console.log('groups: ', state.theme.groups);
  // console.log('keywords: ', state.theme.keywords);
  // console.log('groupKeywords: ', state.theme.groupKeywords);
  // console.log('keywordLinks', state.theme.keywordLinks);
  // console.log('keywordGroups: ', state.theme.keywordGroups);

  const {
    type,
    oldGroupName,
    groupName,
    groupKeywords,
  } = state.app.manageGroups;

  return {
    state,

    props: {
      submitText: type === 'create' ? 'Create' : 'Update',

      groupName: {
        value: groupName,
        name: 'groupName',
        autofocus: true,
        label: 'Group Name',
        onkeyup: e => {
          Store.dispatch('app', 'updateGroupName', e.target.value);
          mitt.emit('RENDER');
        },
      },

      groupKeywords,

      addKeyword() {
        Store.dispatch('app', 'addKeyword');
        mitt.emit('RENDER');
      },

      removeKeyword(i) {
        Store.dispatch('app', 'removeKeyword', i);
        mitt.emit('RENDER');
      },

      updateKeyword(e, i) {
        Store.dispatch('app', 'updateKeyword', { i, keyword: e.target.value });
        mitt.emit('RENDER');
      },

      updateLinkedKeyword(e, i) {
        Store.dispatch('app', 'updateLinkedKeyword', {
          i,
          keyword: e.target.value,
        });
        mitt.emit('RENDER');
      },

      updateGroup() {},

      submit() {
        const state = Store.getState();
        const { groupName, groupKeywords } = state.app.manageGroups;

        const error = validateCreateGroup({
          keywords: Object.keys(state.theme.keywords),
          oldGroupName,
          groupName,
          oldGroupKeywords: state.theme.groupKeywords,
          groupKeywords,
        });

        if (error) {
          alert(error);
        } else {
          if (type === 'create') {
            Store.dispatch('theme', 'createGroup', {
              groupName,
              groupKeywords,
            });
            Store.dispatch('app', 'openModal', null);
            Store.dispatch('app', 'selectOption', 'settings');
          } else {
            Store.dispatch('theme', 'updateGroup', {
              oldGroupName,
              groupName,
              groupKeywords,
            });
            Store.dispatch('app', 'openModal', null);
            Store.dispatch('app', 'selectOption', 'settings');
          }

          mitt.emit('MODIFY_GROUP');
          mitt.emit('RENDER');
        }
      },

      close() {
        Store.dispatch('app', 'resetGroupModal');
        Store.dispatch('app', 'openModal', null);
        mitt.emit('RENDER');
      },
    },
  };
}

function ManageGroupsView({ props }) {
  return Modal({
    title: 'Add Keyword Group',

    size: 'auto',

    close: props.close,

    header: html``,

    main: html`
      <div class="form">
        <div class="item">
          ${TextInput(props.groupName)}
        </div>

        <div class="item divider--small row left">
          <h3 class="max-width">Group Keywords</h3>
          <i
            title="Add keyword group"
            onclick="${props.addKeyword}"
            class="fas fa-plus actionable"
          ></i>
        </div>

        <div class="item">
          <div class="form">
            ${props.groupKeywords.map((keyword, i) =>
              KeywordItem({
                keyword,
                updateKeyword: e => props.updateKeyword(e, i),
                updateLinkedKeyword: e => props.updateLinkedKeyword(e, i),
                removeKeyword: () => props.removeKeyword(i),
              }),
            )}
          </div>
        </div>

        <div class="buttons">
          <button class="filled secondary" onclick="${props.submit}">
            ${props.submitText}
          </button>
          <button class="filled gray" onclick="${props.close}">Cancel</button>
        </div>
      </div>
    `,
  });
}

function KeywordItem({
  keyword,
  updateKeyword,
  updateLinkedKeyword,
  removeKeyword,
}) {
  return html`
    <div class="row center">
      ${TextInput({
        name: '',
        value: keyword.keyword,
        placeholder: 'Keyword',
        onkeyup: updateKeyword,
        disabled: keyword.oldKeyword === 'Normal',
      })}

      <div><i class="fas fa-arrow-right" title="links to"></i></div>

      ${TextInput({
        name: '',
        value: keyword.linkedKeyword,
        placeholder: 'Normal',
        onkeyup: updateLinkedKeyword,
        disabled: keyword.oldKeyword === 'Normal',
      })}
      ${keyword.oldKeyword !== 'Normal'
        ? html`
            <div>
              <i
                title="Remove keyword"
                name="remove-keyword"
                onclick="${removeKeyword}"
                class="fas fa-minus-circle fa-size-large actionable"
              ></i>
            </div>
          `
        : null}
    </div>
  `;
}
