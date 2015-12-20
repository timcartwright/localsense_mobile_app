(function() {
  'use strict';

  angular
    .module('localsense.login')
    .config(['$stateProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login',
        authenticate: false
      });
  };

})();