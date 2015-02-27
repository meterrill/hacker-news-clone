var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'LinksCtrl'
  });

  $stateProvider.state('newLink', {
    url: "/newLink",
    templateUrl: "partials/newLink.html",
    controller: 'LinksCtrl'
  });

  $stateProvider.state('comments', {
    url: "/:linkId",
    templateUrl: "partials/comments.html",
    controller: 'CommentsCtrl'
  });

  $stateProvider.state('comments.reply', {
    url: "/:commentId",
    templateUrl: "partials/reply.html",
    controller: 'RepliesCtrl'
  });
});
