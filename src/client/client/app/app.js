import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import angularMessages from 'angular-messages';
import angularSanitize from 'angular-sanitize';
import 'normalize.css';

angular.module('app', [
        uiRouter,
        Common,
        Components,
        angularMessages,
        angularSanitize
    ])
    .config(($locationProvider) => {
        'ngInject';
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .run(($window, $rootScope) => {
        'ngInject';
        $rootScope.goBack = () => {
            $window.history.back();
        }
    })
    .component('app', AppComponent);
