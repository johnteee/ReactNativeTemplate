#!/bin/bash
echo ARGS: $*
react-native bundle --entry-file $ENTRY_FILE --platform $PLATFORM --bundle-output $BUNDLE_OUTPUT $*
