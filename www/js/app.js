// Icebreaker

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('icebreaker', ['ionic', 'openfb'/*, 'btford.socket-io'*/]);


app.run(function($ionicPlatform, $rootScope, MatchLoader, Events, $http, $window, $state) {
  $ionicPlatform.ready(function() {
    
    $rootScope.initialDatabaseCall = false;
    $rootScope.shouldRedirectToPotentialMatches = false;
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  
    // this checks at every screen change whether the user is logged in
    // and kicks off the signin process if not logged in

  // $rootScope.$on('$stateChangeStart', function(event, toState) {
  //   if ($window.localStorage.getItem('jwtToken')) {
  //     if (!$rootScope.initialDatabaseCall) {
  //       $rootScope.initialDatabaseCall = true;
  //       // move database call here
  //     }

  //     // if (!$rootScope.shouldRedirectToPotentialMatches) {
  //     //   $rootScope.shouldRedirectToPotentialMatches = true;
  //     //   $state.go('potentialEvents');
  //     // }

  //     event.preventDefault();
  //   }
  // });

  // $rootScope.$on('$stateChangeStart', function(event, toState) {
  //   if (!$rootScope.initialDatabaseCall && $window.localStorage.getItem('jwtToken')) {
  //     // move database call here
  //     $rootScope.initialDatabaseCall = true;
  //     event.preventDefault();
  //   }
  // });
  
  // var socket = io('http://ice-chat.cloudapp.net:80');
  
  // socket.on('chat message', function(msg){
  //   // should only append to a somwhere holding
  //   // only msg.sender + receiver message
  //   console.log(msg.msg)
  // });

  // var user = prompt("please enter your name");
  // socket.emit('join', {user: user});
  $rootScope.listenerSet = false;

  // $rootScope.currentUser = $http call to get current user;
  $http({
    url: 'http://zavadil7.cloudapp.net/currentuser?apiKey=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlLZXkiOiJ6b3VuZHNfcGVla2luZyJ9.U-2sjzUTITlXuetMgYJJFEQ6LJQ-5mx1dLwUa6xQfFI&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmYl9pZCI6IjcxNDA4OTMwNTMwMzM2NSJ9.VhKU-hHYhjboq882KWufV9_Mj4V9iOljM5yb_aC1wZg',
    method: "GET"
  }).success(function(currentUser){
    console.log(currentUser);
    $rootScope.currentUser = currentUser;
    socket.emit('join', {user: $rootScope.currentUser.id});
  });

  Events.getEvents().success(function(results) {
    for (var i = 0; i < results.events.length; i++) {
      if (results.events[i]['logo_url']  === null) {
        results.events[i]['logo_url'] = 'http://images.wikia.com/restaurantcity/images/archive/7/77/20110517175454!Ice.png';
      }
    }
    $rootScope.potentialEvents = results.events;
  });

  MatchLoader.loadAllMatches().then(function(results) {
    $rootScope.allMatches = results.data;
    console.log($rootScope.allMatches);
    for (var i = 0; i < results.data.length; i++) {
      if(results.data[i].is_male === 1) {
      results.data[i]['pic'] = 'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg';
      } else {
        results.data[i]['pic'] = 'http://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg';
      }
    }
    $rootScope.potentialMatches = $rootScope.allMatches.slice(0, 20);
    $rootScope.allMatches = $rootScope.allMatches.slice(20);
  });

  MatchLoader.loadCurrentMatches().success(function(data){
    $rootScope.currentMatches = data;
    for (var i = 0; i < $rootScope.currentMatches.length; i++) {
      if($rootScope.currentMatches[i].is_male === 1) {
      $rootScope.currentMatches[i]['pic'] = 'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg';
      } else {
        $rootScope.currentMatches[i]['pic'] = 'http://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg';
      }
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $httpProvider) {


  // $httpProvider.interceptors.push('httpRequestInterceptor');
  $urlRouterProvider.otherwise("/sign-in");

  $stateProvider
    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })

    .state('events', {
      url: '/events',
      templateUrl: 'templates/events.html',
      controller: 'EventsCtrl'
    })

    .state('matches', {
      url: '/matches',
      templateUrl: 'templates/matches.html',
      controller: 'MatchesCtrl'
    })

    .state('potentialEvents', {
      url: '/potentialEvents',
      templateUrl: "templates/potentialEvents.html",
      controller: 'PotentialEventsCtrl'
    })

    .state('potentialMatches', {
      url: '/potentialMatches',
      templateUrl: 'templates/potentialMatches.html',
      controller: 'PotentialMatchesCtrl'
    })

    .state('specificMatch', {
      url: '/specificMatch/:id',
      templateUrl: 'templates/specificMatch.html',
      controller: 'SpecificMatchCtrl'
    })

    .state('specificEvent', {
      url: '/specificEvent',
      templateUrl: 'templates/specificEvent.html',
      controller: 'SpecificEventCtrl'
    })

    .state('chat', {
      url: '/chat',
      templateUrl: 'templates/chat2.html',
      controller: 'ChatCtrl'
    })
  });
