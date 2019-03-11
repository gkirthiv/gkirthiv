  
  var gulp = require('gulp'),sass = require('gulp-sass');


let sassSources = ['_dev/sass/*.scss'];
let outputDir = 'assets/';


gulp.task('sass', function () {
    gulp.src(sassSources)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(outputDir + 'css'))
});

gulp.task('watch', function () {
    gulp.watch(sassSources, ['sass']);
});