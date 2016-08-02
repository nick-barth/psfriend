(function () {
'use strict';

angular
	.module('card')
	.controller('CardController', CardController);

CardController.$inject = ['$scope', '$state', '$http'];

function CardController ($scope, $state, $http) {
	//runs on load of flow
}
}());
