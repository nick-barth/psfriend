(function () {
'use strict';

angular
	.module('card')
	.controller('AddressController', AddressController);

AddressController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function AddressController ($scope, $state, $http, ProductService) {
	console.log(ProductService);

	$scope.next = function () {
		console.log('wow');
		ProductService.product.theme = $scope.foobar;
	};
}
}());
