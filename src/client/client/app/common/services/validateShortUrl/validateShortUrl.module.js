import angular from 'angular';
import validateShortUrlService from './validateShortUrl.service';

let validateShortUrlModule = angular.module('validateShortUrlModule', [])

.service('validateShortUrlService', validateShortUrlService)

.name;

export default validateShortUrlModule;
