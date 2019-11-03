
let char_list = []
let prev_col = -1
let prev_row = -1
let cur_col = virtcol('.')
let cur_row = line('.')
normal gg
while prev_col != cur_col || prev_row != cur_row
  let group = synIDattr(synIDtrans(synID(line("."), col("."), 1)), "name")

  if strlen(group) == 0
    let group = "Normal"
  endif

  let cur_char = {
        \ 'char': matchstr(getline('.'), '\%' . col('.') . 'c.'),
        \ 'group': group,
        \ 'row': line('.'),
        \ 'column': virtcol('.'),
        \ }
  call add(char_list, cur_char)

  let prev_row = line('.')
  let prev_col = virtcol('.')
  normal l

  let cur_row = line('.')
  let cur_col = virtcol('.')
endwhile

let data = json_encode(char_list)
let data = "module.exports = " . data
let file = expand("%:h") . '/' . expand("%:h:t") . '.' . 'template' . '.' . expand("%:e")
if writefile([data], file)
    echomsg 'write error'
endif
