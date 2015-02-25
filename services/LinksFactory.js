hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.allLinks = [];
  factory.addLink = function() {
    factory.allLinks.push({ title: factory.linkTitle, url: factory.linkUrl, id: factory.allLinks.length + 1, comments: []});
    factory.linkTitle = null;
    factory.linkUrl = null;
  };
  return factory;
});
