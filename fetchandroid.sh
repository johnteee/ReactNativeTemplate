#!/bin/bash
export ENTRY_FILE=index.android.js
export PLATFORM=android
export BUNDLE_OUTPUT=android/app/src/main/assets/index.android.bundle
./commonfetch.sh $*
#curl 'http://localhost:8081/index.ios.bundle?dev=false&minify=true&platform=ios' -o main.jsbundle
