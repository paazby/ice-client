app.factory('MatchLoader', function($http) {
  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function(allMatches) {
      return $http({
        url: '',
        method: "GET"
      });
    },

    

  };

  return MatchLoader;

});