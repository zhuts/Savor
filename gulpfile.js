
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  console.log('Just type gulp in terminal: Gulp is functioning!');
})

gulp.task('lint', function() {
  return gulp.src('public/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('concat', function() {
  return gulp.src(['./client/*.js', './server/*/**.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('uglify', function() {
  return gulp.src('./dist/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

