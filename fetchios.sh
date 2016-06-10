#!/bin/bash
export ENTRY_FILE=index.ios.js
export PLATFORM=ios
export BUNDLE_OUTPUT=ios/main.jsbundle
./commonfetch.sh $*
#curl 'http://localhost:8081/index.ios.bundle?dev=false&minify=true&platform=ios' -o main.jsbundle
