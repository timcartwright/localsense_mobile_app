(function() {
  'use strict';

  angular.module('localsense.dashboard')
  .controller('DashboardCtrl', ['$scope', '$state', '$ionicPopup', 'DataService', 'GeoLocateService', DashboardCtrl]);

  function DashboardCtrl($scope, $state, $ionicPopup, DataService, GeoLocateService) {
    var dashboard = this;

    dashboard.howClose = GeoLocateService.howClose;

    $scope.$on('$ionicView.beforeEnter', function() {
        getData();
        if (dashboard.gameStatus.complete) {
          console.log(dashboard.task.name);
        } else {
          geoLocate();
        };
    });

    function getData() {
      dashboard.task = DataService.getCurrentGameLocation();
      dashboard.gameStatus = DataService.getGameStatus();
    }

    function geoLocate() {
      GeoLocateService.end();
      GeoLocateService.begin(dashboard.task.long, dashboard.task.lat, arrived);
    }

    function arrived() {
      DataService.markAsComplete(dashboard.task.id);
      if (dashboard.gameStatus.complete) {
        showAlert('Congratulations!',
                  'You have completed the Game!!',
                  function() {
                    dashboard.task.name = 'Congratulations';
                    dashboard.task.description = 'You have completed the Game!!';
                  });
      } else {
        showAlert('Well Done!',
                  "You have reached your destination. Please select the next one.",
                  function() {
                    $state.go('locations');  
                  });
      };
    }

    function showAlert(title, message, callback) {
      var alert = $ionicPopup.alert({
        title: title,
        template: message
      });

      if (callback) {
        alert.then(function(res){
          callback();
        });
      };
    }

  };

})();