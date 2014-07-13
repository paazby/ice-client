app.controller('PotentialEventsCtrl', function($scope, $state, $location) {

  $scope.events = [
    'club - 1 million people attending this event', 
    'bar - 80 people attending this event', 
    'festival - 12,345 people attending this event'];

  $scope.showEvent = function() {
    alert('WOOOOOOO!')
  }
  
})