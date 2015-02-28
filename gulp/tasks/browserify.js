var gulp = require('gulp'),
    browserify = require('browserify'),
    to5ify = require('6to5ify'),
    config = require('../config'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('browserify', ['6to5'], function() {
  return browserify('./' + config.main)
      .transform(to5ify)
      .bundle()
      .pipe(source(config.main))
      .pipe(buffer())
      .pipe(gulp.dest(config.dist))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest(config.dist));
});
