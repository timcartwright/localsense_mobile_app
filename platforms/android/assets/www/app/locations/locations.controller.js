(function() {
  'use strict';

  angular.module('localsense.locations')
  .controller('LocationsCtrl', ['$state', '$ionicPopup', 'AuthService', 'DataService', LocationsCtrl]);

  function LocationsCtrl($state, $ionicPopup, AuthService, DataService) {
    var locations = this;

    locations.list = DataService.gameLocations();

    locations.selectLocation = function(itemId) {
      DataService.setCurrentGameLocation(itemId);
      $state.go('dashboard');
    };

  };

})();