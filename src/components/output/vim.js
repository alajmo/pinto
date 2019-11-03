// Modifiers:
//      bold
//      underline
//      undercurl
//      strikethrough
//      reverse
//      italic
//      standout
//      NONE
function vimTemplate({
  name,
  Normal = {},
  Comment = {},
  Constant = {},
  Function = {},
  Statement = {},
  Todo = {},
}) {
  return `
"""
" Name:       ${name}.vim
" Version:    0.1.0
" Maintainer: github.com/samiralajmovic
" License:    The MIT License (MIT)
"""

hi clear

if exists('syntax on')
    syntax reset
endif

let g:colors_name='${name}'

call s:h("Comment",   { "fg": ${Comment.fg},   "bg", ${Comment.bg},   "cterm": ${Comment.attr} })
call s:h("Constant",  { "fg": ${Constant.fg},  "bg", ${Constant.bg},  "cterm": ${Constant.attr} })
call s:h("Function",  { "fg": ${Function.fg},  "bg", ${Function.bg},  "cterm": ${Function.attr} })
call s:h("Normal",    { "fg": ${Normal.fg},    "bg": ${Normal.bg},    "cterm": ${Normal.attr} })
call s:h("Statement", { "fg": ${Statement.fg}, "bg", ${Statement.bg}, "cterm": ${Statement.attr} })
call s:h("Todo",      { "fg": ${Todo.fg},      "bg", ${Todo.bg},      "cterm": ${Todo.attr} })
  `;
}
