hackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.selectedLink = UtilitiesFactory.findById(LinksFactory.allLinks, $stateParams.linkId);
  $scope.addComment = function() {
    $scope.selectedLink.comments.push({name: $scope.userName, comment: $scope.comment});
    $scope.userName = null;
    $scope.comment = null;
  }
});
