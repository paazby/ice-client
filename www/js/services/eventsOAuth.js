app.factory('Events', function($http, TokenMaker){
  var Events = {
    getDate: function(){
      var x = new Date();
      var y = new Date(x).toISOString().slice(0, 13);
      y = y.slice(0, 19) + y[y.length - 1];
      return y;
    },
    getEvents: function(){
      return $http({
        method: 'get',
        url: 'https://www.eventbriteapi.com/v3/events/search/',
        params: {
          q: 'party',
          popular:true,
          'start_date.range_start': '2014-07-22T11:40:54Z',
          'venue.city': 'san francisco',
          token: TokenMaker.eventApi()
        }
      });
    }
  };


  return Events;
});