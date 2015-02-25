hackerNews.controller('LinksCtrl', function LinksCtrl($scope, LinksFactory) {
  $scope.allLinks = LinksFactory.allLinks;
  $scope.LinksFactory = LinksFactory;
});
