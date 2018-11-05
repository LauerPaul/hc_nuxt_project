const fs = require('fs')
const gulp = require('gulp')
const gutil = require('gulp-util')
const rename = require('gulp-rename')
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown')
const babel = require('gulp-babel')

gulp.task('doc', function () {
  return gulp.src('./components/*/**/script.js')
    .pipe(babel({
        comments: true,
        presets: [],
        plugins: [
          "@babel/plugin-transform-async-to-generator",
          "@babel/plugin-proposal-object-rest-spread"
        ]
    }))
    .pipe(gulpJsdoc2md({
      'configure': fs.readFileSync('./jsdoc.json'),
      'no-gfm': false,
      'heading-depth': 2
    }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('jsdoc2md failed'), err.message)
    })
    .pipe(rename(function (path) { 
      path.basename = 'README'
      path.extname = '.md'
    }))
    .pipe(gulp.dest('./docs/components/'))
})

gulp.task('doc_pages', function () {
  return gulp.src(['./pages/*/**/script.js'])
    .pipe(babel({
        comments: true,
        presets: [],
        plugins: [
          "@babel/plugin-transform-async-to-generator",
          "@babel/plugin-proposal-object-rest-spread"
        ]
    }))
    .pipe(gulpJsdoc2md({
      'configure': fs.readFileSync('./jsdoc.json'),
      'no-gfm': false,
      'heading-depth': 2
    }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('jsdoc2md failed'), err.message)
    })
    .pipe(rename(function (path) { 
      path.basename = 'README'
      path.extname = '.md'
    }))
    .pipe(gulp.dest('./docs/pages/'))
})

gulp.task('doc_layouts', function () {
  return gulp.src('./layouts/*/**/script.js')
    .pipe(babel({
        comments: true,
        presets: [],
        plugins: [
          "@babel/plugin-transform-async-to-generator",
          "@babel/plugin-proposal-object-rest-spread"
        ]
    }))
    .pipe(gulpJsdoc2md({
    	'configure': fs.readFileSync('./jsdoc.json'),
    	'no-gfm': false,
    	'heading-depth': 2
    }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('jsdoc2md failed'), err.message)
    })
    .pipe(rename(function (path) { 
      path.basename = 'README'
      path.extname = '.md'
    }))
    .pipe(gulp.dest('./docs/layouts/'))
})