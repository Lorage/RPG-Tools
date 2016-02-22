var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
var browserSync = require("browser-sync").create();

//Styles changes
gulp.task('sass', function() {
    gulp.src('src/assets/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css'))
});

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./src"
    });
    
    gulp.watch('./src/assets/css/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});


//Watch task
gulp.task('default',function() {
    gulp.watch('src/app/**/*.scss',['sass']);
});