(function() {
  'use strict';

  angular.module('localsense.auth', [])
    .factory('AuthService', ['$http', 'DataService', AuthService]);

  function AuthService($http, DataService) {

    var authorised = false;

    return {
      isAuthorised: isAuthorised,
      logIn: logIn,
      logOut: logOut
    };

    function isAuthorised() {

      return authorised;
    };

    function logIn(game,id) {
    return $http.get('//localhost:8000/games/'+ game +'.json?authentication_token=' + id)
      .then(function(response) {
        if (response.status === 200) {
          authorised = true;
          DataService.setGame(response.data.game);
          return true;
        }
      }, function(data) {
        return false;
      });
    };

    function logOut() {
      authorised = false;
    };

    function fetchGame(game,id) {
      $http.get('//localhost:8000/games/'+ game +'.json?authentication_token=' + id)
        .success(function(data){
            console.log(data);
        });
    }
  };

})();