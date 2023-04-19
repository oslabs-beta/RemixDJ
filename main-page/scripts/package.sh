#!/bin/bash

# Define the path to your project's build files directory
build_directory='./build'

# Define the name and path of the output zip file
zip_file_path='./production.zip'

# Zip the build directory and save it to the output zip file
zip -r "$zip_file_path" "$build_directory"

echo "Build files packaged into $zip_file_path"
