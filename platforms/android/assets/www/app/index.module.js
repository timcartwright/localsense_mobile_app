(function() {
  'use strict';

  angular
    .module('localsense', [
      'ionic',
      'ngAnimate', 
      'ngCookies', 
      'ngTouch', 
      'ngSanitize', 
      'ngMessages', 
      'ngAria', 
      'ngResource',
      'ngCordova',
      'ui.router', 
      'localsense.login',
      'localsense.auth',
      'localsense.data',
      'localsense.welcome',
      'localsense.dashboard',
      'localsense.locations',
      'localsense.map',
      'localsense.geolocate'
    ]);

})();
