hackerNews.controller('RepliesCtrl', function RepliesCtrl($scope, $state, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.comment = UtilitiesFactory.findById(LinksFactory.selectedLink.comments, $stateParams.commentId);
  $scope.addReply = function() {
    $scope.comment.replies.push({name: $scope.userName,
                                reply: $scope.reply,
                              });
    $scope.userName = null;
    $scope.reply = null;
  }

});
