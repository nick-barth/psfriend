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
			templateUrl: 'modules/flow/client/views/card/card.client.view.html'
		})
		.state('state1.list', {
			url: '/list',
			templateUrl: 'partials/state1.list.html',
			controller: function ($scope) {
				$scope.items = ['A', 'List', 'Of', 'Items'];
			}
		})
		.state('state2', {
			url: '/state2',
			templateUrl: 'partials/state2.html'
		})
		.state('state2.list', {
			url: '/list',
			templateUrl: 'partials/state2.list.html',
			controller: function ($scope) {
				$scope.things = ['A', 'Set', 'Of', 'Things'];
			}
		});
	}
}());
