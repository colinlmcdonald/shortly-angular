angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorties) {
  $scope.link = {};

  $scope.addLink = function() {
    // var stringed = JSON.stringify($scope.link.data);
    // console.log(stringed);
    Shorties.addLink($scope.link.data);
  };
});
