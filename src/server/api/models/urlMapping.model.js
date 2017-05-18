import mongoose from 'mongoose';
import responseHandler from './../helpers/responseHandler';
const Schema = mongoose.Schema;
/**
 * Url Schema
 */
const options = {
    versionKey: false,
    autoIndexId: false
};

const UrlMappingSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    numberOfClicks: {
        type: Number,
        default: 0
    }
}, options);

/**
 * Methods
 */
UrlMappingSchema.method({});

/**
 * Statics
 */
UrlMappingSchema.statics = {
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
            .then((savedUrlMapping) => savedUrlMapping);
    },

    /**
     * Get url from longUrl
     * @param {ObjectId} iname- The UrlObj.
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
     * TODO: Combine with findByLongUrl
     * Get urlObj from shortUrl
     * @param {ObjectId} iname- The UrlObj.
     * @returns {Promise<Url, APIError>}
     * @api private
     */
    findByShortUrl(shortUrl) {
        return this.findOneAndUpdate(
                { 'shortUrl': shortUrl },
                { '$inc': { 'numberOfClicks': 1 } },
                { new: true }
            )
            .exec()
            .then((urlObj) => {
                return responseHandler(urlObj, 'ShortUrl not found in DataBase');
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
export default mongoose.model('UrlMapping', UrlMappingSchema);
