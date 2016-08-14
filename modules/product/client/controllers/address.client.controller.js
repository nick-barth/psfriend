(function () {
'use strict';

angular
	.module('product')
	.controller('AddressController', AddressController);

AddressController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function AddressController ($scope, $state, $http, ProductService) {
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
		if (false) {
			ProductService.product.address = $scope.address;
			$state.go('card');
		}
	};
}
}());
