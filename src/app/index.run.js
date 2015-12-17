(function() {
  'use strict';

  angular
    .module('localsense')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $ionicPlatform) {

    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }     
    });

    $log.debug('runBlock end');
  }

})();
