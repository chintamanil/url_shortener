#!/bin/bash
#
# This script is executed upon the first `vagrant up` or when running
# `vagrant up --provision`. You may use it to install any additional software
# that you require for your submission.
#
#
set -e

# Example

sudo apt-get  -y update
sudo apt-get install -y tree
sudo apt-get install -y git
sudo apt-get install -y vim
# # these make the terminal look much better
# git clone https://github.com/chintamanil/dotfiles.git
# source dotfiles/bootstrap.sh

sudo yarn global add gulp

cd /vagrant/src/server # PORT 8089
yarn install
cd dist
# gulp has already setup dist need to just run the index.js
node index.js &

cd /vagrant/src/client # PORt 8088
yarn install
npm rebuild node-sass
gulp serve &

cd ~
