(function() {
  'use strict';

  angular.module('localsense.data', [])
    .factory('DataService', [DataService]);

  function DataService() {

    var currentLocation;
    var locations = [
              { 
                id: 1,
                order: 1,
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
                order: 2,
                lat: 17.469005600000003,
                long: 78.3679058,
                accuracy: 100,
                name: 'That Place',
                description: 'Another great place to go',
                completed: false,
                accessible: true
              },
              { 
                id: 3,
                order: 3,
                lat: 19,
                long: 17,
                accuracy: 100,
                name: 'The 3rd Place',
                description: 'Yet another great place to go',
                completed: false,
                accessible: false
              }
                ];

    return {
      player: player,
      game: game,
      gameLocations: gameLocations,
      getCurrentGameLocation: getCurrentGameLocation,
      setCurrentGameLocation: setCurrentGameLocation,
      getStatus: getStatus,
      markAsComplete: markAsComplete
    }

    function markAsComplete(id) {
      var location = getGameLocationById(id);
      location.completed = true;
      markAsAccessible(location.order + 1);
    }

    function markAsAccessible(order) {
      getGameLocationByOrder(order).accessible = true;
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
      return getGameLocationById(currentLocation);
    }

    function gameLocations() {
      return locations;
    }

    function getGameLocationById(id) {
      var array = gameLocations();
      for (var i=0; i<array.length; i++) {
        if (array[i].id == id) {
          return array[i];
        };
      };
      return array[0]; // return first task if no match
    }

    function getGameLocationByOrder(order) {
      var array = gameLocations();
      for (var i=0; i<array.length; i++) {
        if (array[i].order == order) {
          return array[i];
        };
      };
      return array[0]; // return first task if no match
    }

  };

})();