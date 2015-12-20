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
      var gameComplete = DataService.markAsComplete(dashboard.task.id);
      if (gameComplete) {
        showAlert('Congratulations!',
                  'You have completed the Game!!'  
                  );
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