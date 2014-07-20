app.controller('SignInCtrl', function($scope, $state, OpenFB, $http) {
  $scope.signIn = function () {
    OpenFB.login().then(function() {
      $location.path('/potentialEvents');
    });
    // $state.go('potentialEvents');
  };
});
