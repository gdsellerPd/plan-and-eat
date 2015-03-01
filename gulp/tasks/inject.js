'use strict';

var config = require('../config');
var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject', ['clean', 'sass', 'copy', 'browserify'], function() {
  var sources = gulp.src([
    config.dist + '/*.css',
    config.dist + '/**/*.js'
  ], {read: false});
  return gulp.src(config.dist + '/index.html')
     .pipe(inject(sources, config.inject))
     .pipe(gulp.dest(config.dist));
});
