(function() {
  'use strict';

  angular.module('localsense.dashboard')
  .controller('DashboardCtrl', ['$state', '$ionicPopup', 'AuthService', 'DataService', DashboardCtrl]);

  function DashboardCtrl($state, $ionicPopup, AuthService, DataService) {
    var dashboard = this;

    dashboard.task = DataService.getCurrentLocation();
  };

})();