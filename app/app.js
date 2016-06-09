(function () {
	var ailrunBlogApp = angular.module("ailrunBlogApp", ["ui.router", "ailrunBlogController"]);

	ailrunBlogApp.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('main', {
				"url": "/main",
				"templateUrl": "template/main.html"
			})
			.state('posts', {
				"url": "/posts",
				"templateUrl": "template/posts.html"
			})
			.state('projects', {
				"url": "/projects",
				"templateUrl": "template/projects.html"
			})
			.state('about', {
				"url": "/about",
				"templateUrl": "template/about.html"
			});

		$urlRouterProvider.otherwise("/main");
	});
}());
