const fs = require('fs')
const gulp = require('gulp')
const gutil = require('gulp-util')
const rename = require('gulp-rename')
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown')

gulp.task('doc', function () {
  return gulp.src('./components/common/site-menu/*.js')
    .pipe(gulpJsdoc2md({ configure: fs.readFileSync('./jsdoc.json') }))
    .on('error', function (err) {
      gutil.log(gutil.colors.red('jsdoc2md failed'), err.message)
    })
    .pipe(rename(function (path) {
      path.extname = 'README.md'
    }))
    .pipe(gulp.dest('./components/common/site-menu/'))
})