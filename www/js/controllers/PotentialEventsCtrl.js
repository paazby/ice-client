app.controller('PotentialEventsCtrl', function($scope, $state, Database) {

  $scope.events = Database.potentialEvents();

  $scope.showEvent = function() {
    alert('WOOOOOOO!')
  }
  
})