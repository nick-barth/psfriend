(function () {
'use strict';

angular
		.module('core')
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$scope', '$state', '$timeout', 'Authentication'];

function HeaderController ($scope, $state, $timeout, Authentication) {

}
}());
