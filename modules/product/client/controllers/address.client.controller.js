(function () {
'use strict';

angular
	.module('product')
	.controller('AddressController', AddressController);

AddressController.$inject = ['$scope', '$state', 'ProductService'];

function AddressController ($scope, $state, ProductService) {
	$scope.address = ProductService.product.address;

	$scope.next = function () {
		ProductService.product.address = $scope.address;
		if (user) {
			$state.go('payment');
		} else {
			$state.go('signup');
		}
	};
	$scope.back = function () {
		$state.go('card');
	};
}
}());
