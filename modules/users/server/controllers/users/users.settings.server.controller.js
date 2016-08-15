'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
	path = require('path'),
	config = require(path.resolve('./config/config')),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Product = mongoose.model('Product'),
	stripe = require('stripe')('sk_test_tPfzyUAM233jL497ICuteBSn');

exports.settings = function (req, res) {
	Product.find({ 'user.email': req.user.email }, function (err, docs) {
		if (err) {
			return res.status(400).send({
				message: 'No current active subscriptions'
			});
		} else {
			var subs = _.map(docs, function (doc) {
				let newObj = {
					card: doc.card,
					address: doc.address,
					id: doc._id
				};
				return newObj;
			});
			return res.status(200).send({
				subs: subs
			});
		}
	});
};

exports.cancel = function (req, res) {
	console.log(req.body.id);
	Product.find({ '_id': req.body.id }, function (err, doc) {
		stripe.subscriptions.del(
			doc[0].sub_id,
			function (err, confirmation) {
				//TODO: Add Error Handling
				if (!err) {
					Product.find({ '_id': req.body.id }, function (err, doc) {
					}).remove(function (err)
					{
						if (!err) {
							Product.find({ 'user.email': req.user.email }, function (err, docs) {
								if (err) {
									return res.status(400).send({
										message: 'No current active subscriptions'
									});
								} else {
									var subs = _.map(docs, function (doc) {
										let newObj = {
											card: doc.card,
											address: doc.address,
											id: doc._id
										};
										return newObj;
									});
									return res.status(200).send({
										subs: subs
									});
								}
							});
						}
					});
				}
			}
		);
	});
};
