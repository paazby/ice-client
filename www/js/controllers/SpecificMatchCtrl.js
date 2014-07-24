app.controller('SpecificMatchCtrl', function($scope, $state, $ionicModal/*, socket*/) {

  // $scope.id = $stateParams.id;

  $ionicModal.fromTemplateUrl('templates/chat.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
  .then(function(modal) {
    $scope.modal = modal;
  });

  $scope.message = {};
  $scope.message.message = '';

  $scope.sendMessage = function() {
    var user = prompt('who do you want to send this to?')
    // socket.emit('chat message', {message: $('#m').val(), user: user});
    socket.emit('chat message', $scope.message.message);
    // console.log($scope.message.message);
    $scope.message.message = '';
    return false;
  };

  $scope.$on('socket:broadcast', function(event, data) {
      // $log.debug('got a message', event.name);
      alert('got a message', event.name);
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

})