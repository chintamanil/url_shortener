// 1. Validate incoming url has correct format
// 2. Validate incoming url is not phising using safegaurd
const Promise = require('bluebird');

function getLocation(href) {
    // TODO: NEED Better regex http://google/path1/path2 is not giving error
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    };
}

function checkUrlValidity(url) {
    return new Promise(function(resolve, reject) {
        const parsedUrl = getLocation(url);
        if (!parsedUrl) {
            reject({
                status: 404,
                message: 'Invalid Url String'
            });
        }
        resolve(parsedUrl);
    });
};

export default { checkUrlValidity };
