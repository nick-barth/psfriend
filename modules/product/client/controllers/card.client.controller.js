(function () {
'use strict';

angular
	.module('product')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function CardController ($scope, $state, $http, ProductService) {
	$scope.card = ProductService.product.card;

	$scope.who = function (choice) {
		if (choice == true) {
			$scope.card.gift = 1;
		} else {
			$scope.card.gift = 0;
		}
	};

	$scope.why = function (choice) {
		$scope.card.theme = choice;
	};

	$scope.save = function () {
		ProductService.product.card = $scope.card;
		$state.go('address');
	};
}
}());
