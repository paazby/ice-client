app.controller('PotentialMatchesCtrl', function($scope, $state, Database) {

  $scope.potentialMatches = [
    'http://www.50shadesofage.com/wp-content/uploads/2013/02/George-Clooney-headshot.jpg',
    'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg',
    'http://postgradproblems.s3.amazonaws.com/wp-content/uploads/2014/01/aa19ac627923e9f171a6e379af4c6c36.jpg'
  ];

  $scope.all = function() {
    Database.all();
  }
})