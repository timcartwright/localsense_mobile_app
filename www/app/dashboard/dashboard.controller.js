(function() {
  'use strict';

  angular.module('localsense.dashboard')
  .controller('DashboardCtrl', ['$scope', 'DataService', 'GeoLocateService', DashboardCtrl]);

  function DashboardCtrl($scope, DataService, GeoLocateService) {
    var dashboard = this;

    $scope.$on('$ionicView.beforeEnter', function() {
        getData();
        geoLocate();
    });

    function getData() {
      dashboard.task = DataService.getCurrentGameLocation();
      dashboard.status = DataService.getStatus();
    }

    function geoLocate() {
      GeoLocateService.end();
      GeoLocateService.begin(dashboard.task.long, dashboard.task.lat, arrived);
    }

    function arrived() {

    }

  };

})();