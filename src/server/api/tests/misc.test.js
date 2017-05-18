import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

describe('## Misc', () => {
    describe('# GET /api/health-check', () => {
        it('should return OK', (done) => {
            request(app)
                .get('/api/health-check')
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.text).to.equal('OK');
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/404', () => {
        it('should return 404 status', (done) => {
            request(app)
                .get('/api/404')
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });

    describe('# Error Handling', () => {
        it('should handle mongoose CastError - Cast to ObjectId failed', (done) => {
            request(app)
                .get('/api/urls/56z787zzz67fc')
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });

        // it('should handle express validation error - url is required', (done) => {
        //     request(app)
        //         .post('/api/urls')
        //         .send({
        //           longUrl: 'http'
        //         })
        //         .expect(httpStatus.BAD_REQUEST)
        //         .then((res) => {
        //             expect(res.body.message).to.equal('Invalid Url String');
        //             done();
        //         })
        //         .catch(done);
        // });
    });
});
