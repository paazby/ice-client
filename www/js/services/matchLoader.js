app.factory('MatchLoader', function($http) {
  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function(allMatches) {
      return $http({
        url: 'http://zavadil7.cloudapp.net/allcandidates?apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJ6b3VuZHNfcGVla2luZyJ9.U-2sjzUTITlXuetMgYJJFEQ6LJQ-5mx1dLwUa6xQfFI&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmYl9pZCI6Ijk3OSJ9.1h_YW8QICTqDJQxejfAHlZjtH-F8blPKwjhIkA3jZNw',
        method: "GET"
      });
    },

    

  };

  return MatchLoader;

});