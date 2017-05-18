#!/bin/bash
#
# This script is executed upon the first `vagrant up` or when running
# `vagrant up --provision`. You may use it to install any additional software
# that you require for your submission.
#
#
set -e

# Example

apt-get update
apt-get install tree
apt-get install git

# source ./node.sh
# source ./redis.sh
# source ./mongodb.sh

# source setup_redis_mongo.sh

git clone https://github.com/chintamanil/dotfiles.git
source dotfiles/bootstrap.sh
