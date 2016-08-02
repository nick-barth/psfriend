(function () {
	'use strict';

	angular
	.module('users.routes')
	.config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];

	function routeConfig ($stateProvider) {
		// Users state routing
		$stateProvider
		.state('flow', {
			url: '/flow',
			templateUrl: 'modules/flow/client/views/card/card.client.view.html',
			controller: 'CardController',
			controllerAs: 'vm'
		}).state('flow.gift', {
			url: '/flow/gift',
			templateUrl: 'modules/users/client/views/settings/edit-profile.client.view.html',
			controller: 'GiftController',
			controllerAs: 'vm',
			data: {
				pageTitle: 'Gift'
			}
		}).state('flow.personal', {
			url: '/flow/personal',
			templateUrl: 'modules/users/client/views/settings/edit-profile.client.view.html',
			controller: 'PersonalController',
			controllerAs: 'vm',
			data: {
				pageTitle: 'Personal'
			}
		});
	}
}());
