class validateShortUrlService {
    constructor(AppConstants, $http, $q) {
        "ngInject";
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
    }
    validate(shortUrl) {
        let deferred = this._$q.defer();
        this._$http({
            url: this._AppConstants.api + 'urls/' + shortUrl,
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        }).then(
            (res) => {
                return deferred.resolve(res);
            },
            (err) => deferred.reject(err)
        );
        return deferred.promise;
    }
}

export default validateShortUrlService;
