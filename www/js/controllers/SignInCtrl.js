
app.controller('SignInCtrl', function($scope, OpenFB, $state) {
  $scope.signIn = function () {
    OpenFB.login().then(function() { // figure out how to get route change working
      $state.go('potentialEvents');
    });
  };
});
