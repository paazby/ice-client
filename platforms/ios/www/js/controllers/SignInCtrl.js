app.controller('SignInCtrl', function($scope, $state, $location, Auth) {
  $scope.signIn = function() {
    // $location.path('/auth/facebook');
    $state.go('authFacebook');
  }
})