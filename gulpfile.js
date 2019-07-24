var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var version= require('./package.json');
//npm install --global gulp-cli 
//npm init
//npm install --save-dev gulp

//npm install --save-dev gulp-sass

gulp.task('sass', function(done){
    return gulp.src('scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('public/css'))
    done();
    });

// //npm install --save-dev gulp-concat

gulp.task('style', function(done){
    return gulp.src('scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public/css'))
    done();
});


// //npm install gulp-minify-css

gulp.task('style_min', function(done){
    return gulp.src('scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(minifyCSS())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('public/css'))
    done();
});

// //gulp watch

gulp.task('watch', () => {
   // gulp.watch('scss/*.scss', gulp.series('style','style_min'));
   gulp.watch('scss/{,*/}*.{scss,sass}', gulp.series('style','style_min'));
});

// DEFAULT TASK: RUN BASIC TASKS AND WATCH
//----------------------------------------------
gulp.task('default', gulp.series('watch'));


