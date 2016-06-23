// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Scss
gulp.task('sass', function() {
    return gulp.src('app/assets/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('app/assets/css/styles.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('app/assets/css/'))
    .pipe(gulp.dest('dist/assets/css/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/assets/js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/min'));
});

// Optimize images
gulp.task('image-min', function() {
  gulp.src(['app/assets/img/**/*.+(png|jpg|gif|svg)'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/img'))
});

// Minifiy HTML
gulp.task('html-min', function() {
  return gulp.src(['app/*.html','!assets/'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
});


gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts/'))
}) 
  

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/assets/js/*.js', ['lint', 'scripts']);
    gulp.watch('app/assets/scss/**/*.scss', ['sass']);
    gulp.watch('app/assets/img/**/*.+(png|jpg|gif|svg)',['image-min']);
    gulp.watch('app/*.html',['html-min']);
    gulp.watch('app/assets/fonts/**/*',['fonts']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'minify-css', 'scripts', 'image-min', 'html-min', 'fonts', 'watch']);
