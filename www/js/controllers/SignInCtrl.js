app.controller('SignInCtrl', function($scope, $state, OpenFB, $location, $http) {
    console.log('in signinctrl')
  $scope.signIn = function() {
    console.log('IM RUNNING I PROMISE')
    OpenFB.login().then(function() {
        console.log('im right here ya bitches')
        $location.path('/potentialEvents');
    });
    
  };
});
