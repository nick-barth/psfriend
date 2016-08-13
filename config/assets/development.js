'use strict';

module.exports = {
	client: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'modules/*/client/css/*.css'
			],
			sass: [
				'modules/*/client/scss/*.scss',
				'public/lib/bootstrap-sass/assets/bootstrap.scss'
			],
			js: [
				'public/lib/bootstrap/dist/js/bootstrap.min.js',
				'modules/core/client/app/config.js',
				'modules/core/client/app/init.js',
				'modules/*/client/*.js',
				'modules/*/client/**/*.js'
			],
			img: [
				'modules/**/*/img/**/*.jpg',
				'modules/**/*/img/**/*.png',
				'modules/**/*/img/**/*.gif',
				'modules/**/*/img/**/*.svg'
			],
			views: ['modules/*/client/views/**/*.html'],
			templates: ['build/templates.js']
		},
		server: {
			gulpConfig: ['gulpfile.js'],
			allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
			models: 'modules/*/server/models/**/*.js',
			routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
			sockets: 'modules/*/server/sockets/**/*.js',
			config: ['modules/*/server/config/*.js'],
			policies: 'modules/*/server/policies/*.js',
			views: ['modules/*/server/views/*.html']
		}
	}
};
