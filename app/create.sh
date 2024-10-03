#!/bin/bash

# List of folder names
folders=(
  "education"
  "research"
  "innovation"
  "admissions"
  "campus"
  "life"
  "news"
  "alumni"
  "about"
  "tongle"
)

# Loop through the folder names
for folder in "${folders[@]}"; do
  # Create the folder
  mkdir -p "$folder"
  
  # Create page.tsx file inside the folder
  touch "$folder/page.tsx"
  
  echo "Created folder '$folder' with page.tsx file"
done

echo "All folders and files have been created successfully."