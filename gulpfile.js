
//Gulp Dependencies
var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
//Build Dependencies
var browserify = require('browserify');
var uglify = require('gulp-uglify');

//Style Dependencies
var prefix = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');

// Development Dependencies
var jshint = require('gulp-jshint');
var shell = require('gulp-shell');
//Test Dependencies 


var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

var options = {
  uncss: {
    html: ["./_site/index.html", "./_site/privacy.html"],
  },
  minifyCSS: { 
  	keepBreaks: true
  }
};

var paths = {
	jekyll : {
		build : "_site",
		source : ""
	}
}

gulp.task('build', shell.task([
	"bundle exec jekyll build"
	])
);

gulp.task('serve', shell.task([
	"bundle exec jekyll serve -watch"
	])
);

gulp.task('uncss-minify', function() {
	return gulp.src("./_includes/css/main.css")
		//.pipe(uncss(options.uncss))
		.pipe(minifyCSS(options.minifyCSS))
		.pipe(rename("main.min.css"))
		.pipe(gulp.dest("./_includes/css"))
});

gulp.task('lint-client', function(){
	return gulp.src('./_site/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('serve',shell.task([
		"bundle exec jekyll serve --no-watch"
	]));

gulp.task("dev", ["uncss-minify","scripts","serve"]);


gulp.task("deploy", shell.task([
	"git push origin master"
	]));