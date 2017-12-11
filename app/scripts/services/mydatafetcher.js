'use strict';

/**
 * @ngdoc service
 * @name yoemanIdsApp.mydatafetcher
 * @description
 * # mydatafetcher
 * Service in the yoemanIdsApp.
 */
angular.module('yoemanIdsApp')
  .config(function($sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://ops.epo.org/**'
      ]);
    })
    .service('mydatafetcher', function($http) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      this.getData = function (patentCode) {

          //$http.defaults.headers.get = {'Content-Type': 'application/x-www-form-urlencoded'};
         return $http({
            url: 'http://ops.epo.org/3.1/rest-services/published-data/publication/epodoc/' + patentCode + '/biblio.js',
            method: 'jsonP'
          });

      }
    });




    // $.ajax({
    //   url: 'http://ops.epo.org/3.1/rest-services/published-data/publication/epodoc/' + 'US9623902' + '/biblio.js',
    //   type: 'GET',
    //   dataType: "jsonP",
    //   success: function(data) {
    //     return data;
    //   }});









    // var biblionum = angular.module('biblioApp', []);//your app
    // biblionum.service('CategorieService', function($http) {
    //     this.getAll = function() {
    //         return $http({
    //             method: 'GET',
    //             url: 'ouvrage?action=getcategorie',
    //             // pass in data as strings
    //             headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
    //         }).then(function(data) {
    //                     return data;
    //                 })
    //     }
    // });
    // biblionum.controller('libraryController', function($scope,CategorieService) {
    //     var cat = CategorieService.getAll();
    //     cat.then(function(data) {
    //         $scope.categories = data.data;//don't forget "this" in the service
    //     })
    //   });
