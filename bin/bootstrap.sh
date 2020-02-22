#!/bin/bash

set -euo pipefail

# Generate vim keywords for each language
node "./bin/generate-keywords.js"

# Generate template keywords files
vim -N -u NONE -n -c "set nomore" -S "./bin/generate-language-template.vim"

# Generate HTML files where each character group is assigned a keyword class
node "./bin/generate-language-html.js"

# Copy the theme html files to src
html_files=$(find ./bin/templates -name *.html.txt )
for file in $html_files; do
  dir_name=$(basename $(dirname $file))
  mkdir -p "./src/templates/${dir_name}"
  cp $file "./src/templates/${dir_name}"
done

# Copy example files in txt format to easily copy example file to clipboard
example_files=$(find ./bin/templates -name *.example.* )
for file in $example_files; do
  dir_name=$(basename $(dirname $file))
  mkdir -p "./src/templates/${dir_name}"
  cp $file "./src/templates/${dir_name}/${dir_name}.example.txt"
done

