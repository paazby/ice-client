app.factory('Database', function($http){
  
  var Database = {

    isMatch: function(currentUserId, otherId) {
      // query database with current userid, and target userid

      // if that row does not exist, add it with a count of 1
        // return false, there is no match yet
      // else, row already exists, increment count to 2. 
        // return true, there is a match
      return true;
    },

    matches: function(currentUserId) {
      // find all rows where user1 === currentUserId && count === 2
      // OR user2 === currentUserId && count === 2
      return $http({
        url: 'http://ice-mockserver.azurewebsites.net/matches', 
        method: "GET"
      });
    },

    events: function(currentUserId) {
      return [
        'http://web-images.chacha.com/images/Gallery/5314/what-shouldn-t-you-do-in-a-nightclub-1965244927-dec-14-2012-1-600x400.jpg',
        'http://cdn.onlythebeat.com/wp-content/uploads/2013/03/Paradiso-Wide-OTB1.jpg',
        'http://tbscene.com/wp-content/uploads/2014/04/super-bar-milano-2013.jpg'
      ];
    },

    potentialMatches: function() {
      return $http({
        url: 'http://ice-mockserver.azurewebsites.net/matches', 
        method: "GET"
      });
    },

    potentialEvents: function() {
      return $http({
        url: 'http://ice-mockserver.azurewebsites.net/potentialEvents', 
        method: "GET"
      });
    }
  };

  return Database;

});