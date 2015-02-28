'use strict';

var config = require('../config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

gulp.task('sass', ['clean'], function() {
  return gulp.src([
    config.src + '/styles/main.scss'
  ])
  .pipe(sass(config.sass))
  .pipe(gulp.dest(config.dist))
});
