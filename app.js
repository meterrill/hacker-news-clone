var hackerNews = angular.module('hackerNews', ['ui.router']);

hackerNews.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('newLink', {
    url: "/newLink",
    templateUrl: "partials/newLink.html",
    controller: 'LinksCtrl'
  });
});
