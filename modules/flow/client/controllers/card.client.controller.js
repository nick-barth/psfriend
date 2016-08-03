(function () {
'use strict';

angular
	.module('card')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function CardController ($scope, $state, $http, ProductService) {
	console.log(ProductService);
}
}());
