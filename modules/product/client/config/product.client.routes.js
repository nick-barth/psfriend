(function () {
	'use strict';

	angular
	.module('product.routes')
	.config(routeConfig);

	function routeConfig ($stateProvider, $urlRouterProvider) {
		// Now set up the states
		$stateProvider
		.state('card', {
			url: '/onboard/card',
			templateUrl: 'modules/product/client/views/card.client.view.html',
			controller: 'CardController',
		})
		.state('address', {
			url: '/onboard/address',
			templateUrl: 'modules/product/client/views/address.client.view.html',
			controller: 'AddressController',
		})
		.state('signup', {
			url: '/onboard/signup',
			templateUrl: 'modules/product/client/views/signup.client.view.html',
			controller: 'SignupController',
		})
		.state('payment', {
			url: '/onboard/payment',
			templateUrl: 'modules/product/client/views/payment.client.view.html',
			controller: 'PaymentController',
		});
	}
}());
