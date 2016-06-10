#!/bin/bash
(JS_DIR=`pwd`/js; cd node_modules/react-native; npm run start -- --root $JS_DIR)