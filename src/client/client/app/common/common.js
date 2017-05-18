import angular from 'angular';
import appConstants from './config/app.constants.module';
import postLongUrlModule from './services/postLongUrl/postLongUrl.module';
import validateShortUrlModule from './services/validateShortUrl/validateShortUrl.module'

let commonModule = angular.module('app.common', [
    appConstants,
    postLongUrlModule,
    validateShortUrlModule
])

.name;

export default commonModule;
