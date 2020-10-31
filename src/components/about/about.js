import { html } from 'lighterhtml';
import { mitt } from 'lib/event.js';
import { Modal } from 'components/modal/modal.js';

export { AboutView, AboutTemplate };

function AboutTemplate({ state, Store }) {
  return {
    state,
    props: {
      close() {
        Store.dispatch('app', 'openModal', null);
        mitt.emit('RENDER');
      },
    },
  };
}

function AboutView({ props }) {
  return Modal({
    title: 'About',

    size: 'auto',

    close: props.close,

    main: html`
      <div class="form">
        <div class="item text-body">
          <p>
            Pinto is an application used to create color themes for Vim.
          </p>

          <h3>
            Usage
          </h3>

          <ol class="modal-ol">
            <li>
              Change the colorscheme to your liking
            </li>

            <li>
              Copy or download the exported content to a file in vim color
              folder, for instance:
              <code class="code-snippet"
                >~/.vim/colors/[colorscheme name].vim</code
              >
            </li>

            <li>
              Load the colorscheme by appending a line in your
              <code class="code-snippet">.vimrc</code> file and re-sourcing
              <code class="code-snippet">.vimrc</code> OR by running
              <code class="code-snippet">:colorscheme [colorscheme name]</code>
            </li>
          </ol>

          <h3>
            Vim Syntax Highlightning
          </h3>

          <p>
            Vim uses lexical highlightning to style text in different colors and
            fonts. The different tokens can either be specific
            <code class="code-snippet">keywords</code> or text matching a
            pattern. Vim highlightning comprises of multiple keyword groups.
            There's the preferred/major group, the minor group and then all the
            language specific keyword groups. Each language group links to
            either a minor or preferred/major group, and the minor keywords all
            link to some keyword in the preferred/mayor group. Linking means
            that if the color/font is not set explicitly for a keyword, then it
            will inherit the color/font of the keyword it links to. Colortheme
            Editor uses the default keywords syntax for Vim 8.1. When setting
            foregroundColor or backgroundColor to NONE, it will not inherit from
            the keyword it links to, but from the Normal keyword.
          </p>

          <p>
            To learn more about syntax highlightning write
            <code class="code-snippet">:help highlightning</code> in vim or go
            to
            <a
              target="_blank"
              rel="nofollow"
              href="http://vimdoc.sourceforge.net/htmldoc/syntax.html#syntax"
              >vimdocs</a
            >.
          </p>

          <p>
            Some useful commands in vim:
          </p>

          <ul class="modal-ul">
            <li>
              <code class="code-snippet">:help highlight-groups</code>
              Default highlightning groups
            </li>

            <li>
              <code class="code-snippet">:highlight</code>
              Show all keywords, what they link to and their color attributes
            </li>

            <li>
              <code class="code-snippet">:verbose hi keyword</code>
              Show where a keyword (replace keyword with Normal, Comment,
              String, etc.) was last set
            </li>

            <li>
              <code class="code-snippet">:syntax</code>
              Show keyword, keyword links, syntax and pattern matching for the
              current active language
            </li>

            <li>
              <code class="code-snippet"
                >let s = synID(line('.'), col('.'), 1) | echo synIDattr(s,
                'name') . ' -> ' . synIDattr(synIDtrans(s), 'name')</code
              >
              Show keyword for the character under the cursor
            </li>

            <li>
              <code class="code-snippet"
                >:so $VIMRUNTIME/syntax/hitest.vim</code
              >
              See your current highlight settings for the active language
            </li>
          </ul>

          <h3>
            Keybindings
          </h3>

          <ul class="modal-ul">
            <li>
              To select/unselect multiple keywords hold down
              <code class="code-snippet">ctrl</code> and press a keyword.
            </li>
          </ul>

          <h3>
            FAQ
          </h3>

          <h4>
            Using the xterm 256 color palette displays the wrong color.
          </h4>

          <p>
            The 256 colors comes from
            <a
              href="https://jonasjacek.github.io/colors/"
              target="_blank"
              rel="nofollow"
              >https://jonasjacek.github.io/colors/</a
            >. If you're using tmux or some other software, you might get the
            wrong color for certain color codes. Try upgrading vim to 8.1 >, use
            GUI instead of terminal and enable true color support.
          </p>

          <h3>
            Additional Information
          </h3>

          <p>
            If you experience any bug or have suggestions for improvements,
            please send an email to
            <span style="font-weight: bold"
              ><a
                target="_blank"
                rel="nofollow"
                href="mailto:alajmovic.samir@gmail.com"
                >alajmovic.samir@gmail.com</a
              ></span
            >.
          </p>

          <ul>
            <li>
              <span class="bold">Version</span><br />
              v0.1.0
            </li>

            <li>
              <span class="bold">Updated</span><br />
              August 3, 2020
            </li>

            <li>
              <span class="bold">Language</span><br />
              English
            </li>

            <li>
              <span class="bold">Code</span> <br />
              <span style="font-weight: bold"
                ><a
                  target="_blank"
                  rel="nofollow"
                  href="https://github.com/samiralajmovic/pinto"
                  >github.com/samiralajmovic/pinto</a
                ></span
              >
            </li>

            <li>
              <span class="bold">Contact</span> <br />
              <span style="font-weight: bold"
                ><a
                  target="_blank"
                  rel="nofollow"
                  href="mailto:alajmovic.samir@gmail.com"
                  >alajmovic.samir@gmail.com</a
                ></span
              >
            </li>
          </ul>
        </div>
      </div>
    `,
  });
}
