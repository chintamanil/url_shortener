import angular from 'angular';
import postLongUrlService from './postLongUrl.service';

let postLongUrlModule = angular.module('postLongUrlModule', [])

.service('postLongUrlService', postLongUrlService)

.name;

export default postLongUrlModule;
