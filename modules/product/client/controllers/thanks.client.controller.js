(function () {
'use strict';

angular
	.module('product')
	.controller('ThanksController', ThanksController);

ThanksController.$inject = ['$scope', '$state', '$http', 'ProductService'];

function ThanksController ($scope, $state, $http, ProductService) {
}
}());
