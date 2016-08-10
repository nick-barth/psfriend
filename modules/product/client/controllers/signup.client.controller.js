(function () {
'use strict';

angular
	.module('product')
	.controller('SignupController', SignupController);

SignupController.$inject = ['$scope', '$state', '$http', 'ProductService', 'Authentication'];

function SignupController ($scope, $state, $http, ProductService, Authentication) {
	console.log(Authentication);
	$scope.create = function () {
		$scope.create = function () {
			let credentials = {
				email: $scope.email,
				password: $scope.password
			};

			$http.post('/api/auth/signup', credentials).success(function (response) {
				//If successful we assign the response to the global user model
				Authentication.user = response;

				//And redirect to the previous or home page
				$state.go('payment');
			}).error(function (response) {
				error = response.message;
			});
		};
	};
}

}());
