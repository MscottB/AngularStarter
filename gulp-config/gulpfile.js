const gulp = require('gulp');
/**
 * Plugins Gulp
 */

const eslint = require('gulp-eslint'),
    imagemin = require('gulp-imagemin'),
    gulpTinyPng = require('tinypng-loader/gulp/index');

/**
 * Setting
 */

const filePath = require('./path-gulpfile.json')

/**
 * Task Gulp
 */

/**
 * Tarea de reduccion del peso de imagen de manera local(offline)
 */
gulp.task('img', function () {
    return gulp.src(filePath.Img.src)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ], { verbose: true }))
        .pipe(gulp.dest(filePath.Img.dest));
});


/**
 * Tarea de reduccion del peso de imagen de manera online ocupando tinyPNG, sin API.
 * MaxConcurrency:1-20
 */

gulp.task('tinypng', function (cb) {
    gulp.src(filePath.Tiny.src)
        .pipe(gulpTinyPng({ maxConcurrency: 10 }))
        .pipe(gulp.dest(filePath.Tiny.dest))
        .on('end', cb);
});