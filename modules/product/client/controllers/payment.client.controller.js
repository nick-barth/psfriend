(function () {
'use strict';

angular
	.module('product')
	.controller('PaymentController', PaymentController);

PaymentController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function PaymentController ($scope, $state, $http, ProductService) {
	$scope.ProductService = ProductService.product;

	$scope.backLink = '/onboard/address';
	$scope.ProductService.user = user;

	$scope.submit = function () {
		Stripe.card.createToken(paymentForm, $scope.stripeResponseHandler);
	};

	$scope.stripeResponseHandler = function (status, response) {
		if (response.error) { // Problem!
			console.log(response.error);
		} else {
			$scope.ProductService.token = response.id;
			console.log($scope.ProductService);
			$http.post('/api/product/add', $scope.ProductService)
				.success(function (response) {
					console.log('subscription added');
				});
		};
	};
}
}());
