app.controller('SignInCtrl', function($scope, $location, OpenFB, $state) {
  $scope.signIn = function () {
    // OpenFB.login()
    $state.go('potentialEvents');
    };
});