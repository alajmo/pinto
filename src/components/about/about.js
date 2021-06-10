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
    title: 'Help',

    size: 'auto',

    close: props.close,

    main: html`
      <div class="form">
        <div class="item text-body">
          <p>
            Create, view and edit Vim color themes.
          </p>

          <h3>
            Usage
          </h3>

          <ol class="modal-ol">
            <li>
              Change the color scheme to your liking.
            </li>

            <li>
              Copy or download the exported content to a file in vim color
              folder, for instance:
              <code class="code-snippet">~/.vim/colors/[colorscheme].vim</code>
            </li>

            <li>
              Load the color scheme by appending a line in your
              <code class="code-snippet">.vimrc</code> file and re-sourcing
              <code class="code-snippet">.vimrc</code> OR by running
              <code class="code-snippet">:colorscheme [colorscheme]</code>
            </li>
          </ol>

          <p>
            Additionally, if your browser supports the
            <a href="https://web.dev/file-system-access/" target="_blank" rel="nofollow">File System Access API</a>, you can save
            changes to a local file on your computer and trigger an instant
            reload in vim (with entr, inotify-tools or other similar software):
          </p>

          <ol class="modal-ol">
            <li>
              Start vim with the
              <code class="code-snippet">servername flag</code>, for instance,

              <code class="code-snippet"
                >vim --servername PINTO example.js</code
              >
            </li>

            <li>
              Then from another terminal run
              <code class="code-snippet">ls ~/.vim/colors/* | entr -c -r -s "vim --servername PINTO --remote-send ':colorscheme MY_COLOR_SCHEME_NAME &lt;cr&gt;'"</code>, and replace MY_COLOR_SCHEME_NAME with your color scheme name.
            </li>
          </ol>

          <h3>
            Keybindings
          </h3>

          <ul class="modal-ul">
            <li>
              To select/unselect multiple keywords, hold down
              <code class="code-snippet">Ctrl</code> and press a keyword.
            </li>

            <li>
              <code class="code-snippet">Ctrl + S</code>: Save theme (autosave
              is enabled but you can always save manually)
            </li>

            <li>
              <code class="code-snippet">Ctrl + Shift + S</code>: Save changes
              to file
            </li>

            <li>
              <code class="code-snippet">Shift + N</code>: Create new theme
            </li>

            <li>
              <code class="code-snippet">Shift + O</code>: Open theme
            </li>

            <li>
              <code class="code-snippet">Shift + E</code>: Export theme
            </li>

            <li>
              <code class="code-snippet">Shift + F</code>: Show fullscreen
            </li>

            <li>
              <code class="code-snippet">Shift + V</code>: Copy vim theme to
              clipboard
            </li>

            <li>
              <code class="code-snippet">Shift + K </code>: Go to Normal keyword
            </li>

            <li>
              <code class="code-snippet">Shift + P</code>: Go to palette editor
            </li>

            <li><code class="code-snippet">Shift + S</code>: Go to Settings</li>
          </ul>

          <h3>
            FAQ
          </h3>

          <h4>
            Using the xterm 256 color palette displays the wrong color.
          </h4>

          <p>
            The 256 colors come from
            <a
              href="https://jonasjacek.github.io/colors/"
              target="_blank"
              rel="nofollow"
              >https://jonasjacek.github.io/colors/</a
            >. If you're using tmux or some other software, you might get the
            wrong color for certain color codes. Try upgrading vim to 8.1 > and
            enable <code class="code-snippet">termguicolors</code>.
          </p>

          <h4>
            How can I add my own keywords?
          </h4>

          <p>
            Go to Settings and add a new keyword group from the Keyboard Groups section.
          </p>

          <h4>
            Where is data saved?
          </h4>

          <p>
            Data is saved to IndexedDB in the browser.
          </p>

          <h4>
            How does Vim Syntax Highlighting work?
          </h4>

          <p>
            Vim uses lexical highlighting to style text in different colors and
            fonts. The various tokens can either be specific
            <code class="code-snippet">keywords</code> or text matching a
            pattern.
          </p>

          <p>
            Vim highlighting comprises of multiple keyword groups. There's the
            preferred/major group, the minor group, and then all the language-specific keyword groups.
          </p>

          <p>
            Each language group links to either a minor or preferred/major
            group, and the minor keywords all link to some keyword in the
            preferred/major group.
          </p>

          <p>
            Linking means that if the color/font is not set explicitly for a keyword, it will inherit the linked keyword's color/font.
            Pinto uses the default keywords syntax for Vim 8.1.
          </p>

          <p>
            When setting <code class="code-snippet">foregroundColor</code> or <code class="code-snippet">backgroundColor</code> to <code class="code-snippet">NONE</code>, it will not
            inherit from the keyword it links to, but from the <code class="code-snippet">Normal</code> keyword.
          </p>

          <p>
            To learn more about syntax highlighting  write
            <code class="code-snippet">:help highlighting </code> in vim or go
            to
            <a
              target="_blank"
              rel="nofollow"
              href="http://vimdoc.sourceforge.net/htmldoc/syntax.html#syntax"
              >vimdocs</a
            >.
          </p>

          <h4>
            Why is Pinto so slow?
          </h4>

          <p>
            Because the author wanted to experiment with a new way of building front-end applications (while creating a useful application in the meantime),
            and incidentally dug himself a hole too deep to dig himself out of it, time and energy-wise.
            A rewrite is on the (event) horizon.
          </p>

          <p>
            Some useful commands in vim:
          </p>

          <ul class="modal-ul">
            <li>
              <code class="code-snippet">:help highlight-groups</code>
              Show default highlighting  groups
            </li>

            <li>
              <code class="code-snippet">:highlight</code>
              Show all keywords, what they link to, and their color attributes
            </li>

            <li>
              <code class="code-snippet">:verbose hi keyword</code>
              Show where a keyword (replace the keyword with Normal, Comment,
              String, etc.) was last set
            </li>

            <li>
              <code class="code-snippet">:syntax</code>
              Show keyword, keyword links, syntax, and pattern matching for the
              currently active language
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

            <li>
              <code class="code-snippet">:colorscheme [colorscheme name]</code>
              Load a colorscheme
            </li>

            <li>
              <code class="code-snippet"> @:</code>
              Repeat last vim command
            </li>
          </ul>

          <h3>
            Additional Information
          </h3>

          <ul>
            <li>
              <span class="bold">Version</span><br />
              v0.3.2
            </li>

            <li>
              <span class="bold">Updated</span><br />
              June 10, 2021
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
                  href="https://github.com/alajmo/pinto"
                  >github.com/alajmo/pinto</a
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
