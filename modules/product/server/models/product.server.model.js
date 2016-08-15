'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

/**
 * Subscription Schema
 */

var ProductSchema = new Schema({
	user: {
		type: Object
	},
	card: {
		theme: String,
		art: String,
		sender: String,
		recipient: String,
		gift: String,
		note: String
	},
	address: {
		name: {
			type: String,
		},
		line1: {
			type: String,
		},
		line2: {
			type: String
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		zip: {
			type: Number,
		}
	},
	meta: {
		updated: {
			type: Date
		},
		created: {
			type: Date,
			default: Date.now
		}
	}
});

mongoose.model('Product', ProductSchema);
