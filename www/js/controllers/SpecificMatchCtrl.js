app.controller('SpecificMatchCtrl', function($scope, $state, $ionicModal, $rootScope, $stateParams) {

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
    var currentUser = $rootScope.currentUser.fb_id;
    socket.emit('chat message', {msg: $scope.msg.msg, to: $stateParams.matchId, from: currentUser});
    $scope.msg.msg = '';
    return false;
  };

  $scope.displayMessage = function() {
    if (!$rootScope.listenerSet) {
      socket.on('chat message', function(msg){
        // should only append to somwhere holding
        // only msg.sender + receiver message
        var from = msg.from;
        var li = $('<li>').addClass('item').text(msg.msg);
        $('ul').append(li);
      });
      $rootScope.listenerSet = true;
    }
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
    if ($scope.modal) {
      $scope.modal.remove();
    }
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