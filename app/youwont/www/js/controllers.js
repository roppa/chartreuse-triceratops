var youwontController = angular.module('youwont.controllers', ['FacebookLogin', 'ngCordova']);

youwontController.controller('challengeCtrl', function ($scope) {

  $scope.challenges = [];

  (function() {
    for (var i = 0; i < 4; i++) {
      $scope.challenges.push({
        id: i,
        title: "Title " + i,
        img: "http://placehold.it/50x50",
        description: "Walk to the corner shop naked",
        likes: 3
      });
    }
  })();

});

youwontController.controller('responsesCtrl', function ($scope) {

  $scope.challenge = {
    title: "Mark's challenge",
    responses : []
  };

  (function() {
    for (var i = 0; i < 3; i++) {
      $scope.challenge.responses.push({
        id: i,
        title: "Test title",
        people: "Bob, Peter, Joanne",
        img: "http://placehold.it/50x50",
        description: "Walk to the corner shop naked",
        likes: 3
      });
    }
  })();

});

youwontController.controller('loginCtrl', function ($scope,authLogin) {
    $scope.logout = authLogin.logout;
    $scope.getAuthState = authLogin.checkState;
    $scope.login = authLogin.logUserIn;
});

youwontController.controller('videoCtrl', function ($scope, $ionicPlatform, $state, $cordovaCamera, $cordovaCapture, VideoService) {
  
  $scope.clip = '';

  $scope.captureVideo = function() {

    $state.go('video');

    var options = { 
      limit: 3, 
      duration: 15
    };

    $ionicPlatform.ready(function() { //wrapper to ensure device is ready
      $cordovaCapture
        .captureVideo(options).then(function(videoData) {
            VideoService.saveVideo(videoData).success(function(data) {
              $scope.clip = data;
              $scope.$apply();
            }).error(function(data) {
              console.log('ERROR: ' + data);
            });
          }, function(err) {
            console.log(err);

          });

    }); //wrapper

  };

  $scope.urlForClipThumb = function(clipUrl) {
    var name = clipUrl.substr(clipUrl.lastIndexOf('/') + 1);
    var trueOrigin = cordova.file.dataDirectory + name;
    var sliced = trueOrigin.slice(0, -4);
    return sliced + '.png';
  }
   
  $scope.showClip = function(clip) {
    console.log('show clip: ' + clip);
  }

});