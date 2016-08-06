(function () {
	'use strict';

	angular
	.module('product.routes')
	.config(routeConfig);

	function routeConfig ($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise('/card');
		//
		// Now set up the states
		$stateProvider
		.state('card', {
			url: '/card',
			templateUrl: 'modules/product/client/views/card.client.view.html',
			controller: 'CardController',
		})
		.state('address', {
			url: '/address',
			templateUrl: 'modules/product/client/views/address.client.view.html',
			controller: 'AddressController',
		})
		.state('payment', {
			url: '/payment',
			templateUrl: 'modules/product/client/views/payment.client.view.html',
			controller: 'PaymentController',
		});
	}
}());
