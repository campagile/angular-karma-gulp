var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    del = require('del');
var ngannotate = require('gulp-ng-annotate');

var Server = require('karma').Server;

gulp.task('jshint', function () {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function () {
    return del(['dist']);
});

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('usemin');
});

gulp.task('usemin', ['jshint'], function () {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [minifycss(), rev()],
            js: [ngannotate(), uglify(), rev()]
        }))
        .pipe(gulp.dest('dist/'));
});

// Watch
gulp.task('serve', ['browser-sync'], function () {
    // Watch .js files
    gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin']);
    // Watch image files
    gulp.watch('app/images/**/*', ['imagemin']);

});

gulp.task('browser-sync', ['default'], function () {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/images/**/*.png',
        'app/scripts/**/*.js',
        'dist/**/*'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "dist",
            index: "index.html"
        }
    });
    // Watch any files in dist/, reload on change
    gulp.watch(['dist/**']).on('change', browserSync.reload);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new Server({
        configFile: require('path').resolve('karma.conf.js'),
        singleRun: true
    }, done).start();
});
