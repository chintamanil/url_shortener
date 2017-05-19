#!/bin/bash
# Useful to create server_name vagrant-test.local.com;

# nginx
sudo apt-get -y install nginx

# set up nginx server
sudo cp /vagrant/src/nginx.conf /etc/nginx/sites-available/site.conf
sudo chmod 644 /etc/nginx/sites-available/site.conf
sudo ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
sudo service nginx start

# FIGURE OUT PART BELOW
# clean /var/www
# sudo rm -Rf /var/www

# symlink /var/www => /vagrant
# ln -s /vagrant /var/www
