import Joi from 'joi';

// const regexString = "^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$";
// const reg = new RegExp(regexString);

export default {
    // POST /api/urls
    createUrl: {
        body: {
            longUrl: Joi.string().regex(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).required()
        }
    },

    // UPDATE /api/urls/:userId
    updateUrl: {
        body: {
            longUrl: Joi.string().regex(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/).required()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    },

    // get /api/urls/:urlHash
    getUrl: {
        params: {
            shortUrl: Joi.string().min(3).max(30).required()
        }
    }

};
