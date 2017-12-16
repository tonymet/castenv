var gulp = require("gulp")
, ts = require("gulp-typescript")
, clean = require("gulp-clean")


gulp.task("default", ["clean"], function () {
    var tsResult = gulp.src("src/*.ts")
        .pipe(ts({
              noImplicitAny: true,
        }));
    return tsResult.js.pipe(gulp.dest("lib"));
});

gulp.task("clean", function () {
    return gulp.src("lib", {read: false})
        .pipe(clean());
});
