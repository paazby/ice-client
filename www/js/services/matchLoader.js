app.factory('MatchLoader', function($http, TokenMaker, $rootScope) {
  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function(allMatches) {
      return $http({
        url: 'http://zavadil7.cloudapp.net/allcandidates/' + TokenMaker.makeToken(),
        method: "GET"
      }).success(function(data){
        data.reverse();
      });
    },

    loadCurrentMatches: function() {
      return $http({
      method: 'get',
      url: 'http://zavadil7.cloudapp.net/matches/' + TokenMaker.makeToken(),
      });
    }

    

  };

  return MatchLoader;

});