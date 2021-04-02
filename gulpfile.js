var gulp = require('gulp')
var uglify = require('gulp-uglify')

// css
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')

// browser refresh
var browserSync = require('browser-sync')

// github
var ghpages = require('gh-pages')
const task = require('gulp')

gulp.task('sass', function() {
    return gulp.src("src/main.sass")
      .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'expanded',
        includePaths: require('node-normalize-scss').includePaths
      }).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest("./dist"))
})

gulp.task('html', function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('js', function() {
    return gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
})

gulp.task('miniJS', function () {
    return gulp.src("dist/main.js")
      .pipe(uglify())
      .pipe(gulp.dest("dist"));
})

gulp.task('miniCSS', function () {
    return gulp.src("dist/main.css")
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist'));
})

gulp.task('watch', function() {

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    })

    gulp.watch('src/index.html', gulp.series('html')).on("change", browserSync.reload)
    gulp.watch('src/main.sass', gulp.series('sass'))
    gulp.watch('src/main.js', gulp.series('js'))
})

gulp.task('deploy', function() {
    ghpages.publish("dist")
})

gulp.task('default', gulp.parallel('html', 'sass', 'js', 'miniCSS', 'miniJS', 'watch'))