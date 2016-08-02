'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

/**
 * Address Schema
 */
var AddressSchema = new Schema({
	street: {
		type: String,
	},
	street2: {
		type: String
	},
	city: {
		type: String,
	},
	state: {
		type: String,
	},
	zip: {
		typer: Number,
	},
	country: {
		type: String,
	}
});

/**
 * User Schema
 */
var ProductSchema = new Schema({
	userId: {
		type: String,
	},
	active: Boolean,
	process: String,
	theme: String,
	note: String,
	address: [AddressSchema],
	updated: {
		type: Date
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Product', ProductSchema);
