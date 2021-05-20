const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const header = require('gulp-header');
const pump = require('pump');
const pkg = require('./package.json');
const banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */\n'
].join('\n');

function compress(cb) {
  pump([
    gulp.src('./src/build-url.js'),
    rename('build-url.min.js'),
    uglify(),
    gulp.dest('./dist')
  ], cb);
}

function copy(cb) {
  pump([
    gulp.src('./src/build-url.js'),
    header(banner, { pkg: pkg }),
    gulp.dest('./dist')
  ], cb);
}

exports.default = gulp.series(
  compress,
  copy
);