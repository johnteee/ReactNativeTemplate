#!/bin/bash
export ENTRY_FILE=js/index.ios.js
export PLATFORM=ios
export BUNDLE_OUTPUT=ios/main.jsbundle
./commonbundle.sh $*
#react-native bundle --entry-file js/index.ios.js --platform ios --bundle-output ios/main.jsbundle
