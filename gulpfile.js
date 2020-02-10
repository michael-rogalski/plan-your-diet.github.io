var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var deploy      = require('gulp-gh-pages');

gulp.task("watch", function(cb) {
  gulp.watch("dist/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("dist/*.html").on("change", browserSync.reload);
  gulp.watch("dist/js/*.js").on("change", browserSync.reload);
  cb();
});

gulp.task("serve", function(cb) {
  browserSync.init({
    server: "./dist"
  });
  cb();
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: ["last 4 versions"]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});


gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});


gulp.task("default", gulp.series("serve"));
