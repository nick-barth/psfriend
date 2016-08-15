(function () {
'use strict';

angular
		.module('product.services')
		.factory('ProductService', ProductService);

function ProductService () {
	return {
		product: {
			user: false,
			card: {
				theme: null,
				art: null,
				sender: null,
				recipient: null,
				gift: null,
				note: null

			},
			address: {
				name: null,
				line1: null,
				line2: null,
				state: null,
				city: null,
				zip: null,
				country: null
			},
		}
	};
}

}());
