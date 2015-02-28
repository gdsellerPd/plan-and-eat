var gulp = require('gulp'),
    to5 = require('gulp-6to5'),
    config = require('../config');

gulp.task('6to5', function() {
  return gulp.src([config.src + '/*.js', config.src + '/**/*.js'])
      .pipe(to5())
      .pipe(gulp.dest(config.lib));
});
