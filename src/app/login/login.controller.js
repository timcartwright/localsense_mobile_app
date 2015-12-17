(function() {
  'use strict';

  angular.module('localsense.login')
  .controller('LoginCtrl', ['$state', '$ionicPopup', '$log', 'AuthService', LoginCtrl]);

  function LoginCtrl($state, $ionicPopup, $log, AuthService) {
    var login = this;

    login.game = '';
    login.name = '';

    login.submit = function() {
      AuthService.logIn();
      $log.debug(AuthService.isAuthorised());
      $state.go('login');
    };

    $log.debug('LoginCtrl end');
  };

})();