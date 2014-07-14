app.controller('SignInCtrl', function($scope, $state) {
  $scope.signIn = function() {
    // $location.path('/auth/facebook');
    $state.go('potentialEvents');
  }
})