(function () {
'use strict';

angular
	.module('product')
	.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$state', '$http', 'ProductService', 'Authentication'];

function SignupController ($scope, $state, $http, ProductService, Authentication) {

	$scope.back = function () {
		$state.go('address');
	};

	$scope.next = function () {
		let credentials = {
			email: $scope.email,
			password: $scope.password1
		};

		$http.post('/api/auth/signup', credentials).success(function (response) {
			//If successful we assign the response to the global user model
			Authentication.user = response;
			//And redirect to the previous or home page
			$state.go('payment');

			//todo: redirect occassionally failing

		}).error(function (response) {
			$scope.error = response.message;
		});
	};
}

}());
