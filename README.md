# OpenDNS Coding Challenge Environment: Url Shortener

## Approach
* For Backend I used node.js along with bluebird promises. Tests are working for backend
* For frontend I used angular js. Ntests are written for frontend (needs final touch)
* For Vagrant I wrote bash script to setup node.js mongodb (was plannig to do reddis as well) 

## Details for Vagrant
I have setup node.js mongodb inside VM. 
I got puppet working for node.js but part of the code for mongodb needs work in puppet.

## DONE
[x] VM working for client and server with nginx
[x]  Server can minify VALID urls and check PHISHING
[x] Client makes request olny for valid urls. IF response is short hash displays link else error Message
[x] Unit tests working for Server [Check coverage for report]

## TO DO
[ ] Add support for redis inside backend API
[ ] For VM explore setup with puppet for node and mongodb
[ ] Redirect should be 301 when i paste say localhost:8080/x123. Right now its controller based

### Credentials
To log into the box, you can simply `vagrant ssh`, to ssh in as the `vagrant` user.
The `vagrant` user has passwordless sudo.

#### Python or other
If you choose to use Python, or another language that provides its own server
you may configure that server to serve on `0.0.0.0:8080`. This will be available
on http://localhost:8089/

#### MySQL
You can use the root user to get started (`mysql -uroot`).  Don't forget to provide code for setting up any databases you may create!
