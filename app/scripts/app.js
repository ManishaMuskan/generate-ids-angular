'use strict';

/**
 * @ngdoc overview
 * @name yoemanIdsApp
 * @description
 * # yoemanIdsApp
 *
 * Main module of the application.
 */
angular
  .module('yoemanIdsApp', [
    'ngAnimate',
    'ngRoute',
    '720kb.datepicker',
    'oauth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/getStarted.html',
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'registration'
      })
      .when('/claimPatent', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/404', {
        templateUrl: '404.html',
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
