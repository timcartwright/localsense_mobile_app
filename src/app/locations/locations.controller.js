(function() {
  'use strict';

  angular.module('localsense.locations')
  .controller('LocationsCtrl', ['$state', '$ionicPopup', 'AuthService', 'DataService', LocationsCtrl]);

  function LocationsCtrl($state, $ionicPopup, AuthService, DataService) {
    var locations = this;

    locations.list = DataService.locations();

    locations.selectLocation = function(itemId) {
      DataService.setCurrentLocation(itemId);
      $state.go('dashboard')
    };

  };

})();