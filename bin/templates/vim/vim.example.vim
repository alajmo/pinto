let mapleader=","
set shortmess=atI " don't show the splash screen when starting vim
set encoding=utf-8
set termencoding=utf-8
scriptencoding utf-8
set fillchars+=stl:\ ,stlnc:\
set term=xterm-256color
if !has('gui_running')
  set t_Co=256
endif

set gcr=n:blinkon0 " Remove Blinking
au FocusGained * :redraw!
command! Reload source $MYVIMRC

set runtimepath+=~/.vim

set cmdheight=1
set updatetime=300
set shortmess+=c
set signcolumn=yes

set conceallevel=2
syntax on " Syntax highlighting

" Writing
augroup VimrcSource
    autocmd! VimrcSource
    autocmd! bufwritepost .vimrc source %
    autocmd BufRead,BufNewFile *.md set filetype=markdown
    autocmd BufRead,BufNewFile *.md setlocal spell " Turn on spellcheck for markdown files
    autocmd FileType markdown setlocal spell " Spell-check Markdown files
    autocmd FileType gitcommit setlocal spell " Spell-check Git messages
augroup END

" Set wrap on markdown files
augroup WrapLineInMarkdownFile
    autocmd!
    autocmd FileType markdown setlocal wrap
    autocmd FileType markdown setlocal com=s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:>,b:-
augroup END

augroup AutoSaveFolds
  autocmd!
  autocmd BufWinLeave ?* mkview 1
  autocmd BufWinEnter ?* silent! loadview 1
augroup END

" Show hidden characters
" set showbreak=↪\  linebreak
if has('linebreak')
  set breakindent
  let &showbreak = '  '
  " let &showbreak = '↪  '
  " let &showbreak = '↳ '
  set cpo+=n
end

if !exists('g:vim_mode')
    let g:vim_mode='base'
endif

call plug#begin('~/.vim/plugged')
  Plug 'terryma/vim-multiple-cursors'
  Plug 'AndrewRadev/switch.vim'
  Plug 'honza/vim-snippets'
  source $HOME/.vimrc-dev
call plug#end()

" coc {{{
" Next/Previous completion
inoremap <silent><expr> <c-j>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><c-k> pumvisible() ? "\<C-p>" : "\<C-h>"
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

autocmd FileType markdown let b:coc_suggest_disable = 1

augroup CustomColors
    autocmd!
    autocmd ColorScheme * highlight Search cterm=NONE ctermfg=black ctermbg=yellow
                    \ | highlight Folded ctermbg=black
                    \ | highlight Folded ctermfg=lightgrey
                    \ | highlight SignColumn ctermbg=black
                    \ | highlight GitGutterAdd guifg=red ctermfg=034
                    \ | highlight GitGutterChange guifg=red ctermfg=226
                    \ | highlight GitGutterDelete guifg=green ctermfg=196
                    \ | highlight GitGutterChangeDelete guifg=green ctermfg=196
augroup END

let g:lightline#bufferline#filename_modifier = ':t'
let g:lightline#bufferline#show_number  = 2
let g:lightline = {
    \ 'colorscheme': 'essential',
    \ 'active': {
    \   'left': [['mode', 'paste'], ['cwd', 'gitbranch', 'relativepath', 'session', 'modified']],
    \   'right': [ ['fileencoding'], ['lineinfo'], ['percent'], []]
    \ },
    \ 'tabline': {
    \   'left': [ [ 'buffers' ],
    \             [ 'bufferinfo' ],
    \             [ 'separator' ],
    \             [ 'separator' ],
    \             [ 'bufferbefore', 'buffercurrent', 'bufferafter' ], ],
    \   'right': [ [ 'close' ], ],
    \ },
    \ 'component_expand': {
    \   'buffers': 'lightline#bufferline#buffers',
    \   'buffercurrent': 'lightline#buffer#buffercurrent',
    \   'bufferbefore': 'lightline#buffer#bufferbefore',
    \   'bufferafter': 'lightline#buffer#bufferafter',
    \ },
    \ 'component_type': {
    \   'buffers': 'tabsel',
    \   'buffercurrent': 'tabsel',
    \   'bufferbefore': 'raw',
    \   'bufferafter': 'raw',
    \ },
    \ 'component_function': {
    \   'cwd': 'CwdName',
    \   'gitbranch': 'fugitive#head',
    \   'session': 'ObsessionStatus',
    \   'bufferinfo': 'lightline#buffer#bufferinfo',
    \ },
    \ 'component': {
    \   'close': '',
    \ }
\ }

function! CwdName() abort
  return fnamemodify(getcwd(0), ':t')
endfunction

" Syntax
augroup vimrcEx
    " When editing a file, always jump to the last known cursor position
    " Don't do it for commit messages, when the position is invalid, or when
    " inside an event handler (happens when dropping a file on gvim)
    autocmd! BufReadPost *
    \ if line("'\"") > 0 && line("'\"") <= line("$") |
    \ exe "normal g`\"" |
    \ endif
    " Set syntax highlighting for specific file types
    autocmd BufRead,BufNewFile Appraisals set filetype=ruby
    autocmd BufRead,BufNewFile *.md set filetype=markdown
    autocmd BufRead,BufNewFile .{jscs,eslint}rc set filetype=json
augroup END

" Strip trailing whitespace
function! StripWhitespace()
    let save_cursor = getpos(".")
    let old_query = getreg('/')
    :%s/\s\+$//e
    call setpos('.', save_cursor)
    call setreg('/', old_query)
endfunction
noremap <silent> <leader>ss :call StripWhitespace()<cr>
" }}}

let g:fzf_action = {
  \ 'ctrl-q': function('s:build_quickfix_list'),
  \ 'ctrl-t': 'tab split',
  \ 'ctrl-x': 'split',
  \ 'ctrl-v': 'vsplit' }
" }}}

" Move line to archive {{{
function! MoveToArchive()
  let archiveFile = $WORKSTATION_WIKI . "/archive/todo.md"
  :silent execute '. w! >>' archiveFile
  :silent execute 'normal! dd'
endfunction
nnoremap <leader>ta  :call MoveToArchive()<cr>
" }}}

" Task Done: Move to bottom of file {{{
function! MoveLineToBottom()
  :silent execute 'normal dd'
  :silent execute 'normal G'
  :silent execute 'normal p'
  :silent execute "normal ''"
endfunction
nnoremap <leader>td  :call MoveLineToBottom()<cr>
" }}}
