(function() {
  'use strict';

  angular
    .module('localsense.welcome')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome',
        authenticate: true
      });
  };

})();