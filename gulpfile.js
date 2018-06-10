const gulp = require('gulp')
const browserSync = require('browser-sync')
const useref = require('gulp-useref')
const cleanCSS = require('gulp-clean-css')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')

gulp.task('build', () => {
	return gulp.src('./source/**/*')
		//.pipe(useref())
		.pipe(gulpif('*.min.css', cleanCSS()))
		.pipe(gulp.dest('./build'))
})

gulp.task('watch', ['browser-sync'], () => {
	return gulp.watch('./source/**/*', ['build', 'reload'])
})

gulp.task('browser-sync', () => {
	return browserSync({
		server: {
			baseDir: './build'
		}
	})
})

gulp.task('reload', () => {
	return browserSync.reload()
})
