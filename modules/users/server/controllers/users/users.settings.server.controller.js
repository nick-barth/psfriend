'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash'),
	path = require('path'),
	config = require(path.resolve('./config/config')),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Product = mongoose.model('Product');

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
