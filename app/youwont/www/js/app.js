var youwont = angular.module('youwont', ['ionic', 'youwont.controllers', 'youwont.factory'])


youwont.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url : "/",
      templateUrl: 'templates/challenge.html',
      controller: "challengeCtrl"
    })
    .state('responses', {
      url : "/responses",
      templateUrl: 'templates/responses.html',
      controller: "responsesCtrl"
    })
    .state('video', {
      url : "/video",
      templateUrl: 'templates/video.html',
      controller: "videoCtrl"
    });
});

youwont.run(function($ionicPlatform) {

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


