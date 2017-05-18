import APIError from './APIError';
import httpStatus from 'http-status';
import Promise from 'bluebird';

const errorMessage = 'No such url exists!';

function responseHandler(urlObj, message = errorMessage, code = httpStatus.NOT_FOUND) {
    if (urlObj) {
        return urlObj;
    }
    const err = new APIError(message, code);
    return Promise.reject(err);

}

export default responseHandler;
