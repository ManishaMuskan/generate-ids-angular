'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller("MainCtrl", function($http, $location) {
    var vm = this;
    var url = "https://ops.epo.org/3.1/auth/accesstoken";
    var encoded_credentials = window.btoa('MoQnFnrm65c4eFiW4AhR0JFxkF0jUpPq:GtQaCOKwVEdNJlvA');
    this.logout = function(){
      $location.path("/");
    };

    $http({
      'method': 'GET',
      'url': "http://ops.epo.org/3.1/rest-services/published-data/publication/epodoc/US9623902/full-cycle.js",
'data-type': 'application/json'
      //'url': url,

      // 'Access-Control-Allow-Credentials': true,
      // 'Access-Control-Allow-Headers': Authorization,
      // 'Access-Control-Allow-Origin': '*'
      // 'headers': {
      //   'data-type': 'application/json',
      //   'content-type':'application/json'
      //   'Authorization': 'Basic ' + encoded_credentials,
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // },
      // 'data': {
      //   grant_type: 'client_credentials'
      // }
    }).then(function(response) {
      //First function handles success
      vm.content = response.data;
      console.log(content);
    }, function(response) {
      //Second function handles error
      vm.content = "Something went wrong";

    });
    //console.log(encoded_credentials);
  });
