(function() {
  'use strict';

  angular.module('localsense.login')
  .controller('LoginCtrl', ['$state', 'AuthService', LoginCtrl]);

  function LoginCtrl($state, AuthService) {
    var login = this;

    login.game = '';
    login.name = '';

    login.submit = function() {
      AuthService.logIn();
      $state.go('welcome');
    };
  };

})();