var youwontController = angular.module('youwont.controllers', []);

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

youwontController.controller('videoCtrl', function ($scope) {
  $scope;
});