var gulp = require('gulp'),
    browserify = require('browserify'),
    to5ify = require('6to5ify'),
    reactify = require('reactify'),
    config = require('../config'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('browserify', ['6to5'], function() {
  return browserify('./src/scripts/app.js')
      .transform(reactify)
      .transform(to5ify)
      .bundle()
      .pipe(source('src/scripts/app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(config.dist));
});
