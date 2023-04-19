#!/bin/bash

# Path to the directory containing the extension files
EXTENSION_DIR=build/

# Path to the private key file in PEM format
KEY_FILE=build.pem

# Name of the output CRX file
CRX_FILE=build.crx

# Generate a DER formatted private key file
openssl rsa -in $KEY_FILE -outform DER -out key.der

# Pack the extension into a CRX file
google-chrome --pack-extension=$EXTENSION_DIR --pack-extension-key=$KEY_FILE

# Move the generated CRX file to the extension directory
mv $EXTENSION_DIR.crx $EXTENSION_DIR/$CRX_FILE

echo "Extension packaged successfully as $EXTENSION_DIR/$CRX_FILE"
