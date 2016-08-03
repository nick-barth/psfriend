(function () {
	'use strict';

	angular
	.module('flow.routes')
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
			templateUrl: 'modules/flow/client/views/card.client.view.html',
			controller: 'CardController',
			controllerAs: 'cc'
		})
		.state('address', {
			url: '/address',
			templateUrl: 'modules/flow/client/views/address.client.view.html',
			controller: 'AddressController',
			controllerAs: 'ac'
		});
	}
}());
