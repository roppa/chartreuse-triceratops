var youwont = angular.module('youwont', ['ionic', 'ngCordova', 'youwont.controllers', 'youwont.factory', 'youwont.services', 'FacebookLogin', 'Challenges']);

youwont.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url : "/",
      templateUrl: 'templates/challenge.html',
      controller: "challengeCtrl",
      onEnter: function($state,authLogin){
        if (!authLogin.checkState()){
          $state.go('login')
        }
      }
    })
    .state('responses', {
      url : "/responses",
      templateUrl: 'templates/responses.html',
      controller: "responsesCtrl",
      onEnter: function($state,authLogin){
        if (!authLogin.checkState()){
          $state.go('login')
        }
      }
    })
    .state('video', {
      url : "/video",
      templateUrl: 'templates/video.html',
      controller: "videoCtrl",
      onEnter: function($state,authLogin){
        if (!authLogin.checkState()){
          $state.go('login')
        }
      }
    })
    .state('login', {
      url : "/login",
      templateUrl: 'templates/login.html',
      controller: "loginCtrl",
      onEnter: function($state,authLogin){
        if (authLogin.checkState()){
          $state.go('home')
        }
      }
      
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
       console.log('state changed')
      if (toState.name !== 'login' && !authLogin.checkState()){
          $state.go('login')
          event.preventDefault();
      }

      if (toState.name === 'login' && authLogin.checkState()){
        console.log('already logged in')
          $state.go('home');
          event.preventDefault();
      }

    });

  });

});