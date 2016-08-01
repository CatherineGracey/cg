"use strict";

var  gulp = require("gulp"),
 cleanCSS = require("gulp-clean-css"),
  csscomb = require('gulp-csscomb'),
  csslint = require('gulp-csslint'),
     maps = require("gulp-sourcemaps"),
      del = require("del");

//CSS tasks

gulp.task("cleanCSS", function(){
  return del("public/css/*.css*");
});

gulp.task("combCSS", function() {
  return gulp.src('css/*.css')
    .pipe(csscomb())
    .pipe(gulp.dest('css'));
});

gulp.task("lintCSS", ["combCSS"], function() {
   return gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task("minifyCSS", ["cleanCSS", "combCSS"], function(){
  return gulp.src('css/*.css')
    .pipe(maps.init())
    .pipe(cleanCSS())
    .pipe(maps.write("./"))
    .pipe(gulp.dest('public/css'));
});

gulp.task("watchFiles", function(){
  gulp.watch("css/*.css", ["lintCSS"]);
});

gulp.task("build", ["minifyCSS"]);
