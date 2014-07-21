
app.controller('SignInCtrl', function($scope, OpenFB, $location) {
  $scope.signIn = function () {
    OpenFB.login().then(function() { // figure out how to get route change working
    // $location.path('/potentialEvents');
    });
  };
});
