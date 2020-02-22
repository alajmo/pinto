#!/usr/bin/env bash

trap 'echo "Aborting due to errexit on line $LINENO. Exit code: $?" >&2' ERR

set -eEu
set -o pipefail

SAFER_IFS=$'\n\t'
IFS="${SAFER_IFS}"

_ME=$(basename "${0}")
_VERSION="0.10.2"
_USE_DEBUG=0

# _debug()
#
# Usage:
#   _debug printf "Debug info. Variable: %s\n" "$0"
#
# A simple function for executing a specified command if the `$_USE_DEBUG`
# variable has been set. The command is expected to print a message and
# should typically be either `echo`, `printf`, or `cat`.
__DEBUG_COUNTER=0
_debug() {
  if [[ "${_USE_DEBUG:-"0"}" -eq 1 ]]
  then
    __DEBUG_COUNTER=$((__DEBUG_COUNTER+1))
    # Prefix debug message with "bug (U+1F41B)"
    printf "🐛  %s " "${__DEBUG_COUNTER}"
    "${@}"
    printf "――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――\n"
  fi
}

debug() {
  _debug echo "${@}"
}

# _die()
#
# Usage:
#   _die printf "Error message. Variable: %s\n" "$0"
#
# A simple function for exiting with an error after executing the specified
# command. The command is expected to print a message and should typically
# be either `echo`, `printf`, or `cat`.
_die() {
  # Prefix die message with "cross mark (U+274C)", often displayed as a red x.
  printf "❌  "
  "${@}" 1>&2
  exit 1
}

# die()
#
# Usage:
#   die "Error message. Variable: $0"
#
# Exit with an error and print the specified message.
#
# This is a shortcut for the _die() function that simply echos the message.
die() {
  _die echo "${@}"
}

# _print_help()
#
# Usage:
#   _print_help
#
# Print the program help information.
_print_help() {
  cat <<HEREDOC

template-generator - Template generator CLI

Usage: ${_ME} [command] [arguments]

Options:
  -h, --help                       Print this help
  -v, --version                    Print script version
  -L, --level                      Max display depth of the directory tree
  -b, --boilerplate-path <path>    Specify boilerplate path
  -f, --format <tree|line>         List format [default: tree]

Commands:

  list|ls|l [subdirectory]         List boilerplates.
  generate|g [boilerplate] [dest]  Generate boilerplate.
  preview|p [boilerplate]          Preview boilerplate.
  edit|e [boilerplate]             Edit boilerplate in editor.
  remove|rm|r [boilerplate]        Remove a boilerplate.
  new|n [file] [dest]              Add a new boilerplate.

Examples:

  # Show first depth level of boilerplates path.
  $ ${_ME} list -L 1

  # Copy boilerplate file.txt to current directory with filename new-file.txt
  $ ${_ME} generate files/file.txt new-file.txt

Boilerplate Path:

  The order of precedence (highest to lowest) is:
    1. Path specified in options
    2. Environment variable BOILERPLATES_PATH
    3. \$PWD/.boilerplates/
    4. \$PWD/boilerplates/
    5. ~/.boilerplates/
    6. ~/boilerplates/

HEREDOC
}

_print_version() {
  printf "v%s \n" "$_VERSION"
}

optstring=xo:h

