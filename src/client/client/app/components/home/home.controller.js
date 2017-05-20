class HomeController {
    constructor(postLongUrlService, AppConstants, validateShortUrlService) {
        'ngInject';
        this._AppConstants = AppConstants;
        this.formObj = { longUrl: 'http://www.cisco.com/c/en/us/about/careers/working-at-cisco/engineering.html' };
        this.showResult = false;
        this.isValid = true;
        this.fromReset = function(showString, isValid = true) {
            this.isValid = isValid;
            this.shortUrl = showString;
            this.formObj = { longUrl: '' };
            this.showResult = this.formObj.longUrl === '';
        }

        this.submitLongUrl = function(longUrl) {
            postLongUrlService.validate(longUrl)
                .then((res) => {
                    this.shortHash = res.data.shortUrl;
                    this.fromReset(this._AppConstants.baseUrl + this.shortHash, true);
                }).catch((error) => {
                    this.fromReset(error.data, false);
                });
        };

        this.validateShortUrl = function(shortUrl) {
            validateShortUrlService.validate(shortUrl)
                .then((res) => {
                    // console.log(res);
                    window.location = res.data.longUrl;
                });
        }
    }
}

export default HomeController;
