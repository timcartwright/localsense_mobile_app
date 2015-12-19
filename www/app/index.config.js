(function() {
  'use strict';

  angular
    .module('localsense')
    .config(['$logProvider', config]);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
