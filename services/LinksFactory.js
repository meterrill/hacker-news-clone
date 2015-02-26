hackerNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.allLinks = [];
  factory.addLink = function() {
    factory.allLinks.push({ title: factory.linkTitle,
                            url: factory.linkUrl,
                            voteCounter: 0,
                            id: factory.allLinks.length + 1,
                            createdDate: function() {
                              Date.now();
                            },
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


// var count = 10;
// var counterIncrement=-1;
// var counter = setInterval(timer, 500);
//
// function timer() {
//   count = count+counterIncrement;
//   if (count == 0 || count == 10 ) {
//         counterIncrement = -counterIncrement;
//     }
//   console.log(count);
// }
