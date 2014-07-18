app.controller('SignInCtrl', function($scope, $location, OpenFB) {
  $scope.signIn = function () {
    OpenFB.login()
        };
});