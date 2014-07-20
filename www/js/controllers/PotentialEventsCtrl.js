app.controller('PotentialEventsCtrl', function($rootScope, $scope, $state, Database, Events, $http) {

  // $scope.events = Database.potentialEvents();

  $scope.showEvent = function(eventObj) { // can't use 'event', because it is a key word
    $rootScope.currentEvent = eventObj;
    $state.go('specificEvent');
  };
  
});