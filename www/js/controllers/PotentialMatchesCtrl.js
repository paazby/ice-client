app.controller('PotentialMatchesCtrl', function($rootScope, $scope, $state, $ionicPopup, Database) {

  // $scope.init = function() {
  //   Database.potentialMatches().success(function(data) {
  //     $scope.potentialMatches = data.results;
  //     console.log('sdfdsf')
  //   });
  // };

  // $scope.init();

  $scope.kill = function(index) {
    // this removes the first item from the potentialMatches
    // array. ng-repeat is run again, and everything has a new
    // index. So what had an index of 1 will now have an index of 0, etc.
    // I guess the whole view is re-rendered, instead of just removing
    // one node in the DOM
    $scope.potentialMatches.splice(index, 1);
  };

  $scope.like = function(index, otherId) {
    var isMatch = Database.isMatch($rootScope.currentUser.uid, otherId);
    if (isMatch) {
      $scope.data = {};
      var matchPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.message">',
        title: 'You have a match!',
        subTitle: 'Send them a message!',
        scope: $scope,
        buttons: [
          { 
            text: 'Not Now',
            onTap: function() {
              $scope.kill(index);
            }
          },
          {
            text: 'Send',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.data.message === undefined) {
                e.preventDefault();
              } else {
                $scope.sendMessage($scope.data.message);
                $scope.kill(index);
              }
            }
          },
        ]
      });
    } else {
      $scope.kill(index);
    }
  };

  $scope.dislike = function(index) {
    $scope.kill(index);
  }

  $scope.info = function() {
    // this should redirect you to a person's profile
    // 
  }

  $scope.sendMessage = function(message) {
    console.log(message); 
  };

})