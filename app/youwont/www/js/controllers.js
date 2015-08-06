var youwontController = angular.module('youwont.controllers', []);

youwontController.controller('ChallengeCtrl', function ($scope) {
  console.log("in ChallengeCtrl/home");
});

youwontController.controller('ResponsesCtrl', function ($scope) {
  console.log("in ResponsesCtrl");
});

youwontController.controller('VideoCtrl', function ($scope) {
  console.log("in VideoCtrl");
});

youwontController.controller("gridController", function($scope) {
  // $scope.data = {};
  $scope.data = [];
  $scope.showData = function() {
    for (var i = 0; i < 20; i++) {
      $scope.data.push({
        id: i,
        src: "http://placehold.it/50x50",
        text: "Some random text"
      });
    }
  };
});