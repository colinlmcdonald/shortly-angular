angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorties) {
  $scope.link = {};

  $scope.addLink = function() {
    Shorties.addLink();
  };
});
