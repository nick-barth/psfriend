(function () {
'use strict';

angular
	.module('product')
	.controller('AddressController', AddressController);

AddressController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function AddressController ($scope, $state, $http, ProductService) {
	$scope.address = ProductService.product.address;

	$scope.nextLink = '/onboard/payment';

	$scope.backLink = '/onboard/card';

	$scope.next = function () {
		ProductService.product.address = $scope.address;
	};
}
}());
