

(function () {
'use strict';

angular
.module('product')
	.directive('eventFocus', eventFocus);

function eventFocus ($window) {
	return {
		link: function (scope, element, attrs) {
			element[0].focus();
		}
	};
};
}());
