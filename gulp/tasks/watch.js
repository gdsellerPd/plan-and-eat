'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['build', 'lint'], function() {
  return gulp.watch(config.watch.paths, ['lint', 'build']);
});
