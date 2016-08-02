(function () {
'use strict';

angular
	.module('product')
	.controller('FlowController', flowController);

CardController.$inject = ['$scope', '$state', '$http', 'ui.router'];

function CardController ($scope, $state, $http, router) {
	function eatBalls (url) {
		console.log('balls');
	}
}
}());
