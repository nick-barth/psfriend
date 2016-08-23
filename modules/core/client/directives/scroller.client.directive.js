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
			angular.element($window).bind('scroll', function () {
				//scroll content goes here!
			});
		}
	};
}
}());
