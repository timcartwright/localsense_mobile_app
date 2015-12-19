(function() {
  'use strict';

  angular
    .module('localsense.locations')
    .config(routerConfig);

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