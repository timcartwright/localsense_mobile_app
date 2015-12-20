(function() {
  'use strict';

  angular
    .module('localsense.map')
    .config(['$stateProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/map',
        templateUrl: 'app/map/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map',
        authenticate: true
      });
  };

})();