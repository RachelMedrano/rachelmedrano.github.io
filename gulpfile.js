const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>{
    browserSync.init({
        server: './'
    })
    gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
    gulp.watch(['./*.html', './*.css', './assets/*.js']).on('change', browserSync.reload)
 
});
 
gulp.task('sass', ()=>
    gulp.src('./assets/sass/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
 
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
 
        .pipe(gulp.dest('./'))
);