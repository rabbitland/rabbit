#/bin/bash
rm -rf dist/
mkdir dist/
cp ./tools/Watcher.js ./node_modules/parcel-bundler/src/Watcher.js
(./node_modules/.bin/parcel watch index.html; [ "$?" -lt 2 ] && kill "$$") &
(./node_modules/.bin/parcel watch main.ts --target=electron; [ "$?" -lt 2 ] && kill "$$") &
(./node_modules/.bin/parcel watch preload.ts --target=electron; [ "$?" -lt 2 ] && kill "$$") &
./node_modules/.bin/live-server --host=0.0.0.0 --no-browser dist/
