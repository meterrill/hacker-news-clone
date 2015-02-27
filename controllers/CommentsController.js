hackerNews.controller('CommentsCtrl', function CommentsCtrl($scope, $state, $stateParams, LinksFactory, UtilitiesFactory) {
  $scope.selectedLink = UtilitiesFactory.findById(LinksFactory.allLinks, $stateParams.linkId);
  $scope.addComment = function() {
    $scope.selectedLink.comments.push({name: $scope.userName,
                                      comment: $scope.comment,
                                      replies: [],
                                      voteCounter: 0,
                                      rankingCounter: 0,
                                      id: $scope.selectedLink.comments.length + 1,
                                      upvote: function() {
                                        this.voteCounter += 1;
                                        this.rankingCounter += 1;
                                      },
                                      reply: function(someText) {
                                        this.replies.push({
                                          reply: someText
                                        })
                                      }
                                      });

    $scope.userName = null;
    $scope.comment = null;
    $state.go('home');
  }

  $scope.mostRecent = function() {
    $scope.selectedLink.comments.forEach(function(comment) {
      if (($scope.selectedLink.comments.length - comment.id) >= 2) {
        comment.rankingCounter -= 1;
      }
    });
  }

});
