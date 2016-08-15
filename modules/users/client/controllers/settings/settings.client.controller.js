(function () {
'use strict';

angular
	.module('users')
	.controller('SettingsController', SettingsController);

SettingsController.$inject = ['$scope', '$http', 'Authentication'];

function SettingsController ($scope, $http, Authentication) {
	console.log('wow');
}
}());
