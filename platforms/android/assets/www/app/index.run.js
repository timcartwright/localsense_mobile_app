(function() {
  'use strict';

  angular
    .module('localsense')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $ionicPlatform, $rootScope, $state, AuthService) {

    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }     
    });

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !AuthService.isAuthorised()){
        console.log('unauth');
        $state.go('login');
        event.preventDefault();
      }
    });

    $log.debug('runBlock end');
  }

})();
