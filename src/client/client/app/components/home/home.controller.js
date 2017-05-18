class HomeController {
    constructor(postLongUrlService, AppConstants, validateShortUrlService) {
        'ngInject';
        this._AppConstants = AppConstants;
        this.formObj = { longUrl: 'http://google.com/path1/path2' };
        this.showResult = false;
        this.submitLongUrl = function(longUrl) {
            postLongUrlService.validate(longUrl)
                .then((res) => {
                    this.shortHash = res.data.shortUrl;
                    this.shortUrl = this._AppConstants.baseUrl +  this.shortHash;
                    this.formObj = { longUrl: '' };
                    this.showResult = this.formObj.longUrl === '';
                });
        };

        this.validateShortUrl = function(shortUrl){
          validateShortUrlService.validate(shortUrl)
              .then((res) => {
                // console.log(res);
                window.location = res.data.longUrl;
              });
        }
    }
}

export default HomeController;
