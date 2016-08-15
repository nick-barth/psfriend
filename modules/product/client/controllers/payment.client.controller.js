(function () {
'use strict';

angular
	.module('product')
	.controller('PaymentController', PaymentController);

PaymentController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function PaymentController ($scope, $state, $http, ProductService) {
	if (!user) {
		$state.go('signup');
	}
	$scope.ProductService = ProductService.product;

	$scope.ProductService.user = user;

	$scope.back = function () {
		$state.go('address');
	};

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
					$state.go('thankyou');
				});
		};
	};
}
}());
