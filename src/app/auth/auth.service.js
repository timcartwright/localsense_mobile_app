(function() {
  'use strict';

  angular.module('localsense.auth', [])
    .factory('AuthService', AuthService);

  function AuthService() {

    var authorised = false;

    return {
      isAuthorised: isAuthorised,
      logIn: logIn,
      logOut: logOut
    };

    function isAuthorised() {
      return authorised;
    }

    function logIn() {
      authorised = true;
    };

    function logOut() {
      authorised = false;
    };
  };

})();