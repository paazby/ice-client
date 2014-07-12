app.factory('Database', function($http){
  
  var Database = {
    all: function(){
      $http({
        url: 'http://icebreaker-mock.azurewebsites.net/matches', 
        method: "GET"
      })
      .success(function(matches){
        // do something with matches
        console.log(matches);
      })
      .error(function(error){
       console.log('Error in Database.all()', error)
      })
    }
  };

  return Database;

});