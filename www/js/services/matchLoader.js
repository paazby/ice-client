app.factory('MatchLoader', function($http, TokenMaker) {
  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function(allMatches) {
      return $http({
        url: TokenMaker.makeToken(),

        method: "GET"
      });
    },

    

  };

  return MatchLoader;

});