unset options
while ((${#}))
do
  case ${1} in
    -[!-]?*)
      for ((i=1; i<${#1}; i++))
      do
        c=${1:i:1}
        options+=("-${c}")

        if [[ ${optstring} = *"${c}:"* && ${1:i+1} ]]
        then
          options+=("${1:i+1}")
          break
        fi
      done
      ;;
    --?*=*)
      options+=("${1%%=*}" "${1#*=}")
      ;;
    --)
      options+=(--endopts)
      shift
      options+=("${@}")
      break
      ;;
    *)
      options+=("${1}")
      ;;
  esac

  shift
done
set -- "${options[@]:-}"
unset options

_get_boilerplates_path() {
  local boilerplatePathConfig="$1"
  local env_path=${BOILERPLATES_PATH:-""}

  local path
  if [[ -n "$boilerplatePathConfig" ]]; then
    path="$boilerplatePathConfig"
  elif [[ -n "$env_path" ]]; then
    path="$env_path"
  elif [[ -d "$PWD/.boilerplates/" ]]; then
    path="$PWD/.boilerplates/"
  elif [[ -d "$PWD/boilerplates/" ]]; then
    path="$PWD/boilerplates/"
  elif [[ -d "$HOME/.boilerplates/" ]]; then
    path="$HOME/.boilerplates/"
  elif [[ -d "$HOME/boilerplates/" ]]; then
    path="$HOME/boilerplates/"
  fi

  echo "$path"
}

# Add dest to list
# @param {String} Boilerplates path
# @param {String} Sub directory
# @param {String} List format
# @param {String} Tree level
# _list_boilerplates "$boilerplates_path" "" "$_LIST_ARG" "$_LIST_OPTION"
_list_boilerplates() {
  local root_boilerplates_path="$1"
  local directory="${2:-}"
  local list_format="${3:-}"
  local tree_level="${4:-}"
  local path="$(realpath "$root_boilerplates_path/$directory")"

  [[ -z $list_format ]] && list_format="tree";
  [[ -z $tree_level ]] && tree_level=9999;

  if [[ $list_format == "line" ]]; then
    find $path
  else
    tree "$path" -L "$tree_level" -a -I "*.git*"
  fi
}

# Trim spaces
# @param {String} string
trim_string() {
    : "${1#"${1%%[![:space:]]*}"}"
    : "${_%"${_##*[![:space:]]}"}"
    printf '%s\n' "$_"
}

# Adds a new boilerplate
# @param boilerplates_path
# @param {String} Boilerplates path
# @param {String} src
# @param {String} dest
_new_boilerplate() {
  # 1. Normalize paths
  local boilerplates_path="$1"
  local src="$2"
  local dest="$3"

  if [[ -n "$src" && -n "$dest" ]]; then
    dest=$(realpath "$boilerplates_path$dest")

    cp "$src" "$dest" -irL

    # Open in editor
    if [[ -n $(command -v vifm) ]]; then
      vifm "$dest"
    else
      $EDITOR "$dest"
    fi
  else
    if [[ -n $(command -v vifm) ]]; then
      vifm "$boilerplates_path"
    else
      $EDITOR "$boilerplates_path"
    fi
  fi
}

# Removes a boilerplate
# @param boilerplates_path
# @param {String} src
_remove_boilerplate() {
  # 1. Normalize paths
  local boilerplates_path="$1"
  local src="$2"
  src=$(realpath "$boilerplates_path$src")

  rm "$src" -ir
}

find_in_array() {
  local word=$1
  shift
  for e in "$@"; do [[ "$e" == "$word" ]] && return 0; done
}

# Replace placeholder in files with their variable
# @param {String} files
# @param {String} directory
template_engine() {
    # 1. Find placeholders
    local filesArr=($1)
    local content=""

    local find_pattern="(?<={%)(\s*[\w\d\.\_\-]*\s*)(?=%})"
    # Find unique entries
    local variables=($(cat "${filesArr[@]}" | grep -oP "$find_pattern" || true))

    # 2. Set values for all placeholders
    declare -A arr
    for key in "${variables[@]}"; do
        key=$(trim_string "$key")
        [ ${arr["$key"]+abc} ] || read -rp "${key}: " arr[$key] </dev/tty
    done

    # 3. Replace placeholders with user values
    while read -r file; do
        for key in "${!arr[@]}"; do
            # echo "$file"
            # echo "$key: ${arr[$key]}"
            sed -ri "s/\{\% $key \%\}/${arr[$key]}/g" "$file"
        done
    done <<< "$files"
}

# Generates boilerplates, takes single file or directory as input parameter
# @param boilerplates_path
# @param boilerplate
# @param dest
_generate_boilerplate() {
  # 1. Normalize paths
  local boilerplates_path="$1"
  local boilerplate="$2"
  local dest="$3"
  local src=$(realpath "$boilerplates_path$boilerplate")

  # 2. Copy files
  if [[ -z "$dest" || "$dest" = "." || "$dest" = "./" ]];  then
    dest=$(realpath $(basename "$src"))
  else
    dest=$(realpath "$dest")
  fi
  cp "$src" "$dest" -irL

  # 3. Replace variables
  local files=$(find "$dest" -type f)
  template_engine "$files"
}

_edit_boilerplate() {
  local path="$1$2"
  if [[ -d "$path" ]]; then
    if [[ -n $(command -v vifm) ]]; then
      vifm "$path"
    else
      $EDITOR "$path"
    fi
  else
    $EDITOR "$path"
  fi
}

_preview_boilerplate() {
  local path="$(realpath $1$2)"

  local files=($(find "$path" -type f))

  cat "$files"
}

# Program option parameters.
_PRINT_OPTION=0
_USE_DEBUG=0

# Options
_VERSION_OPTION=0

# Boilerplate
_BOILERPLATE_PATH_OPTION=0
_BOILERPLATE_PATH_ARG=""

# List
_LIST_OPTION=0
_LIST_ARG=""

_LIST_FORMAT_OPTION=0
_LIST_FORMAT_ARG="tree"

_TREE_LEVEL_OPTION=0
_TREE_LEVEL_ARG=9999

# Generate
_GENERATE_OPTION=0
_GENERATE_ARG=""
_GENERATE_ARG2=""

# New
_NEW_OPTION=0
_NEW_ARG=""
_NEW_ARG2=""

# Remove
_REMOVE_OPTION=0
_REMOVE_ARG=""

# Edit
_EDIT_OPTION=0
_EDIT_ARG=""

# Preview
_PREVIEW_OPTION=0
_PREVIEW_ARG=""

# Usage:
#   _require_argument <option> <argument>
#
# If <argument> is blank or another option, print an error message and exit
# with status 1.
_require_argument() {
  local _option="${1:-}"
  local _argument="${2:-}"

  if [[ -z "${_argument}" ]] || [[ "${_argument}" =~ ^- ]]
  then
    _die printf "Option requires a argument: %s\n" "${_option}"
  fi
}

while [ ${#} -gt 0 ]
do
  __option="${1:-}"
  __maybe_param="${2:-}"
  __maybe_param2="${3:-}"
  case "${__option}" in
    -h|--help)
      _PRINT_OPTION=1
      ;;
    -v|--version)
      _VERSION_OPTION=1;
      ;;
    --debug)
      _USE_DEBUG=1
      ;;
    l|ls|list)
      _LIST_OPTION=1;
      _LIST_ARG="${__maybe_param}";
      ;;
    n|new)
      _NEW_OPTION=1;
      _NEW_ARG="${__maybe_param}";
      _NEW_ARG2="${__maybe_param2}";
      ;;
    r|rm|remove)
      _REMOVE_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _REMOVE_ARG="${__maybe_param}";
      ;;
    g|generate)
      _GENERATE_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _GENERATE_ARG="${__maybe_param}";
      _GENERATE_ARG2="${__maybe_param2}";
      ;;
    p|preview)
      _PREVIEW_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _PREVIEW_ARG="${__maybe_param}";
      ;;
    e|edit)
      _EDIT_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _EDIT_ARG="${__maybe_param}";
      ;;
    -b|--boilerplate-path)
      _BOILERPLATE_PATH_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _BOILERPLATE_PATH_ARG="${__maybe_param}";
      ;;
    -L|--level)
      _TREE_LEVEL_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _TREE_LEVEL_ARG="${__maybe_param}";
      ;;
    -f|--format)
      _LIST_FORMAT_OPTION=1;
      _require_argument "${__option}" "${__maybe_param}"
      _LIST_FORMAT_ARG="${__maybe_param}";
      ;;
    --endopts)
      break
      ;;
    -*)
      _die printf "Unexpected option: %s\n" "${__option}"
      ;;
  esac
  shift
