import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
    uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        })
        .state('reroute', {
            url: '/:shortUrl',
            controller: function($state, $stateParams, validateShortUrlService) {
                if (typeof $stateParams.shortUrl !== 'undefined') {
                    console.log('in state', $stateParams.shortUrl);
                    validateShortUrlService.validate($stateParams.shortUrl)
                        .then((res) => {
                            window.location = res.data.longUrl;
                        }).catch((err) => {
                            alert(err.data);
                            window.location = 'http://localhost:8080';
                            // TODO: validation error create alret box
                        });
                }
            }
        })
})

.component('home', homeComponent)

.name;

export default homeModule;
