(function() {
  'use strict';

  angular
    .module('localsense')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    // $stateProvider
    //   .state('login', {
    //     url: '/',
    //     templateUrl: '/login/login.html',
    //     controller: 'LoginCtrl',
    //     controllerAs: 'login'
    //   });

    $urlRouterProvider.otherwise('/login');
  }

})();