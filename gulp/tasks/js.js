import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

export default () =>
	app.gulp.src([
		'./node_modules/jquery/dist/jquery.js',
		'./node_modules/slick-carousel/slick/slick.js',
		'./node_modules/mixitup/dist/mixitup.js',
		app.path.js.src,
	], { sourcemaps: app.plugins.isDev })
		.pipe(babel(app.plugins.babel))
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		.pipe(app.gulp.dest(app.path.js.dist, { sourcemaps: app.plugins.isDev }))