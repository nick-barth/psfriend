'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Product = mongoose.model('Product');

/**
 * add subscription
 */
exports.add = function (req, res) {

	let product = new Product(req.body);

	product.save(function (err) {
		console.log(err);
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			console.log('success');
		}
	});

	return res.sendStatus(200);
};
