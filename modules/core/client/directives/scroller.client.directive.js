(function () {
'use strict';

angular
	.module('core')
	.directive('navScroller', navScroller);

navScroller.$inject = ['$window'];

function navScroller ($window) {
	return {
		link: function (scope, element, attrs) {
			if (angular.element(element).hasClass('header--fixed-top')) {
				angular.element($window).bind('scroll', function () {
					if ($window.scrollY > 25) {
						element.addClass('header--scrolled');
						element.removeClass('header--fixed-top');
					} else {
						element.removeClass('header--scrolled');
						element.addClass('header--fixed-top');
					}

				});
			}
		}
	};
}
}());
