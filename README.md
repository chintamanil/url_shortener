# Url Shortener

## Running Application
* `vagrant up --provision` Should install node.js mongodb and redis.
* It will setup nginx proxy for server to localhost:8089 
* It will setup nginx proxy for client to localhost:8080

## Approach
* For Backend I used node.js along with bluebird promises. Tests are working for backend
* For frontend I used angular js. Tests are written for frontend (needs final touch)
* For Vagrant I wrote bash script to setup node.js mongodb (was planning to do redis as well) 

## Details for Vagrant
I have setup node.js mongodb inside VM. 
I got puppet working for node.js but part of the code for mongodb needs work in puppet.

## DONE
- [x] VM working for client and server with nginx
- [x]  Server can minify VALID urls and check PHISHING
- [x] Client makes request olny for valid urls. IF response is short hash displays link else error Message
- [x] Unit tests working for Server [Check coverage for report]
- [x] Stress Testing of API using `npm install -g artillery`. Results in server/stressTest

## TODO
- [ ] Add support for redis inside backend API
- [ ] For VM explore setup with puppet for node and mongodb
- [ ] Redirect should be 301 when I paste say localhost:8080/x123. Right now its controller-based
