app.controller('PotentialEventsCtrl', function($scope, $state, Database) {

  $scope.potentialEvents = [
    'http://web-images.chacha.com/images/Gallery/5314/what-shouldn-t-you-do-in-a-nightclub-1965244927-dec-14-2012-1-600x400.jpg',
    'http://cdn.onlythebeat.com/wp-content/uploads/2013/03/Paradiso-Wide-OTB1.jpg',
    'http://tbscene.com/wp-content/uploads/2014/04/super-bar-milano-2013.jpg'
  ];

  $scope.all = function() {
    Database.all();
  }
})