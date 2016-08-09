'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	stripe = require('stripe')('sk_test_tPfzyUAM233jL497ICuteBSn'),
	Product = mongoose.model('Product');

/**
 * add subscription
 */
exports.add = function (req, res) {
	let token = req.body.token;
	let product = new Product(req.body);
	stripe.customers.create({
		source: token,
		plan: 'basic_test',
		email: 'ethan'
	}, function (err, customer) {
			console.log(err);
		});
		/*
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
	*

	return res.sendStatus(200);
	*/
};
