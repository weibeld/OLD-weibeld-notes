#/bin/bash
#
# Set up category page and directory for a new category.
#
# Must be executed from the root of the project.

set -e

[[ -z "$1" ]] && {
  echo "Usage: $(basename $0) CATEGORY_NAME"
  echo "Execute from root of project!"
  exit 1
}
name=$1

cp _categories/android.md _categories/"$name".md
sed -i '' "s/android/${name}/" _categories/"$name".md
mkdir _"$name"
