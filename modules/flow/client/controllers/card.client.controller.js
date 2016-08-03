(function () {
'use strict';

angular
	.module('card')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function CardController ($scope, $state, $http, ProductService) {
	$scope.foobar = ProductService.product.theme;

	$scope.next = function () {
		console.log('wow');
		ProductService.product.theme = $scope.foobar;
	};
}
}());
