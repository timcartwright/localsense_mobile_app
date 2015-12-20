(function() {
  'use strict';

  angular
    .module('localsense.locations')
    .config(['$stateProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider) {
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