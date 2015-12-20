(function() {
  'use strict';

  angular.module('localsense.dashboard')
  .controller('DashboardCtrl', ['$scope', '$state', '$ionicPopup', 'DataService', 'GeoLocateService', DashboardCtrl]);

  function DashboardCtrl($scope, $state, $ionicPopup, DataService, GeoLocateService) {
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
      DataService.markAsComplete(dashboard.task.id);
      showAlert('Congratulations!', 'You have reached your destination. Ready for the next one?', function() {
        $state.go('locations');  
      });
    }

    function showAlert(title, message, callback) {
      var alert = $ionicPopup.alert({
        title: title,
        template: message
      });

      alert.then(function(res){
        callback();
      });
    }

  };

})();