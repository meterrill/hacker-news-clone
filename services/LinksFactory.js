hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.allLinks = [];
  factory.addLink = function() {
    factory.allLinks.push({ title: factory.linkTitle,
                            url: factory.linkUrl,
                            voteCounter: 0,
                            rankingCounter: 0,
                            id: factory.allLinks.length + 1,
                            comments: [],
                            upvote: function() {
                              this.voteCounter += 1;
                              this.rankingCounter += 1;
                            }
                            });
    factory.linkTitle = null;
    factory.linkUrl = null;
  };

  factory.mostRecent = function() {
    factory.allLinks.forEach(function(link) {
      if ((factory.allLinks.length - link.id) >= 2) {
        link.rankingCounter -= 1;
      }
    });
  };

  return factory;

});
