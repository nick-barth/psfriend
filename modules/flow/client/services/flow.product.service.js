(function () {
'use strict';

angular
		.module('product.services')
		.factory('ProductService', ProductService);

function ProductService () {
	return {
		product: {
			theme: 'sad',
			text: 'wow'
		}
	};
}

}());
