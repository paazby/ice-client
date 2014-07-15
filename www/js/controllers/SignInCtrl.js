app.controller('SignInCtrl', function($scope, $location, OpenFB) {
  $scope.signIn = function () {

            OpenFB.login('public_profile').then(
                function () {
                    $location.path('/app/person/me/feed');
                },
                function () {
                    alert('OpenFB login failed');
                });
        };
});