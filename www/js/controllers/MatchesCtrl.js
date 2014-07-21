app.controller('MatchesCtrl', function($rootScope, $scope, $state) {

  $scope.showMatch = function(match) {
    $state.go('specificMatch');
  };
  $scope.goToPotentialMatches = function() {
    $state.go('potentialMatches');
  };
});