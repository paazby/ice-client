app.controller('SignInCtrl', function($scope, $state, OpenFB, $http) {
  $scope.signIn = function () {
    OpenFB.login();
  };
});
