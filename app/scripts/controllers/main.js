'use strict';

/**
 * @ngdoc function
 * @name yoemanIdsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoemanIdsApp
 */
angular.module('yoemanIdsApp')
  .controller("MainCtrl", function($scope, $location, mydatafetcher) {
    var vm = this;
    vm.patentCode = "US9623902";
    vm.findPatentInfo = function() {
      vm.showData = true;
      mydatafetcher.getData(vm.patentCode).then(function(response) {
          if (response.data != null || response.data != 'undefined') {
            vm.inventors = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['inventors']['inventor'];
            vm.k_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@kind'];
            vm.c_code = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['@country'];
            vm.applicants = response.data['ops:world-patent-data']['exchange-documents']['exchange-document']['bibliographic-data']['parties']['applicants']['applicant'];
          } else {
            alert("Some Bad Request !! Try with valid data");
          }
        },
        function(response) {
          vm.s_code = response.statusCode;
          vm.description = response.statusCode;
        });
    }
  });
