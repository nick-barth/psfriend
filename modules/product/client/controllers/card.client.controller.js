(function () {
'use strict';

angular
	.module('product')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function CardController ($scope, $state, $http, ProductService) {
	$scope.card = ProductService.product.card;

	if (user) {
		ProductService.product.user = true;
	};

	$scope.nextLink = 'onboard/address';

	$scope.next = function () {
		ProductService.product.card = $scope.card;
	};
}
}());
