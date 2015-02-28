'use strict';

var config = require('../config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

var output = 'main.css';

// add revision number to output file for staging and production
if (gutil.env.production || gutil.env.staging) {
  var rev = Math.random().toString(36).substring(3);
  output = 'main' + rev + '.css';
}

gulp.task('sass', ['clean'], function() {
  return gulp.src([
    config.src + '/main.scss'
  ])
  .pipe(sass(config.sass))
  .pipe(gulp.dest(config.dist.root))
  .pipe(concat(output))
  .pipe(gulp.dest(config.tmp));
});
