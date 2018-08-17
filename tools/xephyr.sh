#!/bin/bash
(Xephyr -br :1 -screen 900x800; [ "$?" -lt 2 ] && kill "$$") &
DISPLAY=:1 ./tools/electron.sh
