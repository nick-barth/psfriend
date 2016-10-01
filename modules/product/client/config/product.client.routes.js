(function () {
	'use strict';

	angular
	.module('product.routes')
	.config(routeConfig);

	function routeConfig ($stateProvider, $urlRouterProvider) {
		// Now set up the states
		$stateProvider
		.state('card', {
			url: '/smile/card',
			templateUrl: 'modules/product/client/views/card.client.view.html',
			controller: 'CardController',
		})
		.state('address', {
			url: '/smile/address',
			templateUrl: 'modules/product/client/views/address.client.view.html',
			controller: 'AddressController',
		})
		.state('signup', {
			url: '/smile/signup',
			templateUrl: 'modules/product/client/views/signup.client.view.html',
			controller: 'SignupController',
		})
		.state('payment', {
			url: '/smile/payment',
			templateUrl: 'modules/product/client/views/payment.client.view.html',
			controller: 'PaymentController',
		})
		.state('thankyou', {
			url: '/smile/thanks',
			templateUrl: 'modules/product/client/views/thanks.client.view.html',
			controller: 'ThanksController',
		});
	}
}());
