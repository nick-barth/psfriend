(function () {
'use strict';

angular
		.module('core')
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$rootScope', '$scope', '$state', '$timeout', 'Authentication'];

function HeaderController ($rootScope, $scope, $state, $timeout, Authentication) {
}
}());
