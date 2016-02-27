angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorties) {
  $scope.link = {};

  $scope.addLink = function(link) {
    Shorties.addLink(link);
    console.log(')_)_)())(Y)*&)#$', link)
  };
});
