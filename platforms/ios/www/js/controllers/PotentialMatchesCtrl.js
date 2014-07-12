app.controller('PotentialMatchesCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
  
})