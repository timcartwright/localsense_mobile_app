(function() {
  'use strict';

  angular
    .module('localsense.locations')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('locations', {
        url: '/locations',
        templateUrl: 'app/locations/locations.html',
        controller: 'LocationsCtrl',
        controllerAs: 'locations',
        authenticate: false
      });
  };

})();