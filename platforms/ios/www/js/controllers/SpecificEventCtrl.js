app.controller('SpecificEventCtrl', function($rootScope, $scope, $state, Database) {

  $scope.currentEvent = $rootScope.currentEvent;

  $scope.guests = function() {
    $state.go('potentialMatches');
  }

  $scope.matches = function() {
    $state.go('tab.matches');
  }
})