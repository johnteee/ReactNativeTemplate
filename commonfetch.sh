#!/bin/bash
echo ARGS: $*
curl 'http://localhost:8081/$ENTRY_FILE?dev=false&minify=true&platform=$PLATFORM' -o $BUNDLE_OUTPUT $*
