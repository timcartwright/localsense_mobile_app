(function() {
  'use strict';

  angular
    .module('localsense.map')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
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