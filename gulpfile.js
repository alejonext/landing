const gulp = require('gulp');
const browserify = require('browserify');
const jade = require('gulp-jade');
const sass = require('gulp-sass');
const babel = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const minifyInline = require('gulp-minify-inline');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'del', 'browser-sync']
});

var YOUR_LOCALS = {};

const src = {
	view : './src/view/*.jade',
	style : './src/style/*.scss',
	script : './src/script/*.js',
	launcher : './src/script/lib.js'
};

const dist = './dist';

gulp.task('view', function() {
	return gulp.src(src.view)
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		.pipe(gulp.dest(dist));
});

gulp.task('style', function () {
	return gulp.src(src.style)
		.pipe(sass({
			includePaths: [
				'src/style/contrib/'
			]
		}).on('error', sass.logError))
		.pipe(gulp.dest(dist));
});
 
gulp.task('script', function() {
	return browserify([src.launcher])
		.transform('babelify', {presets: ['es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3' ]})
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		//.pipe(minifyInline())
		.pipe(gulp.dest(dist));
});

gulp.task('default', [ 'script', 'style', 'view' ]);

gulp.task('watch', ['default'] , function () {
	gulp.watch(src.view, ['view']);
	gulp.watch(src.style, ['style']);
	gulp.watch(src.script, [ 'script']);
});
