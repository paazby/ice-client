app.controller('SignInCtrl', function($scope, $state, OpenFB) {
  $scope.signIn = function () {
    // OpenFB.login()
    $state.go('potentialEvents');
  };
});