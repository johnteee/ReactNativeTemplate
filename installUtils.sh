#!/bin/bash

touch ~/.bash_profile
source ~/.bash_profile

# NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
# NodeJs
nvm install node && nvm alias default node
npm install --registry https://registry.nodejitsu.com

# Pod
sudo gem install cocoapods


