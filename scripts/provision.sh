#!/bin/bash
#
# This script is executed upon the first `vagrant up` or when running
# `vagrant up --provision`. You may use it to install any additional software
# that you require for your submission.
#
#
set -e

# Example

# sudo apt-get  -y update
sudo apt-get install -y tree
sudo apt-get install -y git
sudo apt-get install vim
sudo npm install -g nodemon
# # these make the terminal look much better
# git clone https://github.com/chintamanil/dotfiles.git
# source dotfiles/bootstrap.sh

sudo yarn global add gulp

cd /var/www/client # PORT 8088
npm rebuild node-sass
yarn install
gulp serve &

cd /var/www/server/dist # PORT 8089
# gulp has already setup dist need to just run the index.js
nodemon index.js

sudo service nginx restart

cd ~
