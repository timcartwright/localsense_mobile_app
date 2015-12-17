angular.module('localsense.login')
.controller('LoginCtrl', ['$ionicPopup', '$log', LoginCtrl]);

function LoginCtrl($ionicPopup, $log) {
  $log.debug('LoginCtrl end');
}