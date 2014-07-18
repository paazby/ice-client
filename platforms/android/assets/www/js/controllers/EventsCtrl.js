// added comment to test push to origin
app.controller('EventsCtrl', function($scope, $state, Database) {

  $scope.events = Database.events();

  
})