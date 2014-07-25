app.controller('MatchesCtrl', function($rootScope, $scope, $state) {

  $scope.showMatch = function(match) {
    $state.go('specificMatch', {matchId: match.fb_id});
  };
  $scope.goToPotentialMatches = function() {
    $state.go('potentialMatches');
  };
});
