import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
    done();
});

describe('## Item APIs', () => {
    const url = {
        'longUrl': 'http://google.com/path1/path2'
    };
    let shortUrl = '';
    describe('# POST /api/urls', () => {
        it('should create a new shortUrl', (done) => {
            request(app)
                .post('/api/urls')
                .send(url)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.shortUrl).to.have.lengthOf(6);
                    expect(res.body.numberOfClicks).to.equal(0);
                    shortUrl = res.body.shortUrl;
                    done();
                })
                .catch(done);
        });

        const phishingUrl = { 'longUrl': 'http://sl-surgical.com/pip.php' };
        it('should report error with message - Not found, when longUrl is phishing Url', (done) => {
            request(app)
                .post('/api/urls')
                .send(phishingUrl)
                .then((res) => {
                    expect(res.body.message).to.equal('Url is Phising Url: http://sl-surgical.com/pip.php');
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/urls/:shortUrl', () => {
        it('should get details for shortUrl', (done) => {
            request(app)
                .get(`/api/urls/${shortUrl}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.longUrl).to.equal(url.longUrl);
                    done();
                })
                .catch(done);
        });

        it('should report error with message - Not found, when shortUrl does not exists', (done) => {
            request(app)
                .get('/api/urls/aaaaaa')
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });



    describe('# GET /api/urls/', () => {
        it('should get all urls', (done) => {
            request(app)
                .get('/api/urls')
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    done();
                })
                .catch(done);
        });
    });
});
