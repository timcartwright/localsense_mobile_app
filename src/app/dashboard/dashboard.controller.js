(function() {
  'use strict';

  angular.module('localsense.dashboard')
  .controller('DashboardCtrl', ['$scope', 'DataService', DashboardCtrl]);

  function DashboardCtrl($scope, DataService) {
    var dashboard = this;

    $scope.$on('$ionicView.beforeEnter', function() {
        activate();
    });

    function activate() {
      dashboard.task = DataService.getCurrentGameLocation();
      dashboard.status = DataService.getStatus();
    }

  };

})();