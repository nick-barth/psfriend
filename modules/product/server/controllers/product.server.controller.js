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
	switch (product.card.art) {
		case '1':
			product.card.art = 'Photography';
		break;
		case '2':
			product.card.art = 'Art';
		break;
	}
	switch (product.card.theme) {
		case '1':
			product.card.theme = 'Motivation';
		break;
		case '2':
			product.card.theme = 'Fun';
		break;
		case '3':
			product.card.theme = 'Inspiration';
		break;
	}

	stripe.customers.create({
		source: token,
		plan: 'basic_test',
		email: product.user.email
	}, function (err, customer) {
			product.sub_id = customer.subscriptions.data[0].id;
			product.save(function (err) {
				if (err) {
					return res.status(400).send({
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					console.log('success');
				}
			});

			return res.sendStatus(200);
		});
};
