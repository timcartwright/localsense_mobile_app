(function() {
  'use strict';

  angular.module('localsense.geolocate', [])
    .factory('GeoLocateService', ['$ionicPopup', '$cordovaGeolocation', GeoLocateService]);

  function GeoLocateService($ionicPopup, $cordovaGeolocation) {

    var proximityCheck;
    var long, lat;
    var callback;
    var delay = 10000; // Time in ms between location checks
    var minDistance = 0.1; // Distance in km from target to trigger a hit
    var processing = false;

    return {
      begin:function(longitude, latitiude, cb) {
        long = longitude;
        lat = latitiude;
        callback = cb;
        hb();
      }, 
      end: function() {
        if (proximityCheck) {
          proximityCheck.clearWatch();
        };
      },
      setTarget: function(longitude, latitiude) {
        long = longitude;
        lat = latitiude;
      }
    };

    function hb() {
      if(processing) return;
      console.log('hb running');
      processing = true;
      var posOptions = {timeout: 60000, enableHighAccuracy: true, maximumAge: 0};
      proximityCheck = $cordovaGeolocation.watchPosition(posOptions);
      proximityCheck.then(null, positionError, location);

      function location(position) {
          processing = false;
          console.log(lat, long);
          console.log(position.coords.latitude, position.coords.longitude);
          var dist = getDistanceFromLatLonInKm(lat, long, position.coords.latitude, position.coords.longitude);
          console.log("dist in km is "+dist);
          console.log("accuracy is "+position.coords.accuracy);
          showAlert('LocalSense', 'You are ' + dist + ' km away (accuracy ' + position.coords.accuracy + ' m)');
          if(position.coords.accuracy <= 50 && dist <= minDistance) {
            $cordovaGeolocation.clearWatch(proximityCheck);
            callback();
          };
      };

      function positionError() {
        console.log('error:', error);
      };
    };

    // Credit: http://stackoverflow.com/a/27943/52160   
    function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2-lat1);  // deg2rad below
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    };

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    };

    function showAlert (title, message) {
      $ionicPopup.alert({
        title: title,
        template: message
      });
    };

  };

})();