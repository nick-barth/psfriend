(function () {
'use strict';

angular
	.module('core')
	.directive('navScroller', navScroller);

navScroller.$inject = ['$window'];

function navScroller ($window) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			if (angular.element.hasClass('navbar--fixed-top')) {
				angular.element($window).bind('scroll', function () {
					if ($window.scrollY > 25) {
						element.addClass('navbar--scrolled');
					} else {
						element.removeClass('navbar--scrolled');
					}

				});
			}
		}
	};
}
}());
