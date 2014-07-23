// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('icebreaker', ['ionic', 'openfb']);


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
  
  $rootScope.currentUser = {};
  $rootScope.currentUser.id = 0;
  $rootScope.currentEvent = {};
  Events.getEvents().then(function(results) {
    $rootScope.potentialEvents = results.data.events;
  });
})


.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.interceptors.push('httpRequestInterceptor');
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
