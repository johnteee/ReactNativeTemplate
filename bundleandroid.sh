#!/bin/bash
export ENTRY_FILE=js/index.android.js
export PLATFORM=android
export BUNDLE_OUTPUT=android/app/src/main/assets/index.android.bundle
./commonbundle.sh $*
