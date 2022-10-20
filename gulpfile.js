var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

var paths = {
	sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
	gulp.src('./scss/main.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(cssnano())
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});

gulp.task('watch', ['sass'], function() {
	gulp.watch(paths.sass, ['sass']);
});
