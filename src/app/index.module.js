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
      'ui.router', 
      'localsense.login',
      'localsense.auth',
      'localsense.welcome',
      'localsense.dashboard'
    ]);

})();
