'use strict';

/**
 * Module dependencies
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = require('mongoose').model('User');

module.exports = function () {
	// Use local strategy
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password'
	},
	function (email, password, done) {
		console.log(email, password);
		User.findOne({
			email: email.toLowerCase()
		}, function (err, user) {
			if (err) {
				return done(err);
			}
			if (!email || !user.authenticate(password)) {
				return done(null, false, {
					message: 'Invalid email or password'
				});
			}

			return done(null, user);
		});
	}));
};
