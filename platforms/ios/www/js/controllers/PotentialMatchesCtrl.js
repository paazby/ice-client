app.controller('PotentialMatchesCtrl', function($rootScope, $scope, $state, $ionicPopup, Database) {

  // $scope.init = function() {
  //   Database.potentialMatches().success(function(data) {
  //     $scope.potentialMatches = data.results;
  //     console.log('sdfdsf')
  //   });
  // };

  // $scope.init();

  $scope.sendMessage = function(message) {
    console.log(message); 
  };

  $scope.like = function(otherId) {
    var isMatch = Database.isMatch($rootScope.currentUser.uid, otherId);

    if (isMatch) {
      $scope.data = {};
      var matchPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.message">',
        title: 'You have a match!',
        subTitle: 'Send them a message!',
        scope: $scope,
        buttons: [
          { text: 'Not Now' },
          {
            text: 'Send',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.data.message === undefined) {
                e.preventDefault();
              } else {
                $scope.sendMessage($scope.data.message);
              }
            }
          },
        ]
      });


    }
  }
})