'use strict';
var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'inject'], function() {
});

gulp.task('default', ['build']);
