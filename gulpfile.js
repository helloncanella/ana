'use strict';

var gulp = require('gulp');
var latex = require('gulp-latex');

gulp.task('latex',function() {
  return gulp.src('*.tex')
    .pipe( latex() )
    .pipe( gulp.dest('./') );
});
