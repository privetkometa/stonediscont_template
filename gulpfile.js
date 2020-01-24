const gulp 					= require('gulp'),
		gutil 				= require('gulp-util'),
		sass 				= require('gulp-sass'),
		sassGlob 			= require('gulp-sass-glob'),
		concat        		= require('gulp-concat'),
		uglify        		= require('gulp-uglify-es').default,
		cleanCSS      		= require('gulp-clean-css'),
		rename        		= require('gulp-rename'),
		autoprefixer  		= require('gulp-autoprefixer'),
		notify        		= require('gulp-notify'),
		svgstore 			= require('gulp-svgstore'),
		inject 				= require('gulp-inject'),
		babel 				= require('gulp-babel'),
		svgmin 				= require('gulp-svgmin');
		ftp 				= require('gulp-ftp');
		changed 			= require('gulp-changed');

sass.compiler = require('node-sass');

function commonJs() {
	return gulp.src('app/js/*.js')
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
	.pipe(ftp({
		host: 'vh166.timeweb.ru',
		user: 'cu67168_stonede',
		pass: 'cxtEfVF9',
		remotePath: '/public_html/assets/templates/frankenstein/public/js'
	}))
}

function vendorJs() {
	return gulp.src([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/popper.js/dist/umd/popper.min.js',
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/jquery-modal/jquery.modal.min.js',
		'node_modules/owl.carousel2/dist/owl.carousel.min.js',
		])
	.pipe(concat('vendor.min.js'))
	// .pipe(babel({ presets: ['babel-preset-env'] }))
	.pipe(uglify())
	.pipe(gulp.dest('public/js'))
	.pipe(ftp({
		host: 'vh166.timeweb.ru',
		user: 'cu67168_stonede',
		pass: 'cxtEfVF9',
		remotePath: '/public_html/assets/templates/frankenstein/public/js'
	}))
	.pipe(gutil.noop());
}

function css() {
	return gulp.src('app/scss/*.scss')
	.pipe(sassGlob())
	.pipe(sass().on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(cleanCSS())
	.pipe(gulp.dest('public/css'))
	.pipe(ftp({
		host: 'vh166.timeweb.ru',
		user: 'cu67168_stonede',
		pass: 'cxtEfVF9',
		remotePath: '/public_html/assets/templates/frankenstein/public/css'
	}))
	.pipe(gutil.noop());
}

function svgSprite() {
	return gulp.src('app/assets/icons/*.svg')
	.pipe(svgmin({
		plugins: [{
			cleanupIDs: {
					minify: true
			}
		},
		{
			removeUselessStrokeAndFill: {
				stroke: true,
				fill: true,
				removeNone: true,
				hasStyleOrScript: true,
			}
		}]
	}))
	.pipe(svgstore({ inlineSvg: true }))
	.pipe(gulp.dest('public/assets/images/svg'))
	.pipe(ftp({
		host: 'vh166.timeweb.ru',
		user: 'cu67168_stonede',
		pass: 'cxtEfVF9',
		remotePath: '/public_html/assets/templates/frankenstein/public/assets/images/svg'
	}))
	.pipe(gutil.noop());
}

function fonts() {
	return gulp.src('app/assets/fonts/**/*.**')
	.pipe(gulp.dest('public/assets/fonts'));
}

function images() {
	return gulp.src('app/assets/images/*.**')
	.pipe(gulp.dest('public/assets/images'))
	.pipe(ftp({
		host: 'vh166.timeweb.ru',
		user: 'cu67168_stonede',
		pass: 'cxtEfVF9',
		remotePath: '/public_html/assets/templates/frankenstein/public/assets/images'
	}))
	.pipe(gutil.noop());
}

function html() {
	return gulp.src(['app/html/**/*.html'])
	.pipe(changed('public'))
	.pipe(gulp.dest('public'))
	.pipe(ftp({
		host: 'vh166.timeweb.ru',
		user: 'cu67168_stonede',
		pass: 'cxtEfVF9',
		remotePath: '/public_html/assets/templates/frankenstein/public'
	}))
	.pipe(gutil.noop());
}

exports.watch = function() {
	gulp.watch('app/scss/**/*.scss', css);
	gulp.watch('app/js/*.js', commonJs);
	gulp.watch('app/html/**/*.html', html);
	gulp.watch('app/assets/icons/*.svg', svgSprite);
	gulp.watch('app/assets/images/*.**', images);
}

exports.default = gulp.series(
	html,
	gulp.parallel(
		css,
		commonJs,
		vendorJs,
		svgSprite,
		fonts,
		images,
	)
)
