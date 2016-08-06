'use strict';

module.exports = function (app) {
	// User Routes
	var product = require('../controllers/product.server.controller.js');
	app.route('/api/product/add').post(product.add);
};
