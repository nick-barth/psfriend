(function () {
'use strict';

angular
	.module('core').run(['$rootScope', '$state',
		function ($rootScope, $state) {
			$rootScope.$on('$stateChangeSuccess', function () {
				$rootScope.fixed = $state.current.name == 'home';
			});
		}
	])
	.directive('navScroller', navScroller);

function navScroller ($rootScope, $window, $timeout) {
	return {
		link: function (scope, element, attrs) {
			$timeout(function () {
				angular.element($window).bind('scroll', function () {
					if ($rootScope.fixed) {
						if ($window.scrollY > 25) {
							element.addClass('header--scrolled');
							element.removeClass('header--fixed-top');
						} else {
							element.removeClass('header--scrolled');
							element.addClass('header--fixed-top');
						}
					}
				});
			});
		}
	};
}
}());
