angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks().then(function (response) {
      $scope.data.links = response.data;
    });
  };
  $scope.getLinks();
  $scope.goLink = function(link) {
    window.open(link.url);
    link.visits++;
  }
});
