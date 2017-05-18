class postLongUrlService {
    constructor(AppConstants, $http, $q) {
        "ngInject";
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
    }
    validate(longUrl) {
        let deferred = this._$q.defer();
        this._$http({
            url: this._AppConstants.api + 'urls',
            data: JSON.stringify({ longUrl: longUrl }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(
            (res) => {
                return deferred.resolve(res);
            },
            (err) => deferred.reject(err)
        );
        return deferred.promise;
    }
}

export default postLongUrlService;
