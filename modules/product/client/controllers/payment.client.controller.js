(function () {
'use strict';

angular
	.module('product')
	.controller('PaymentController', PaymentController);

PaymentController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function PaymentController ($scope, $state, $http, ProductService) {
	$scope.ProductService = ProductService.product;

	if (productService.user) {
		$scope.backLink = '/onboard/address';
	} else {
		$scope.backLink = '/onboard/signup';
	};

	$scope.submit = function () {
		$http.post('/api/product/add', $scope.ProductService)
			.success(function (response) {
				console.log('subscription added');
			});
	};

}
}());
