app.controller('SignInCtrl', function($scope, $state, OpenFB, $location) {
  $scope.signIn = function () {
    OpenFB.login().then(
      function(){
        $location.path('/potentialEvents');
      });
  };
});