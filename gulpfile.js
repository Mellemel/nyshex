'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const runSeq = require('run-sequence');
const uglify = require('gulp-uglify');
const notify = require('gulp-notify');
const eslint = require('gulp-eslint');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const KarmaServer = require('karma').Server;

// Development Tasks
// -------------------------------------------------------------
gulp.task('reload', function() {
    livereload.reload();
});

gulp.task('reloadCSS', function() {
    return gulp.src('./src/public/style.css').pipe(livereload());
});

gulp.task('lintJS', function() {
    return gulp.src('./src/browser/app/**/*.js')
        .pipe(plumber({
            errorHandler: notify.onError('Linting Failed! Check your gulp process.')
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('buildJS', ['lintJS'], function() {
    return gulp.src('./src/browser/app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['angularjs-annotate']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/public'));
});

gulp.task('buildCSS', function() {
    const lessCompilation = less();
    lessCompilation.on('error', console.error.bind(console));
    return gulp.src('./src/browser/less/main.less')
        .pipe(plumber({
            errorHandler: notify.onError('LESS processing failed! Check your gulp process.')
        }))
        .pipe(sourcemaps.init())
        .pipe(lessCompilation)
        .pipe(rename('style.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/public'));
});

// Testing Tasks
// -------------------------------------------------------------
gulp.task('testBrowserJS', function (done) {
    const server = new KarmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
    server.start();
});

// Production Tasks
// -------------------------------------------------------------
gulp.task('buildJSProduction', function() {
    return gulp.src('./src/browser/app/**/*.js')
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['angularjs-annotate']
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/public'));
});

gulp.task('buildCSSProduction', function() {
    return gulp.src('./src/browser/less/main.less')
        .pipe(less())
        .pipe(rename('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/public'));
});

// Gulp's executable task
gulp.task('default', function() {

    // Watch and LiveReload in dev
    if (process.argv.includes("-p")) {
        runSeq(['buildJSProduction', 'buildCSSProduction'], 'testBrowserJS');
    } else {
        runSeq(['buildJS', 'buildCSS']);

        // Run when any html/js changes
        gulp.watch(['src/browser/index.html', 'src/browser/app/**', 'test/**/*.js'], function() {
            runSeq(['buildJS', 'reload'], 'testBrowserJS');
        });

        // Run when anything inside src/browser/less
        gulp.watch('src/browser/less/**', function() {
            runSeq('buildCSS', 'reloadCSS');
        });

        livereload.listen();
    }
});
