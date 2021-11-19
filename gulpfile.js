const {src, dest, watch, series} = require ('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require ('cssnano');
const terser = require ('gulp-terser');
const browserSync = require('browser-sync');
const browsersync = require ('browser-sync').create();

//Sass Tasks:
function scssTask(){
    return src('app/scss/style.scss', { sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.'}));
}

//JavaScript Task

function jsTask(){
    return src('app/js/script.js', {sourcemaps: true})
    .pipe(terser())
    .pipe(dest('dist', {sourcemaps: '.'}));
}

//Broswer-sync

function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

//Broser-sync reload task/function

function browsersyncReload(cd){
    browsersync.reload();
    cb();
}