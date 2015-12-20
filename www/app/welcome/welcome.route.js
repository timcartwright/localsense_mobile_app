(function() {
  'use strict';

  angular
    .module('localsense.welcome')
    .config(['$stateProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider) {
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