(function () {
'use strict';

angular
	.module('product')
	.controller('PaymentController', PaymentController);

PaymentController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function PaymentController ($scope, $state, $http, ProductService) {

	$scope.submit = function () {
		console.log($scope.foobar);
	};
}
}());
