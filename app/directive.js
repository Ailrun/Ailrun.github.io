(function () {
	var ailrunBlogDirective = angular.module("ailrunBlogDirective", []);

	ailrunBlogDirective.directive('fadeIn', function ($timeout) {
		return {
			"restrict": "A",
			"link": function ($scope, $element, attrs) {
				$element.addClass("ng-hide-remove");
				$element.on("load", function () {
					$element.addClass("ng-hide-add");
				});
			}
		};
	});
}());
