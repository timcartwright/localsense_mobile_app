(function() {
  'use strict';

  angular.module('localsense.data', [])
    .factory('DataService', DataService);

  function DataService() {

    var currentLocation;

    return {
      player: player,
      game: game,
      gameLocations: gameLocations,
      getCurrentGameLocation: getCurrentGameLocation,
      setCurrentGameLocation: setCurrentGameLocation,
      getStatus: getStatus
    }

    function getStatus() {
      return {
        score: 50,
        progress: 66
      }
    }

    function player() {
      return {
        name: 'Tim',
        mobile_number: '07769665014',
        location: ''
      };
    }

    function game() {
      return {
        name: 'Hunt the Treasure',
        description: "The world's greatest treasure hunt",
        instructions: "Do this, do that."
      };
    }

    function setCurrentGameLocation(id) {
      currentLocation = id;
    }

    function getCurrentGameLocation() {
      var array = gameLocations();
      // search locations by id
      for (var i=0; i<array.length; i++) {
        if (array[i].id == currentLocation) {
          return array[i];
        };
      };
      return array[0]; // return first task if no match
    }

    function gameLocations() {
      return [
        { 
          id: 1,
          lat: 17,
          long: 17,
          accuracy: 50,
          name: 'This Place',
          description: 'A great place to go',
          completed: true,
          accessible: true
        },
        { 
          id: 2,
          lat: 18,
          long: 17,
          accuracy: 100,
          name: 'That Place',
          description: 'Another great place to go',
          completed: false,
          accessible: true
        },
        { 
          id: 3,
          lat: 19,
          long: 17,
          accuracy: 100,
          name: 'The 3rd Place',
          description: 'Yet another great place to go',
          completed: false,
          accessible: false
        }
      ];
    }

  };

})();