(function () {
'use strict';

angular
		.module('core')
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', '$state', 'Authentication'];

function HeaderController ($scope, $state, Authentication) {
}
}());
