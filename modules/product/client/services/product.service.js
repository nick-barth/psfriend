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
				theme: '',
				art: '',
				name: '',
				sender: 'A friend'
			},
			address: {
				name: '',
				line1: '',
				line2: '',
				state: '',
				city: '',
				zip: '',
				country: ''
			},
		}
	};
}

}());
