(function () {
'use strict';

angular
	.module('product')
	.controller('AddressController', AddressController);

AddressController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function AddressController ($scope, $state, $http, ProductService) {
	$scope.address = ProductService.product.address;

	if (user) {
		$scope.nextLink = '/onboard/payment';
	} else {
		$scope.nextLink = '/onboard/signup';
	};

	$scope.backLink = '/onboard/card';

	$scope.next = function () {
		ProductService.product.address = $scope.address;
	};
}
}());
