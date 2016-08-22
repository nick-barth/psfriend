(function () {
'use strict';

angular
		.module('core')
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', '$state', '$document', '$window', '$timeout', 'Authentication'];

function HeaderController ($scope, $state, $document, $window, $timeout, Authentication) {
	//bad and annoying hack to determine states name, ui router :(
	$timeout(function () {
		if ($state.current.name == 'home') {
			$scope.fixed = true;
			$document.on('scroll', function () {
				if ($window.scrollY > 10) {
					$scope.scrolled = true;
					console.log($scope.scrolled);
				} else {
					$scope.scrolled = false;
				}
			});
		}
	}, 100);
}
}());
