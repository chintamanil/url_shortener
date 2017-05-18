// 1. Add function to check phishing url AND OR ip in redis
// 2. TODO: move josn to db Can check IP after this

import rp from 'request-promise';
import config from './../../config/env';
const Promise = require('bluebird');

function checkPhishUrl(urlObj) {

    var options = {
        method: 'POST',
        uri: config.phishtank_api,
        form: {
            url: urlObj.href,
            api_key: config.phishtank_api_key,
            format: 'json'
        },
        json: true
    };

    return new Promise(function(resolve, reject) {
        return rp(options)
            .then(function(parsedBody) {
                if (parsedBody.results.in_database) {
                    reject({
                        status: 400,
                        message: 'Url is Phising Url: ' + urlObj.href
                    });
                }
                resolve({ href: parsedBody.results.url });
            })
            .catch(function(err) {
                reject({
                    status: 400,
                    message: 'Error in http request to: ' + config.phishtank_api
                });
            });
    });
}

export default checkPhishUrl;
