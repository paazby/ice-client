app.controller('MatchesCtrl', function($scope, $state) {

  $scope.matches = ['george', 'clooney'];
  $scope.showMatch = function(match) {
    console.log(match);
    // $state.go(// page with info about specific match)
    // use match.id to pass along specific match page
  }
})