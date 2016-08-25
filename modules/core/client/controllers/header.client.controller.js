(function () {
'use strict';

angular
		.module('core')
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', '$state', '$timeout', 'Authentication'];

function HeaderController ($scope, $state, $timeout, Authentication) {
	$timeout(function () { $state.current.name == 'home' ? $scope.fixed = true : $scope.fixed = false; }, 100);
	$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		$state.current.name == 'home' ? $scope.fixed = true : $scope.fixed = false;
	});
}
}());
