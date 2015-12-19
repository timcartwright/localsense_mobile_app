(function() {
  'use strict';

  angular.module('localsense.welcome')
  .controller('WelcomeCtrl', ['$state', '$ionicPopup', '$log', 'AuthService', WelcomeCtrl]);

  function WelcomeCtrl($state, $ionicPopup, AuthService) {
    var welcome = this;

    welcome.beginGame = function() {
      $state.go('dashboard');
    };
    
  };

})();