var gulp = require('gulp');
var latex = require('gulp-latex');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('latex',function() {
  return gulp.src('*.tex')
    .pipe( latex() )
    .pipe( gulp.dest('./') );
});

gulp.task('watch', function() {
  gulp.watch('./*.tex', ['latex']);
});
