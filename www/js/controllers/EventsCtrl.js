app.controller('EventsCtrl', function($scope, $state, Database) {

  $scope.events = Database.events();

  $scope.all = function() {
    Database.all();
  }
})