(function() {
  'use strict';

  angular.module('localsense.login')
  .controller('LoginCtrl', ['$state', 'AuthService', LoginCtrl]);

  function LoginCtrl($state, AuthService) {
    var login = this;

    login.game = '';
    login.id = '';

    login.submit = function() {
      AuthService.logIn(login.game, login.id)
        .then(function(login) {
          console.log(login);
          $state.go('welcome');
        });
    };
  };

})();