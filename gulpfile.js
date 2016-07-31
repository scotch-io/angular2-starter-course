var gulp    = require('gulp')
  del       = require('del'),
  plugins   = require('gulp-load-plugins')(),
  tscConfig = require('./tsconfig.json');

// clean the dist folder
gulp.task('clean', function () {
  return del('dist/**/*');
});

// handle the typescript compiling
gulp.task('js', function() {
  return gulp.src(['app/**/*.ts'])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.typescript(tscConfig.compilerOptions))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

// copy html over to dist
gulp.task('html', function() {
  return gulp.src(['app/**/*.html'])
    .pipe(gulp.dest('dist'));
});

// handle css and sending to dist
gulp.task('css', function() {
  return gulp.src(['app/**/*.css'])
    .pipe(gulp.dest('dist'));
});

// watch task
gulp.task('watch', function() {
  // watch for html
  gulp.watch('app/**/*.html', ['html']);

  // watch for css
  gulp.watch('app/**/*.css', ['css']);

  // watch for ts
  // gulp.watch('app/**/*.ts', ['js']);
});

// browser-sync
gulp.task('server', function() {

});

// default task
gulp.task('default', ['clean', 'html', 'css']);