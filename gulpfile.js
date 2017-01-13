var path = require('path');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var insert = require('gulp-insert');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

var packageInfo = require('./package.json');

var srcDir = './src/';
var outDir = './dist/';

/* eslint no-useless-escape: "off" */
var header = '/*!\n ' +
  ' * ' + packageInfo.name + '\n' +
  ' * Version: ' + packageInfo.version + '\n' +
  ' *\n' +
  ' * Copyright Bpium\n' +
  ' * Released under the ISC license\n' +
  ' */\n';
/* eslint no-useless-escape: "error" */

function buildTask() {
  return browserify(packageInfo.main)
    .ignore('chart.js')
    .bundle()
    .pipe(source(packageInfo.name + '.js'))
    .pipe(insert.prepend(header))
    .pipe(gulp.dest(outDir))
    .pipe(streamify(uglify({preserveComments: 'license'})))
    .pipe(streamify(concat(packageInfo.name + '.min.js')))
    .pipe(gulp.dest(outDir));
}

function watchTask() {
  // buildTask();
  // gulp.watch(srcDir + '/**/*.js', ['build']);
  gutil.log('Waiting for changes...');
  return gulp.watch(srcDir + '/**/*.js', function (e) {
    gutil.log('Changes detected for', path.relative('.', e.path), '(' + e.type + ')');
    var r = buildTask();
    gutil.log('Waiting for changes...');
    return r;
  });
}

function lintTask() {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

gulp.task('build', buildTask);
gulp.task('watch', watchTask);
gulp.task('lint', lintTask);
gulp.task('default', ['build']);
