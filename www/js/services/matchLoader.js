app.factory('MatchLoader', function($http) {
  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function() {
      return $http({
        url: 'http://zavadil7.cloudapp.net/allcandidates/',
        method: "GET"
      });
    },
    
    loadCurrentMatches: function() {
      return $http({
        url: 'http://zavadil7.cloudapp.net/matches/',
        method: "GET"
      });
    }

  };

  return MatchLoader;

});