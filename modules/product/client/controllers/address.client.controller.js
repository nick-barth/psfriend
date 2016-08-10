(function () {
'use strict';

angular
	.module('product')
	.controller('AddressController', AddressController);

AddressController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function AddressController ($scope, $state, $http, ProductService) {
	$scope.address = ProductService.product.address;

	$scope.save = function () {
		ProductService.product.address = $scope.address;
		console.log(user);
		if (user) {
			$state.go('payment');
		} else {
			$state.go('signup');
		}
	};
}
}());
