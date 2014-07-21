app.controller('PotentialMatchesCtrl', function($rootScope, $scope, $state, $ionicPopup, Database, $http, TokenMaker) {

  $scope.matches = function() {
    $state.go('matches');
  };

  $scope.kill = function(index) {
    // this removes the first item from the potentialMatches
    // array. ng-repeat is run again, and everything has a new
    // index. So what had an index of 1 will now have an index of 0, etc.
    // I guess the whole view is re-rendered, instead of just removing
    // one node in the DOM
    $rootScope.potentialMatches.splice(index, 1);

    if ($rootScope.potentialMatches.length < 5) {
      $rootScope.potentialMatches = $rootScope.potentialMatches.concat($rootScope.allMatches.slice(0, 20));
      $rootScope.allMatches = $rootScope.allMatches.slice(20);
    }
  };

  $scope.sendMessage = function(message) {
    console.log(message);
  };

  $scope.like = function(index, targetId) {
    console.log(targetId);
    $http({
      url: 'http://zavadil7.cloudapp.net/matches/' TokenMaker.makeToken() + otherId,
      method: 'POST'
    }).success(function(){
      console.log('hey');
    }).error(function(err){
      console.log('err');
    });


    $scope.kill(index);
  };



    // var isMatch = Database.isMatch($rootScope.currentUser.uid, otherId);
    // if (isMatch) {
    //   $scope.data = {};
    //   var matchPopup = $ionicPopup.show({
    //     template: '<input type="text" ng-model="data.message">',
    //     title: 'You have a match!',
    //     subTitle: 'Send them a message!',
    //     scope: $scope,
    //     buttons: [
    //       { 
    //         text: 'Not Now',
    //         onTap: function() {
    //           $scope.kill(index);
    //         }
    //       },
    //       {
    //         text: 'Send',
    //         type: 'button-positive',
    //         onTap: function(e) {
    //           if ($scope.data.message === undefined) {
    //             e.preventDefault();
    //           } else {
    //             $scope.sendMessage($scope.data.message);
    //             $scope.kill(index);
    //           }
    //         }
    //       },
    //     ]
    // });


    // isMatch functionality needs to be put inside .success in http call
    //   } else {
    //     $scope.kill(index);
    //   }
    // };
    



  $scope.dislike = function(index) {
    $scope.kill(index);

    console.log('dislike');
  };

  $scope.info = function() {
    // this should redirect you to a person's profile
    // 
  };

});
