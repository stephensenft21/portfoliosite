#!/bin/bash

# Check if the script is being run with the correct number of arguments
if [ $# -ne 1 ]; then
    echo "Usage: $0 <directory>"
    exit 1
fi

# Check if the specified directory exists
if [ ! -d "$1" ]; then
    echo "Error: Directory '$1' does not exist."
    exit 1
fi

# Loop through all .js and .jsx files in the specified directory and its subdirectories
find "$1" -type f \( -iname "*.js" -o -iname "*.jsx" \) -not -path "*node_modules*" -exec sh -c '
    # Get the full path of the current file
    file="$1"

    # Convert .js to .ts and .jsx to .tsx
    new_file="${file%.js}.ts"
    if [[ "$file" == *.jsx ]]; then
        new_file="${file%.jsx}.tsx"
    fi

    # Rename the file
    mv "$file" "$new_file"
' _ {} \;

# Create tsconfig.json if it doesn't exist
if [ ! -f "tsconfig.json" ]; then
    npx tsc --init
fi

# Add "jsx": "react-jsx" to tsconfig.json
jq '.compilerOptions.jsx |= "react-jsx"' tsconfig.json > tmp.json && mv tmp.json tsconfig.json