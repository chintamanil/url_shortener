#!/bin/bash
# Useful to create server_name vagrant-test.local.com;

# nginx
sudo apt-get -y install nginx

# set up nginx server
sudo cp /vagrant/src/.nginx/nginx.conf /etc/nginx/sites-available/site.conf
sudo chmod 644 /etc/nginx/sites-available/site.conf
sudo ln -sfn /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf
#client
sudo cp -rf /vagrant/src/.nginx/client.conf /etc/nginx/sites-available/
sudo chmod 644 /etc/nginx/sites-available/client.conf
sudo ln -sfn /etc/nginx/sites-available/client.conf /etc/nginx/sites-enabled/client
#server
sudo cp -rf /vagrant/src/.nginx/server.conf /etc/nginx/sites-available/
sudo chmod 644 /etc/nginx/sites-available/server.conf
sudo ln -sfn /etc/nginx/sites-available/server.conf /etc/nginx/sites-enabled/server

sudo service nginx start
