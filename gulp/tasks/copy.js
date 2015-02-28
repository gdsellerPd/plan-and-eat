'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('copy-fonts', ['clean'], function() {
  gulp.src([
    'bower_components/bootstrap-sass-official/assets/fonts/**/*.{ttf,woff,svg,eot}'
  ]).pipe(gulp.dest(config.dist + '/fonts'));
});

gulp.task('copy', ['copy-fonts']);
