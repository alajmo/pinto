"""
" Name:       essential.vim
" Version:    0.1.0
" Maintainer: github.com/samiralajmovic
" License:    The MIT License (MIT)
"""
hi clear

if exists('syntax on')
    syntax reset
endif

let g:colors_name='essential'

let s:black           = { "cterm": "0" }
let s:medium_gray     = { "cterm": "242" }
let s:white           = { "cterm": "15"  }
let s:actual_white    = { "cterm": "231" }
let s:subtle_black    = { "cterm": "232" }
let s:light_black     = { "cterm": "235" }
let s:lighter_black   = { "cterm": "239" }
let s:light_gray      = { "cterm": "248" }
let s:lighter_gray    = { "cterm": "251" }
let s:lightest_gray   = { "cterm": "255" }
let s:pink            = { "cterm": "9"   }
let s:dark_red        = { "cterm": "1"   }
let s:light_red       = { "cterm": "1"   }
let s:orange          = { "cterm": "167" }
let s:darker_blue     = { "cterm": "18"  }
let s:dark_blue       = { "cterm": "32"   }
let s:blue            = { "cterm": "12"  }
let s:light_blue      = { "cterm": "153" }
let s:dark_cyan       = { "cterm": "6"   }
let s:light_cyan      = { "cterm": "14"  }
let s:dark_green      = { "cterm": "2"   }
let s:light_green     = { "cterm": "10"  }
let s:dark_purple     = { "cterm": "134" }
let s:light_purple    = { "cterm": "140" }
let s:yellow          = { "cterm": "11"  }
let s:light_yellow    = { "cterm": "228" }
let s:dark_yellow     = { "cterm": "3"   }

let s:background = &background

if &background == "dark"
  let s:bg              = s:black
  let s:bg_subtle       = s:lighter_black
  let s:bg_very_subtle  = s:subtle_black
  let s:norm            = s:lighter_gray
  let s:norm_subtle     = s:medium_gray
  let s:purple          = s:light_purple
  let s:green           = s:light_green
  let s:red             = s:light_red
  let s:visual          = s:subtle_black
  let s:yellow          = s:light_yellow
else
  let s:bg              = s:actual_white
  let s:bg_subtle       = s:light_gray
  let s:bg_very_subtle  = s:lightest_gray
  let s:norm            = s:light_black
  let s:norm_subtle     = s:medium_gray
  let s:purple          = s:dark_purple
  let s:green           = s:dark_green
  let s:red             = s:dark_red
  let s:visual          = s:dark_purple
  let s:yellow          = s:dark_yellow
endif

" https://github.com/noahfrederick/vim-hemisu/
function! s:h(group, style)
  execute "highlight" a:group
    \ "ctermfg=" (has_key(a:style, "fg")    ? a:style.fg.cterm : "NONE")
    \ "ctermbg=" (has_key(a:style, "bg")    ? a:style.bg.cterm : "NONE")
    \ "cterm="   (has_key(a:style, "cterm") ? a:style.cterm    : "NONE")
endfunction

call s:h("Normal", {"bg": s:bg, "fg": s:norm})

" restore &background's value in case changing Normal changed &background (:help :hi-normal-cterm)
if &background != s:background
   execute "set background=" . s:background
endif

call s:h("Cursor",        {"bg": s:purple, "fg": s:norm })
call s:h("Comment",       {"fg": s:light_gray })

call s:h("Constant",      {"fg": s:purple})
hi! link Character        Constant
hi! link Number           Constant
hi! link Boolean          Constant
hi! link Float            Constant
hi! link String           Constant

call s:h("Identifier",    {"fg": s:dark_blue})
hi! link Identifier       Normal

call s:h("Function",      {"fg": s:blue})
hi! link Function         Function

call s:h("Statement",     {"fg": s:bg_subtle})
hi! link Conditonal       Statement
hi! link Repeat           Statement
hi! link Label            Statement
hi! link Keyword          Statement
hi! link Exception        Statement

call s:h("Operator",      {"fg": s:norm, "cterm": "bold"})

call s:h("PreProc",     {"fg": s:norm_subtle})
hi! link Include          PreProc
hi! link Define           PreProc
hi! link Macro            PreProc
hi! link PreCondit        PreProc

call s:h("Type",          {"fg": s:norm})
hi! link StorageClass     Type
hi! link Structure        Type
hi! link Typedef          Type

call s:h("Special",       {"fg": s:norm_subtle})
hi! link SpecialChar      Special
hi! link Tag              Special
hi! link Delimiter        Special
hi! link SpecialComment   Special
hi! link Debug            Special

