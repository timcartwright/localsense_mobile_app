(function() {
  'use strict';

  angular.module('localsense.locations')
  .controller('LocationsCtrl', ['$state', '$ionicPopup', '$log', 'AuthService', LocationsCtrl]);

  function LocationsCtrl($state, $ionicPopup, AuthService) {
    var locations = this;

  };

})();