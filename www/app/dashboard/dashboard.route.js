(function() {
  'use strict';

  angular
    .module('localsense.dashboard')
    .config(['$stateProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard',
        authenticate: false
      });
  };

})();