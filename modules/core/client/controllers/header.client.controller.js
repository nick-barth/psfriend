(function () {
'use strict';

angular
		.module('core').run(['$rootScope', '$state',
			function ($rootScope, $state) {
				$rootScope.$on('$stateChangeSuccess', function () {
					$rootScope.fixed = $state.current.name == 'home';
				});
			}
		])
		.controller('HeaderController', HeaderController);

HeaderController.$inject = ['$rootScope', '$scope', '$state', '$timeout', 'Authentication'];

function HeaderController ($rootScope, $scope, $state, $timeout, Authentication) {
}
}());
