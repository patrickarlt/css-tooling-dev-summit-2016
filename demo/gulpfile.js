// gulpfile.js
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function () {
  return gulp.src('*.scss')
    .pipe(sourcemaps.init({
      loadMaps: true
    }))

    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))

    .pipe(postcss([
      autoprefixer({browsers: ['last 2 versions']})
    ]))

    .pipe(cleanCSS({debug: true}, function(details) {
      console.log(details.name + ' Orginal Size: ' + details.stats.originalSize);
      console.log(details.name + ' Minified Size: ' + details.stats.minifiedSize);
    }))

    .pipe(sourcemaps.write('./'))

    .pipe(gulp.dest('./'))
});