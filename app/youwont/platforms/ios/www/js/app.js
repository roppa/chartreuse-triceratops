var youwont = angular.module('youwont', ['ionic', 'ngCordova', 'youwont.controllers', 'youwont.factory', 'youwont.services', 'FacebookLogin', 'Challenges']);

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
    })
    .state('login', {
      url : "/login",
      templateUrl: 'templates/login.html',
      controller: "loginCtrl"
    });

});

youwont.run(function($ionicPlatform, $rootScope, authLogin, $state) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.hide();
      ionic.Platform.fullScreen();
    }

    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams) {
       
      if (toState.name !== 'login' && !authLogin.checkState()){
          $state.go('login')
          event.preventDefault();
      }

      if (toState.name === 'login' && authLogin.checkState()){
          $state.go('home');
          event.preventDefault();
      }

    });

  });

});