'use strict';

// stolen/adapted from: https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate

var config  = require('../config');
var http    = require('http');
var express = require('express');
var gulp    = require('gulp');
var gutil   = require('gulp-util');

gulp.task('server', ['build'], function() {

  var app = express();
  app.use(express.static(config.dist));

  app.all('/*', function(req, res) {
      res.sendFile('index.html', { root: config.dist });
  });

  var s = http.createServer(app);
  s.on('error', function(err){
    if(err.code === 'EADDRINUSE'){
      gutil.log('Development server is already started at port ' + config.serverport);
    }
    else {
      throw err;
    }
  });

  s.listen(config.serverport, function () {
    gutil.log('Development server started at http://localhost:' + config.serverport);
  });

});
