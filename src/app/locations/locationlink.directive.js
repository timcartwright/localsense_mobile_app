(function() {
  'use strict';

  angular.module('localsense.locations')
  .directive('locationLink', function() {
    return {
      restrict: 'A',
      scope: {
        enabled: '=locationLink'
      },
      link: function(scope, element, attrs) {
        element.bind('click', function(event) {
          if(!scope.enabled) {
            event.preventDefault();
          }
        });
      }
    };
  });

})();