(function () {
'use strict';

angular
	.module('product')
	.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$state'];

function HomeController ($scope, $state) {

	$scope.signup = function () {
		$state.go('card');
	};
}
}());
