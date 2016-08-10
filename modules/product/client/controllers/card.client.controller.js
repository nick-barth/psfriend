(function () {
'use strict';

angular
	.module('product')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function CardController ($scope, $state, $http, ProductService) {
	$scope.card = ProductService.product.card;

	$scope.save = function () {
		ProductService.product.card = $scope.card;
		$state.go('address');
	};
}
}());
