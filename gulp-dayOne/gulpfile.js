const { src, dest, watch, parallel, series } = require("gulp");
const HTMLMin = require('gulp-htmlmin')
const IMGMin = require('gulp-imagemin')
const SCSS = require('gulp-sass')
const concat = require('gulp-concat')
const clean = require('gulp-clean-css')
const Terser = require('gulp-terser')

function htmlTask(){
    return src('src/html/*.html').pipe(HTMLMin({
        collapseWhitespace:true, removeComments:true
    })).pipe(dest('dist'))
}
function imgTask(){
    return src('src/images/*').pipe(IMGMin()).pipe(dest('dist/assets/images'))
}
function styleTask(){
    return src(['src/scss/*.scss','src/scss/*.css']).pipe(SCSS())
    .pipe(concat('style.min.css')).pipe(clean())
    .pipe(dest('dist/assets/style'))
}
function jsTask(){
    return src('src/js/*.js').pipe(concat('scripts.min.js'))
    .pipe(Terser()).pipe(dest('dist/assets/script'))
}
function watchChanges(){
    watch(['src/js/*.js','src/scss/*','src/html/index.html'],{ interval: 10000},
    parallel(htmlTask,jsTask,styleTask))
}
exports.html = htmlTask // run using -> gulp html
exports.img = imgTask
exports.style = styleTask
exports.script = jsTask
//Couldn't load default plugin "gifsicle"

exports.default = series(parallel(htmlTask, styleTask, jsTask), watchChanges)