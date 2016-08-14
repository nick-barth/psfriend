(function () {
'use strict';

angular
	.module('product')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function CardController ($scope, $state, $http, ProductService) {
	$scope.card = ProductService.product.card;

	$scope.gift = function (choice) {
		$scope.card.gift = choice;
	};

	$scope.why = function (choice) {
		$scope.card.theme = choice;
	};

	$scope.art = function (choice) {
		console.log(choice);
		$scope.card.art = choice;
	};

	$scope.next = function () {
		ProductService.product.card = $scope.card;
		$state.go('address');
	};
}
}());
