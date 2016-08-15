(function () {
'use strict';

angular
	.module('users')
	.controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$http', 'Authentication'];

function SettingsController ($scope, $http, Authentication) {
	if (!user) {
		state.go('login');
	}
	$http({
		method: 'GET',
		url: '/api/user/settings'
	})
	.success(function (response) {
		console.log(response.subs);
		$scope.subs = response.subs;
	}).error(function (response) {
		console.log('error');
		$scope.error = response.message;
	});

}
}());
