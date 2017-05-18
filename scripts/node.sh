cd;
echo "Installing node.js & npm"
curl -sL https://rpm.nodesource.com/setup | sudo bash -;
yum install -y nodejs;
yum install -y gcc-c++ openssl-devel make; #Optional but useful.
npm install jasmine-node -g; #For testing.
