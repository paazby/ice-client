app.controller('SpecificEventCtrl', function($rootScope, $scope, $state, $http, Database) {

  $scope.currentEvent = $rootScope.currentEvent;

  $scope.guests = function() {
    $state.go('potentialMatches');
  };

  $scope.matches = function() {
    $state.go('matches');
  };

  $scope.potentialEvents = function() {
    $state.go('potentialEvents');
  };

  $scope.hey = function() {
    console.log('hey');
  };
});