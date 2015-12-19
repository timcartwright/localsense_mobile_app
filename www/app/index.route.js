(function() {
  'use strict';

  angular
    .module('localsense')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '/main/login.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();