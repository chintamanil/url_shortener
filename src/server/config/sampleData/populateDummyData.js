import sampleUrls from './urls';
// import phishingUrls from 'phising_list';
import * as _ from 'lodash';
import mongoose from 'mongoose';
// import responseHandler from './../../api/helpers/responseHandler';
const Promise = require('bluebird');
mongoose.Promise = Promise;

const populateDummyData = () => {
    const UrlMapping = mongoose.model('UrlMapping');
    // const PhishingUrl = mongoose.model('PhishingUrl');

    UrlMapping.remove({}, () => {});
    // PhishingUrl.remove({}, () => {});

    // I was trying to add add the phising database.
    // TODO: Add phisinig database. API is missing http://sl-surgical.com/* check
    // TODO: phish_detail_url needs to be split into base, path domain etc
    // _.forEach(phishingUrls, (url) => {
    //     const createdUrl = new PhishingUrl({
    //         phish_detail_url: url.phish_detail_url,
    //         phish_id: url.phish_id,
    //         submission_time: url.submission_time,
    //         target: url.target,
    //         verified: url.verified,
    //         online: url.online
    //     });
    //     createdUrl.save();
    // });
    console.log('Node server Started at Port: 8089');
};
export default populateDummyData;
