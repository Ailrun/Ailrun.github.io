(function () {
	var ailrunBlogController = angular.module("ailrunBlogController", []);
	
	ailrunBlogController.controller('TopBarController', function ($scope) {
		$scope.topBarMenus = [
			{
				"name": "Main",
				"link": "main"
			},
			{
				"name": "Posts",
				"link": "posts"
			},
			{
				"name": "Projects",
				"link": "projects"
			},
			{
				"name": "About",
				"link": "about"
			}
		];
	});

	ailrunBlogController.controller('MainController', function ($scope) {
		$scope.mainBanners = [
			{
				"title": "Haskell",
				"description": "Modern, Pure, Beautiful\nFunctional Language",
				"background": "image/haskell.png",
				"linkName": "Haskell Projects",
				//"link": "projects/haskell"
			},
			{
				"title": "Beer",
				"description": "The World's Greatest Drink",
				"background": "image/beer.png",
				"linkName": "Beer List",
				//"link": "posts/beers"
			}
		];
	});

	ailrunBlogController.controller('AboutController', function ($scope) {
		$scope.subjects = [
			{
				"title": "Hobby",
				"entries": [
					"Enjoy with beer",
					"Fall in love with foods",
					"Writing poem"
				]
			},
			{
				"title": "Contact",
				"entries": [
					"Github"
				]
			},
			{
				"title": "Educational Background",
				"entries": [
					"Seoul Nat'l Univ\nBachelor's degree of Chemistry\nBachelor's degree of Philosophy\nBachelor's degree of Computer Science and Engineering"
				]
			}
		];
	});
}());
