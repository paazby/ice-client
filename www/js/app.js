// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('icebreaker', ['ionic', 'openfb']);


app.run(function($ionicPlatform, $rootScope, Database, MatchLoader, Events, $http, $window, $state) {
  $ionicPlatform.ready(function() {

    $rootScope.initialDatabaseCall = false;
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
  //   if (!$rootScope.initialDatabaseCall && $window.localStorage.getItem('jwtToken')) {
  //     // move database call here
  //     $rootScope.initialDatabaseCall = true;
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
  

  MatchLoader.loadAllMatches().then(function(results) {
    $rootScope.allMatches = results.data;
    console.log($rootScope.allMatches);
    for (var i = 0; i < results.data.length; i++) {
      if(results.data.is_male === 1) {
      results.data[i]['pic'] = 'http://yourgrantauthority.com/wp-content/uploads/2012/09/George_Clooney-0508.jpg';
      } else {
        results.data[i]['pic'] = 'http://si.wsj.net/public/resources/images/BN-BY925_mag041_OZ_20140318165119.jpg';
      }
    }
    $rootScope.potentialMatches = $rootScope.allMatches.slice(0, 20);
    $rootScope.allMatches = $rootScope.allMatches.slice(20);
  });

  $rootScope.currentUser = {};
  $rootScope.currentUser.id = 0;
  $rootScope.currentEvent = {};
  Events.getEvents().then(function(results) {
    $rootScope.potentialEvents = results.data.events;
  });
})

.config(function($stateProvider, $urlRouterProvider) {

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
    });
  });
