(function () {
'use strict';

angular
		.module('core')
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$http', 'Authentication'];

function HeaderController ($rootScope, $scope, $state, $timeout, $http, Authentication) {
	$scope.authentication = Authentication;

	$scope.signout = function () {
		$http.get('/api/auth/signout').success(function (response) {
			Authentication.user = null;
			$state.go('home');
		}).error(function (response) {
			$scope.error = response.message;
		});
	};
}
}());
