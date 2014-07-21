app.factory('MatchLoader', function($http, TokenMaker) {
  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function(allMatches) {
      return $http({
        url: 'http://zavadil7.cloudapp.net/allcandidates/' + TokenMaker.makeToken(),
        method: "GET"
      });
    },

    

  };

  return MatchLoader;

});