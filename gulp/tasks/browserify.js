var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    reactify = require('reactify'),
    config = require('../config'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('browserify', function() {
  return browserify('./src/scripts/app.js')
      .transform(reactify)
      .transform(babelify)
      .bundle()
      .pipe(source('src/scripts/app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(config.dist));
});
