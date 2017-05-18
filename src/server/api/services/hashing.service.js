var ids = require('short-id');

const Promise = require('bluebird');

ids.configure({
    length: 6, // The length of the id strings to generate
    algorithm: 'sha1', // The hashing algoritm to use in generating keys
    salt: Math.random // A salt value or function
});

function hashingUrl(urlObj) {
    return new Promise(function(resolve, reject) {
        const shortUrl = ids.store(urlObj.href);
        if (!shortUrl) {
            reject({
                status: 400,
                message: 'Invalid Hash String'
            });
        }
        resolve({
            longUrl: urlObj.href,
            shortUrl: shortUrl,
            clicks: 0
        });
    });
};

export default hashingUrl;
