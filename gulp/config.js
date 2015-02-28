'use strict';

var lib = 'lib',
    src = 'src';

module.exports = {
  serverport: 4000,
  src: src,
  lib: lib,
  main: 'mylibrary.js',
  dist: 'dist',
  watch: {
    paths: ['js', 'scss'].reduce(function(paths, ext) {
      return paths.concat([src + '/**/*.' + ext, src + '/*.' + ext]);
    }, [])
  },
  sass: {
    includePaths:[
      'bower_components/bootstrap-sass-official/assets/stylesheets/'
    ]
  },
  inject: {
    addRootSlash: true,
    relative: true
  }
};
