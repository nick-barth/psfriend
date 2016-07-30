'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	fs = require('fs'),
	defaultAssets = require('./config/assets/default'),
	testAssets = require('./config/assets/test'),
	glob = require('glob'),
	gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	runSequence = require('run-sequence'),
	plugins = gulpLoadPlugins({
		rename: {
			'gulp-angular-templatecache': 'templateCache'
		}
	}),
	pngquant = require('imagemin-pngquant'),
	path = require('path'),
	endOfLine = require('os').EOL,
	webdriverUpdate = require('gulp-protractor').webdriverUpdate,
	webdriverStandalone = require('gulp-protractor').webdriverStandalone;

// Local settings
var changedTestFiles = [];

// Set NODE_ENV to 'test'
gulp.task('env:test', function () {
	process.env.NODE_ENV = 'test';
});

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
	process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
	process.env.NODE_ENV = 'production';
});

// Nodemon task
gulp.task('nodemon', function () {
	return plugins.nodemon({
		script: 'server.js',
		nodeArgs: ['--debug'],
		ext: 'js,html'
	});
});

// Nodemon debug task
gulp.task('nodemon-debug', function () {
	return plugins.nodemon({
		exec: 'node_modules/node-inspector/bin/inspector.js --save-live-edit --preload=false --web-port 1337 & node --debug',
		script: 'server.js',
		nodeArgs: ['--debug'],
		ext: 'js,html',
		verbose: true
	});
});

// JS minifying task
gulp.task('uglify', function () {
	var assets = _.union(
		defaultAssets.client.js,
		defaultAssets.client.templates
	);

	return gulp.src(assets)
		.pipe(plugins.ngAnnotate())
		.pipe(plugins.uglify({
			mangle: false
		}))
		.pipe(plugins.concat('application.min.js'))
		.pipe(gulp.dest('public/dist'));
});

// CSS minifying task
gulp.task('cssmin', function () {
	return gulp.src(defaultAssets.client.css)
		.pipe(plugins.csso())
		.pipe(plugins.concat('bundle.min.css'))
		.pipe(gulp.dest('public/dist'));
});

// Sass task
gulp.task('sass', function () {
	return gulp.src(defaultAssets.client.sass)
		.pipe(plugins.sass())
		.pipe(plugins.autoprefixer())
		.pipe(plugins.rename(function (file) {
			file.dirname = file.dirname.replace(path.sep + 'scss', path.sep + 'css');
		}))
		.pipe(gulp.dest('./modules/'));
});

// Imagemin task
gulp.task('imagemin', function () {
	return gulp.src(defaultAssets.client.img)
		.pipe(plugins.imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/dist/img'));
});

// wiredep task to default
gulp.task('wiredep', function () {
	return gulp.src('config/assets/default.js')
		.pipe(plugins.wiredep({
			ignorePath: '../../'
		}))
		.pipe(gulp.dest('config/assets/'));
});

// wiredep task to production
gulp.task('wiredep:prod', function () {
	return gulp.src('config/assets/production.js')
		.pipe(plugins.wiredep({
			ignorePath: '../../',
			fileTypes: {
				js: {
					replace: {
						css: function (filePath) {
							var minFilePath = filePath.replace('.css', '.min.css');
							var fullPath = path.join(process.cwd(), minFilePath);
							if (!fs.existsSync(fullPath)) {
								return '\'' + filePath + '\',';
							} else {
								return '\'' + minFilePath + '\',';
							}
						},
						js: function (filePath) {
							var minFilePath = filePath.replace('.js', '.min.js');
							var fullPath = path.join(process.cwd(), minFilePath);
							if (!fs.existsSync(fullPath)) {
								return '\'' + filePath + '\',';
							} else {
								return '\'' + minFilePath + '\',';
							}
						}
					}
				}
			}
		}))
		.pipe(gulp.dest('config/assets/'));
});

// Copy local development environment config example
gulp.task('copyLocalEnvConfig', function () {
	var src = [];
	var renameTo = 'local-development.js';

	// only add the copy source if our destination file doesn't already exist
	if (!fs.existsSync('config/env/' + renameTo)) {
		src.push('config/env/local.example.js');
	}

	return gulp.src(src)
		.pipe(plugins.rename(renameTo))
		.pipe(gulp.dest('config/env'));
});

// Make sure upload directory exists
gulp.task('makeUploadsDir', function () {
	return fs.mkdir('modules/users/client/img/profile/uploads', function (err) {
		if (err && err.code !== 'EEXIST') {
			console.error(err);
		}
	});
});

// Angular template cache task
gulp.task('templatecache', function () {
	return gulp.src(defaultAssets.client.views)
		.pipe(plugins.templateCache('templates.js', {
			root: 'modules/',
			module: 'core',
			templateHeader: '(function () {' + endOfLine + '	\'use strict\';' + endOfLine + endOfLine + '	angular' + endOfLine + '		.module(\'<%= module %>\'<%= standalone %>)' + endOfLine + '		.run(templates);' + endOfLine + endOfLine + '	templates.$inject = [\'$templateCache\'];' + endOfLine + endOfLine + '	function templates($templateCache) {' + endOfLine,
			templateBody: '		$templateCache.put(\'<%= url %>\', \'<%= contents %>\');',
			templateFooter: '	}' + endOfLine + '})();' + endOfLine
		}))
		.pipe(gulp.dest('build'));
});

// Drops the MongoDB database, used in e2e testing
gulp.task('dropdb', function (done) {
	// Use mongoose configuration
	var mongoose = require('./config/lib/mongoose.js');

	mongoose.connect(function (db) {
		db.connection.db.dropDatabase(function (err) {
			if (err) {
				console.error(err);
			} else {
				console.log('Successfully dropped db: ', db.connection.db.databaseName);
			}
			db.connection.db.close(done);
		});
	});
});

// Downloads the selenium webdriver
gulp.task('webdriverUpdate', webdriverUpdate);

// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriverStandalone', webdriverStandalone);

// Lint CSS and JavaScript files.
gulp.task('lint', function (done) {
	runSequence('sass', ['csslint', 'eslint'], done);
});

// Lint project files and minify them into two production files.
gulp.task('build', function (done) {
	runSequence('env:dev', 'wiredep:prod', ['uglify', 'cssmin'], done);
});

// Run the project in development mode
gulp.task('default', function (done) {
	runSequence('env:dev', ['copyLocalEnvConfig', 'makeUploadsDir'], ['nodemon'], done);
});

// Run the project in debug mode
gulp.task('debug', function (done) {
	runSequence('env:dev', ['copyLocalEnvConfig', 'makeUploadsDir'], ['nodemon-debug'], done);
});

// Run the project in production mode
gulp.task('prod', function (done) {
	runSequence(['copyLocalEnvConfig', 'makeUploadsDir', 'templatecache'], 'build', 'env:prod', ['nodemon'], done);
});
