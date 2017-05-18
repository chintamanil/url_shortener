import mongoose from 'mongoose';
import responseHandler from './../helpers/responseHandler';
const Schema = mongoose.Schema;
/**
 * Url Schema
 */
/*
 "details": [
            {
                "announcing_network": "7162",
                "cidr_block": "187.17.111.0/24",
                "country": "BR",
                "detail_time": "2017-05-17T16:54:34+00:00",
                "ip_address": "187.17.111.104",
                "rir": "lacnic"
            }
        ],
        "online": "yes",
        "phish_detail_url": "http://www.phishtank.com/phish_detail.php?phish_id=5003594",
        "phish_id": "5003594",
        "submission_time": "2017-05-17T16:54:05+00:00",
        "target": "Other",
        "url": "http://www.suporte-caixaaqui.com.br/index.html",
        "verification_time": "2017-05-17T16:55:35+00:00",
        "verified": "yes"
    },
*/
const options = {
    versionKey: false,
    autoIndexId: false
};
const PhishingUrlSchema = new mongoose.Schema({
    phish_detail_url: { type: String, required: true, trim: true },
    phish_id: { type: Number, required: true },
    submission_time: { type: Date },
    target: { type: String, required: true },
    verified: { type: String, required: true },
    online: { type: String, required: true }
}, options);

/**
 * Methods
 */
PhishingUrlSchema.method({});

/**
 * Statics
 */
PhishingUrlSchema.statics = {
    /**
     * Get url
     * @param {ObjectId} id - The objectId of url.
     * @returns {Promise<Url, APIError>}
     * @api private
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((url) => {
                return responseHandler(url);
            });
    },

    create(shortObj) {
        // TODO: remove _id from result
        const mapping = new this(shortObj);
        return mapping.save()
            .then((savedUrlMapping) => {
                return savedUrlMapping;
            })
    },

    /**
     * Get url from url name
     * @param {ObjectId} iname- The name of url.
     * @returns {Promise<Url, APIError>}
     * @api private
     */
    findByLongUrl(longUrl) {
        return this.find({ longUrl: longUrl })
            .exec()
            .then((url) => {
                return responseHandler(url);
            });
    },

    /**
     * List Urls in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<Url[]>}
     * @api private
     */
    list({ skip = 0, limit = 250 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
    }
};

/**
 * @typedef Url
 */
export default mongoose.model('PhishingUrl', PhishingUrlSchema);