call s:h("Underlined",    {"fg": s:norm, "cterm": "underline"})
call s:h("Ignore",        {"fg": s:bg})
call s:h("Error",         {"fg": s:actual_white, "bg": s:red, "cterm": "bold"})
call s:h("Todo",          {"fg": s:purple, "cterm": "underline"})
call s:h("SpecialKey",    {"fg": s:light_green})
call s:h("NonText",       {"fg": s:medium_gray})
call s:h("Directory",     {"fg": s:dark_blue})
call s:h("ErrorMsg",      {"fg": s:red})
call s:h("IncSearch",     {"bg": s:yellow, "fg": s:light_black})
call s:h("Search",        {"bg": s:light_green, "fg": s:light_black})
call s:h("MoreMsg",       {"fg": s:medium_gray, "cterm": "bold", })
hi! link ModeMsg MoreMsg
call s:h("LineNr",        {"fg": s:bg_subtle})
call s:h("CursorLineNr",  {"fg": s:purple, "bg": s:bg_very_subtle})
call s:h("Question",      {"fg": s:red})
call s:h("StatusLine",    {"bg": s:bg_very_subtle})
call s:h("StatusLineNC",  {"bg": s:bg_very_subtle, "fg": s:medium_gray})
call s:h("VertSplit",     {"bg": s:bg_very_subtle, "fg": s:bg_very_subtle})
call s:h("Title",         {"fg": s:dark_blue})
call s:h("Visual",        {"fg": s:norm, "bg": s:visual})
call s:h("VisualNOS",     {"bg": s:bg_subtle})
call s:h("WarningMsg",    {"fg": s:yellow})
call s:h("WildMenu",      {"fg": s:bg, "bg": s:norm})
call s:h("Folded",        {"fg": s:medium_gray})
call s:h("FoldColumn",    {"fg": s:bg_subtle})
call s:h("DiffAdd",       {"fg": s:green})
call s:h("DiffDelete",    {"fg": s:red})
call s:h("DiffChange",    {"fg": s:dark_yellow})
call s:h("DiffText",      {"fg": s:dark_blue})
call s:h("SignColumn",    {"fg": s:light_green})

call s:h("SpellBad",    {"cterm": "underline", "fg": s:red})
call s:h("SpellCap",    {"cterm": "underline", "fg": s:light_green})
call s:h("SpellRare",   {"cterm": "underline", "fg": s:pink})
call s:h("SpellLocal",  {"cterm": "underline", "fg": s:dark_green})

call s:h("Pmenu",         {"fg": s:norm, "bg": s:bg_subtle})
call s:h("PmenuSel",      {"fg": s:norm, "bg": s:purple})
call s:h("PmenuSbar",     {"fg": s:norm, "bg": s:bg_subtle})
call s:h("PmenuThumb",    {"fg": s:norm, "bg": s:bg_subtle})
call s:h("TabLine",       {"fg": s:norm, "bg": s:bg_very_subtle})
call s:h("TabLineSel",    {"fg": s:purple, "bg": s:bg_subtle, "cterm": "bold"})
call s:h("TabLineFill",   {"fg": s:norm, "bg": s:bg_very_subtle})
call s:h("CursorColumn",  {"bg": s:bg_very_subtle})
call s:h("CursorLine",    {"bg": s:bg_very_subtle})
call s:h("ColorColumn",   {"bg": s:bg_subtle})

call s:h("MatchParen",    {"bg": s:bg_subtle, "fg": s:norm})
call s:h("qfLineNr",      {"fg": s:medium_gray})

call s:h("htmlH1",        {"bg": s:bg, "fg": s:purple, "cterm": "bold"})
call s:h("htmlH2",        {"bg": s:bg, "fg": s:purple, "cterm": "bold"})
call s:h("htmlH3",        {"bg": s:bg, "fg": s:purple, "cterm": "bold"})
call s:h("htmlH4",        {"bg": s:bg, "fg": s:purple, "cterm": "bold"})
call s:h("htmlH5",        {"bg": s:bg, "fg": s:purple, "cterm": "bold"})
call s:h("htmlH6",        {"bg": s:bg, "fg": s:purple, "cterm": "bold"})

" Synatastic
call s:h("SyntasticWarningSign",    {"fg": s:yellow})
call s:h("SyntasticWarning",        {"bg": s:yellow, "fg": s:black, "cterm": "bold"})
call s:h("SyntasticErrorSign",      {"fg": s:red})
call s:h("SyntasticError",          {"bg": s:red, "fg": s:white, "cterm": "bold"})

" Neomake
hi link NeomakeWarningSign	SyntasticWarningSign
hi link NeomakeErrorSign	SyntasticErrorSign

" ALE
hi link ALEWarningSign	SyntasticWarningSign
hi link ALEErrorSign	SyntasticErrorSign

" Signify, git-gutter
hi link SignifySignAdd              LineNr
hi link SignifySignDelete           LineNr
hi link SignifySignChange           LineNr
hi link GitGutterAdd                LineNr
hi link GitGutterDelete             LineNr
hi link GitGutterChange             LineNr
hi link GitGutterChangeDelete       LineNr

