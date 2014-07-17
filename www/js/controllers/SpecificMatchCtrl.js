app.controller('SpecificMatchCtrl', function($scope, $state, $stateParams) {

  $scope.sup = function() {
    console.log($scope.id);
  }

  $scope.id = $stateParams.id;
})