done

_main() {
  local boilerplates_path
  boilerplates_path=$(_get_boilerplates_path "$_BOILERPLATE_PATH_ARG")
  boilerplates_path="$(realpath "$boilerplates_path")/"

  if ((_PRINT_OPTION))
  then
    _print_help
  elif ((_VERSION_OPTION)); then
    _print_version
  elif ((_LIST_OPTION)); then
    _list_boilerplates "$boilerplates_path" "$_LIST_ARG" "$_LIST_FORMAT_ARG" "$_TREE_LEVEL_ARG"
  elif ((_NEW_OPTION)); then
    _new_boilerplate "$boilerplates_path" "$_NEW_ARG" "$_NEW_ARG2"
  elif ((_REMOVE_OPTION)); then
    _remove_boilerplate "$boilerplates_path" "$_REMOVE_ARG"
  elif ((_GENERATE_OPTION)); then
    _generate_boilerplate "$boilerplates_path" "$_GENERATE_ARG" "$_GENERATE_ARG2"
  elif ((_EDIT_OPTION)); then
    _edit_boilerplate "$boilerplates_path" "$_EDIT_ARG"
  elif ((_PREVIEW_OPTION)); then
    _preview_boilerplate "$boilerplates_path" "$_PREVIEW_ARG"
  else
    _list_boilerplates "$boilerplates_path" "$_LIST_ARG" "$_LIST_FORMAT_ARG" "$_TREE_LEVEL_ARG"
  fi
}

_main "${@:-}"

