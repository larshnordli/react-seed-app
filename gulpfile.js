/* jslint node: true */

'use strict';

var gulp  = require('gulp');
var gutil = require('gulp-util');
var jshint = require('jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

//TODO: Add Watchify for quick reload https://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/

// Dirs and files
var scssFiles = './src/styles/**/*.scss';
var scssDest = './dist/css/';

var jsFiles = './src/scripts/**/*.{js,jsx}';
var jsApp = './src/scripts/app.js';
var jsDest = './dist/js/';

var vendorRoot = './node_modules/';
var vendorDest = './dist/js/';

// Main Tasks
gulp.task('serve', ['watch']); //TODO: Make a main task for local dev



// Task Definitions
gulp.task('jshint', function(){
   return gulp.src(jsFiles)
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function(){
   return gulp.src(scssFiles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(scssDest));
});

//TODO: Remove? > See how uglify works
gulp.task('minify-js', function(){
   return gulp.src(jsFiles)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      .pipe(gutil.env.type === 'prodution' ? uglify() : gutil.noop())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(jsDest))
});

gulp.task('serve', function(){
   //TODO: Live reload
   return browserify({
      entries: jsApp,
      debug: true
   })
      .transform("babelify", { presets: ['es2015', 'react'] })
      .bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      //TODO: Uglify + minify
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(jsDest));
});

// Watch Task
gulp.task('watch', function() {
   gulp.watch(scssFiles, ['compleStyles']);
   //gulp.watch(jsFiles, ['jshint']);
});
