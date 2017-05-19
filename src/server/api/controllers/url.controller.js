import UrlMapping from '../models/urlMapping.model';
import * as _ from 'lodash';
import { checkUrlValidity } from '../services/validation.service';
import { encode, decode } from '../services/encodeDecode.service';
import hashingUrl from '../services/hashing.service';
import checkPhishUrl from '../services/checkPhishUrl.service'

const Promise = require('bluebird');

/**
 * Load UrlMapping and append to req.
 * @property {string} shortUrl. - The shortUrl that needs to be checked in DB.
 * @returns {UrlMapping}
 */
function load(req, res, next, shortUrl) {
    // 1. Check in Cache or Redis
    // 2. Check in Database - DONE
    // 3. Return long URL or http code 404 Not Found - DONE
    UrlMapping.findByShortUrl(shortUrl)
        .then((urlObj) => {
            res.json(urlObj);
            return next();
        })
        .catch((errorObj) => next(errorObj));
}

/**
 * Get url
 * @property {string} req.body. - The UrlMapping Object: shortUrl.
 * @returns {UrlMapping}
 */
function get(req, res) {
    return res.send();
}

/**
 * Create new UrlMapping
 * @property {string} req.body. - The UrlMapping Object: longUrl.
 * @returns {UrlMapping}
 */
function create(req, res, next) {
    // 0. validate if url format is correct -DONE
    // 1. check in Cache / Redis
    // 2. validation service for phishing - DONE
    // 3. Convert longUrl to Short Url -DONE
    // 4. Add to Redis & Database -DONE ADDED TO DB
    // 5. Return Short URL or http code 401 for failure in 2. -DONE
    const longUrl = req.body.longUrl;
    return checkUrlValidity(longUrl)
        .then((result) => result)
        .then((urlObj) => checkPhishUrl(urlObj))
        .then((urlObjForPhising) => hashingUrl(urlObjForPhising))
        .then((shortObj) => UrlMapping.create(shortObj))
        .then((storedObj) => {
            res.json(storedObj);
        })
        .catch((errorObj) => {
            // Generic catch-the rest, error wasn't TypeError etc
            res.writeHead(errorObj.status, {"Content-Type": "application/json"});
            res.write(JSON.stringify(errorObj));
            res.end();
        });
}

/**
 * TODO : DO I NEED THIS ??
 * Update existing UrlMapping
 * @property {string} req.body - The UrlMapping Object.
 * @returns {UrlMapping}
 */
function update(req, res, next) {
    let mapping = req.mapping;
    _.map(req.body, (value, key) => {
        mapping[key] = value;
    });

    mapping.save()
        .then((savedUrlMapping) => res.json(savedUrlMapping))
        .catch((e) => next(e));
}

/**
 * Get UrlMapping list.
 * @property {number} req.query.skip - Number of urls to be skipped.
 * @property {number} req.query.limit - Limit number of urls to be returned.
 * @returns {UrlMapping[]}
 */
function list(req, res, next) {
    const { limit = 250, skip = 0 } = req.query;
    UrlMapping.list({ limit, skip })
        .then((urls) => res.json(urls))
        .catch((e) => next(e));
}

/**
 * Delete UrlMapping.
 * @property {string} req.body. - The UrlMapping Object: shortUrl.
 * @returns {UrlMapping}
 */
function remove(req, res, next) {
    // TODO: Get this working
    const shortUrl = req.body.shortUrl;
    const shortUrlobj = UrlMapping.findByShortUrl(shortUrl);
    shortUrlobj.remove()
        .then((deletedUrlMapping) => res.json(deletedUrlMapping))
        .catch((e) => next(e));
}

export default { load, get, create, update, list, remove };
