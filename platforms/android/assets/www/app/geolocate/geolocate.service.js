(function() {
  'use strict';

  angular.module('localsense.geolocate', [])
    .factory('GeoLocateService', ['$cordovaGeolocation', GeoLocateService]);

  function GeoLocateService($cordovaGeolocation) {

    var proximityCheck;
    var long, lat;
    var callback;
    var duration = 10000; // Time in ms between location checks
    var minDistance = 0.1; // Distance in km from target to trigger a hit
    var processing = false;

    return {
      begin:function(longitude, latitiude, cb) {
        long = longitude;
        lat = latitiude;
        callback = cb;
        proximityCheck = window.setInterval(hb, duration);
      }, 
      end: function() {
        window.clearInterval(proximityCheck);
      },
      setTarget: function(longitude, latitiude) {
        long = longitude;
        lat = latitiude;
      }
    };

    function hb() {
      console.log('hb running');
      if(processing) return;
      processing = true;
      var posOptions = {timeout: 60000, enableHighAccuracy: true, maximumAge: 0};
      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function(position) {
          processing = false;
          console.log(lat, long);
          console.log(position.coords.latitude, position.coords.longitude);
          var dist = getDistanceFromLatLonInKm(lat, long, position.coords.latitude, position.coords.longitude);
          console.log("dist in km is "+dist);
          console.log("accuracy is "+position.coords.accuracy);
          
          if(dist <= minDistance) callback();
        }, function(error) {
          console.log('error:', error);
        });
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
    }

    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

  };

})();