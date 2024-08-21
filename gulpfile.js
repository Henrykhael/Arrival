const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function style (){
    return gulp.src('./src/style/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function image(){
    return gulp.src('./src/imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imgs'));
}

function script(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(style, image, script);
exports.watch = function(){
    gulp.watch('./src/style/*.scss', gulp.parallel(style));
    gulp.watch('./src/scripts/*.js', gulp.parallel(script));
}