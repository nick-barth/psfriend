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
	card: {
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
		},
		country: {
			type: String,
		}
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
		},
		country: {
			type: String,
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
