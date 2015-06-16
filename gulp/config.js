// github pages overrides source to be root directory otherwise change src to separate folder
var src               = '';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = '/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/img/**',
        developmentAssets + '/fonts/*'
      ]
    }
  }
};