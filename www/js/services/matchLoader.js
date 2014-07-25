app.factory('MatchLoader', function($http) {

  
  var matches = [];

  var MatchLoader = {

    loadAllMatches: function() {
      return $http({
        url: '',
        method: "GET"
      }).success(function(data){
        data.reverse();
      });
    },
    
    loadCurrentMatches: function() {
      return $http({
        url: '',
        method: "GET"
      }).success(function(data){
        console.log(data);
      });
    }

  };

  return MatchLoader;

});