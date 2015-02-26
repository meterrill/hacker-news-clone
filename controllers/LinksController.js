hackerNews.controller('LinksCtrl', function LinksCtrl($scope, $state, $stateParams, LinksFactory) {
  $scope.allLinks = LinksFactory.allLinks;
  $scope.LinksFactory = LinksFactory;

  $scope.addLinkAndReturn = function() {
    LinksFactory.addLink();
    $state.go('home');
  };
});
