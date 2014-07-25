
app.controller('SignInCtrl', function($scope, OpenFB, $state, $rootScope, TokenMaker) {
  $scope.signIn = function () {
    OpenFB.login().then(function() { // figure out how to get route change working
      $state.go('potentialEvents');
    });
  };
});
