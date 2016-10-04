(function () {
'use strict';

angular
	.module('users')
	.controller('MyCardsController', MyCardsController);

MyCardsController.$inject = ['$scope', '$http', 'Authentication'];

function MyCardsController ($scope, $http, Authentication) {
	if (!user) {
		state.go('login');
	}
	$http({
		method: 'GET',
		url: '/api/user/settings'
	})
	.success(function (response) {
		$scope.subs = response.subs;
	}).error(function (response) {
		$scope.error = response.message;
	});

	$scope.cancel = function (id) {
		var id = {
			id: id
		};
		$http.post('/api/user/cancel', id).success(function (response) {
			$scope.subs = response.subs;
		}).error(function (response) {
			//todo: add error catching on failed cancel, blame stripe
		});
	};

}
}());
