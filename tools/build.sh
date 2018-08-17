#!/bin/bash
rm -rf dist/
mkdir dist/
./node_modules/.bin/parcel build index.html
./node_modules/.bin/parcel build main.ts --target=electron
./node_modules/.bin/parcel build preload.ts --target=electron
cmake .
make
