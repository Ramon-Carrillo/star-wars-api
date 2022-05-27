import { src, dest, watch, series } from 'gulp'
const sass = require('gulp-sass')(require('sass'))
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import babel from 'gulp-babel'
import terser from 'gulp-terser'

// Sass Task
function scssTask() {
  return src('app/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }))
}

// JavaScript Task
function jsTask() {
  return src('app/js/script.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }))
}

// Watch Task
function watchTask() {
  watch('*.html')
  watch(['app/scss/**/*.scss', 'app/**/*.js'], series(scssTask, jsTask))
}

// Default Gulp Task
const _default = series(scssTask, jsTask, watchTask)
export { _default as default }
