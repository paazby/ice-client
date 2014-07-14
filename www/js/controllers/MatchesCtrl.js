app.controller('MatchesCtrl', function($scope, $state, Database) {

  $scope.matches = Database.matches();
  $scope.showMatch = function(match) {
    console.log(match);
    // $state.go(// page with info about specific match)
    // use match.id to pass along specific match page
  }
})