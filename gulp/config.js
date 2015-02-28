'use strict';

var lib = 'lib',
    src = 'src',
    dist = 'dist',
    serverport = 4000;

module.exports = {
  serverport: serverport,
  src: src,
  lib: lib,
  main: 'mylibrary.js',
  dist: dist,
  watch: {
    paths: ['js', 'scss', 'html'].reduce(function(paths, ext) {
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
  },
  browserSync: {
    server: {
      baseDir: 'dist',
      index: 'index.html'
    }
  }
};
