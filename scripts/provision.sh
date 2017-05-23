#!/bin/bash
#
# This script is executed upon the first `vagrant up` or when running
# `vagrant up --provision`. You may use it to install any additional software
# that you require for your submission.
#
#
set -e

sudo apt-get  -y update
sudo apt-get install -y tree
sudo apt-get install -y git
sudo apt-get install vim
sudo npm install -g nodemon

# # these make the terminal look much better
# git clone https://github.com/chintamanil/dotfiles.git
# source dotfiles/bootstrap.sh

sudo yarn global add gulp

# Start Client
cd /var/www/client # PORT 8080
npm rebuild node-sass
yarn install
gulp serve &

# Start Server
cd /var/www/server # PORT 8089
yarn install
gulp serve

sudo service nginx restart

cd ~
