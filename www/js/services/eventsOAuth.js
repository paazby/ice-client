app.factory('Events', function($http){
  var Events = {
    getEvents: function(){
      return $http({
        method: 'get',
        url: 'https://www.eventbriteapi.com/v3/events/search/',
        params: {
          q: 'party',
          popular:true,
          'venue.city': 'san francisco',
          token: '4IP4VYD2JFW2MOT2Y7EC'
        }
      });
    }
  };


  return Events;
});


// 4IP4VYD2JFW2MOT2Y7EC