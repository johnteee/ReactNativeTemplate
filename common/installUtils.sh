#!/bin/bash

touch ~/.bash_profile
source ~/.bash_profile

# NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
# NodeJs
nvm install node && nvm alias default node

# ReactNative
npm install react-native
# ReactNative command-line tools(Global)
npm install -g react-native-cli
# ReactNative PM
npm install rnpm -g


