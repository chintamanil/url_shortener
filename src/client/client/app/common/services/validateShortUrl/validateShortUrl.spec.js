(function(expect, describe, it, window, angular, ngDescribe) {
    'use strict';
    /*global ngDescribe:false */
    /*global it:false */
    /*global expect:false */
    /*global spyOn:false */

    ngDescribe({
        name: 'validateShortUrlService test ',
        only: false,
        modules: ['app.constants'],
        inject: ['validateShortUrlService', 'AppConstants', '$http', '$q'],
        verbose: false,
        http: {
            get: {
                'http://localhost:4040/api/urls':  [200, {message: 'ok'},  'this is the new response']
            }
        },
        tests(deps) {
            it('validateShortUrlService ', function(done) {
                deps.validateShortUrlService.validate('www.google.com').then(function(response) {
                    // expect(response.data).to.equal('foo') // check length
                    expect(response.status).to.equal(200)
                    done();
                });
                deps.http.flush();
            });
        }
    });

})(chai.expect, describe, it, this, angular, ngDescribe);
