var youwontController = angular.module('youwont.controllers', ['FacebookLogin', 'Challenges', 'ngCordova']);

youwontController.controller('challengeCtrl', function ($scope, challenges) {
  $scope.challenges = challenges;
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

youwontController.controller('videoCtrl', function ($scope, challenges, $ionicPlatform, $state, $cordovaCamera, $cordovaCapture, VideoService) {
  
  var newChallenge = $scope.challenge = {};
  challenges.push(newChallenge);
  $scope.challenge.clip = '';
  $scope.challenge.status = '';

  $scope.captureVideo = function() {

    // $state.go('video');

    var options = { 
      limit: 3, 
      duration: 15
    };

    $ionicPlatform.ready(function() { //wrapper to ensure device is ready
      $cordovaCapture
        .captureVideo(options).then(function(videoData) {
            VideoService.saveVideo(videoData).success(function(data) {
              $scope.challenge.clip = data;
              $scope.challenge.status = data;
              $scope.challenge.img = $scope.urlForClipThumb(data);
              $scope.$apply();
            }).error(function(data) {
              $scope.challenge.status = data;
            });
          }, function(err) {
            $scope.challenge.status = err.message;
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