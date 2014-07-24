app.controller('SpecificMatchCtrl', function($scope, $state, $ionicModal/*, socket*/) {

  // $scope.id = $stateParams.id;

  $ionicModal.fromTemplateUrl('templates/chat.html', {
    scope: $scope,
    animation: 'slide-in-up'
  })
  .then(function(modal) {
    $scope.modal = modal;
  });

  $scope.msg = {};
  $scope.msg.msg = '';

  $scope.sendMessage = function() {
    var user = prompt('who do you want to send this to?')
    // socket.emit('chat msg', {msg: $('#m').val(), user: user});
    // socket.emit('chat msg', $scope.msg.msg);
    socket.emit('chat message', {msg: $scope.msg.msg, to: user /*,from: currentUser*/});
    // console.log($scope.msg.msg);
    $scope.msg.msg = '';
    return false;
  };

  $scope.displayMessage = function() {
    
    socket.once('chat message', function(msg){
      // should only append to a somwhere holding
      // only msg.sender + receiver message
      console.log(msg.msg)
      $scope.displayMessage();
    });

  };

  $scope.displayMessage();

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