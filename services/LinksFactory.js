hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.allLinks = [];
  factory.addLink = function() {
    factory.allLinks.push({ title: factory.linkTitle,
                            url: factory.linkUrl,
                            voteCounter: 0,
                            id: factory.allLinks.length + 1,
                            comments: [],
                            upvote: function() {
                              this.voteCounter += 1;
                              }
                            });
    factory.linkTitle = null;
    factory.linkUrl = null;
  };

  return factory;

});
