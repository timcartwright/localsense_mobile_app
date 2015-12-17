(function() {
  'use strict';

  angular
    .module('ionic')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
