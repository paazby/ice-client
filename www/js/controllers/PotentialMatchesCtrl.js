app.controller('PotentialMatchesCtrl', function($scope, $state, $ionicPopup, Database) {

  $scope.potentialMatches = [
    'http://www.50shadesofage.com/wp-content/uploads/2013/02/George-Clooney-headshot.jpg',
    'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg',
    'http://postgradproblems.s3.amazonaws.com/wp-content/uploads/2014/01/aa19ac627923e9f171a6e379af4c6c36.jpg'
  ];

  $scope.sendMessage = function(message) {
    console.log(message); 
  };

  $scope.like = function() {
    // Database.all();
    var isMatch = Database.isMatch();

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