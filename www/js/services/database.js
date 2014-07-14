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
    },

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
      return ['george clooney', 'rachel mcadams', 'manu ginobili'];
    },

    events: function(currentUserId) {
      return [
        'http://web-images.chacha.com/images/Gallery/5314/what-shouldn-t-you-do-in-a-nightclub-1965244927-dec-14-2012-1-600x400.jpg',
        'http://cdn.onlythebeat.com/wp-content/uploads/2013/03/Paradiso-Wide-OTB1.jpg',
        'http://tbscene.com/wp-content/uploads/2014/04/super-bar-milano-2013.jpg'
      ];
    },

    potentialMatches: function() {
      return [
        {
          pic: 'http://www.50shadesofage.com/wp-content/uploads/2013/02/George-Clooney-headshot.jpg',
          id: 1
        },
        {
          pic: 'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg',
          id: 2
        },
        {
          pic: 'http://postgradproblems.s3.amazonaws.com/wp-content/uploads/2014/01/aa19ac627923e9f171a6e379af4c6c36.jpg',
          id: 3
        }
      ];
    },

    potentialEvents: function() {
      return [
        {
          title: 'club', 
          id: 0,
          guests: 10000
        },
        {
          title: 'bar', 
          id: 1,
          guests: 30
        },
        {
          title:'festival',
          id: 2,
          guests: 40
        }
      ];
    }
  };

  return Database;

});