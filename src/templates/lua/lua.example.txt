require 'nvim_lsp'
local configs = require 'nvim_lsp/configs'
local util = require 'nvim_lsp/util'
local inspect = vim.inspect
local uv = vim.loop
local fn = vim.fn
local tbl_flatten = vim.tbl_flatten

local function template(s, params)
  return (s:gsub("{{([^{}]+)}}", params))
end

local function map_list(t, func)
  local res = {}
  for i, v in ipairs(t) do
    local x = func(v, i)
    if x ~= nil then
      table.insert(res, x)
    end
  end
  return res
end

local function indent(n, s)
  local prefix
  if type(n) == 'number' then
    if n <= 0 then return s end
    prefix = string.rep(" ", n)
  else
    assert(type(n) == 'string', 'n must be number or string')
    prefix = n
  end
  local lines = vim.split(s, '\n', true)
  for i, line in ipairs(lines) do
    lines[i] = prefix..line
  end
  return table.concat(lines, '\n')
end

local function make_parts(fns)
  return tbl_flatten(map_list(fns, function(v)
    if type(v) == 'function' then
      v = v()
    end
    return {v}
  end))
end

local function make_section(indentlvl, sep, parts)
  return indent(indentlvl, table.concat(make_parts(parts), sep))
end

local function readfile(path)
  assert(util.path.is_file(path))
  return io.open(path):read("*a")
end

local function sorted_map_table(t, func)
  local keys = vim.tbl_keys(t)
  table.sort(keys)
  return map_list(keys, function(k)
    return func(k, t[k])
  end)
end

local lsp_section_template = [[
## {{template_name}}

{{preamble}}
```lua
require'nvim_lsp'.{{template_name}}.setup{}

{{body}}
```
]]

local function make_lsp_sections()
  return make_section(0, '\n', sorted_map_table(configs, function(template_name, template_object)
    local template_def = template_object.document_config
    local docs = template_def.docs

    local params = {
      template_name = template_name;
      preamble = "";
      body = "";
    }

    params.body = make_section(2, '\n\n', {
      function()
        if not template_def.commands then return end
        return make_section(0, '\n', {
          "Commands:";
          sorted_map_table(template_def.commands, function(name, def)
            if def.description then
              return string.format("- %s: %s", name, def.description)
            end
            return string.format("- %s", name)
          end)
        })
      end;
      function()
        if not template_def.default_config then return end
        return make_section(0, '\n', {
          "Default Values:";
          sorted_map_table(template_def.default_config, function(k, v)
            local description = ((docs or {}).default_config or {})[k]
            if description and type(description) ~= 'string' then
              description = inspect(description)
            end
            return indent(2, string.format("%s = %s", k, description or inspect(v)))
          end)
        })
      end;
    })

    return template(lsp_section_template, params)
  end))
end

local function make_implemented_servers_list()
  return make_section(0, '\n', sorted_map_table(configs, function(k)
    return template("- [{{server}}](#{{server}})", {server=k})
  end))
end

local function generate_readme(template_file, params)
  vim.validate {
    lsp_server_details = {params.lsp_server_details, 's'};
    implemented_servers_list = {params.implemented_servers_list, 's'};
  }
  local input_template = readfile(template_file)
  local readme_data = template(input_template, params)

  local writer = io.open("README.md", "w")
  writer:write(readme_data)
  writer:close()
end

require_all_configs()
generate_readme("scripts/README_template.md", {
  implemented_servers_list = make_implemented_servers_list();
  lsp_server_details = make_lsp_sections();
})
