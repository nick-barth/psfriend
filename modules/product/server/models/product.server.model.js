'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

/**
* Card Schema
*/
var CardSchema = new Schema({
	name: {
		type: String,
	},
	theme: {
		type: String,
	},
	art: {
		type: String
	},
	sender: {
		type: String,
	}
});
/**
 * Address Schema
 */
var AddressSchema = new Schema({
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
	note: String,
	card: [CardSchema],
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
