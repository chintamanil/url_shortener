import AppConstants from './app.constants';
import angular from 'angular';

let appConstants = angular.module('app.constants', [])
    .constant('AppConstants', AppConstants)
    .name;

export default appConstants;
