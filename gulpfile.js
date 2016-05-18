var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();

gulp.task('browserify', function(){
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
            .on('error', function(err){
                console.log(err.message);
                this.emit('end');
            })
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/css/**')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', ['browserify', 'copy'], function(){
    browserSync.init({
        server: './dist'
    });
    gulp.watch('src/**/*.*', ['browserify', 'copy']);
    gulp.watch('./dist/js/main.js', browserSync.reload);

})
