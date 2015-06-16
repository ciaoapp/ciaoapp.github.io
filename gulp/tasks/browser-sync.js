var gulp = require('gulp');
var browsersync = require('browser-sync');
var config = require('../../config').browsersync.development;

/**
* Run the build taks and start a server with BrowserSync
*/

gulp.task('browsersync', ['build'],function(){
	browsersync(config);
})
