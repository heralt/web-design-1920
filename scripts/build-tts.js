const gulp = require('gulp');

const uglify = require('gulp-uglify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const livereload  = require('gulp-livereload');
const sourcemaps  = require('gulp-sourcemaps');

gulp.task('build', () => {
    console.log('start gulp');
    return browserify({entries: '../static/read_arrows.js', debug: true})
        .transform(babelify, {presets: ['@babel/preset-env']})
        .bundle()
        .pipe(source('speak-tts.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('../static'))
        .pipe(livereload())
});

gulp.task('watch', gulp.series(['build']), () => {
    console.log('start watch');
    livereload.listen();
    gulp.watch('./static/read_arrows', ['build']);
});

gulp.task('default', gulp.series(['watch']));