var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch(['*.html', '*.js', '*.css', 'data/*'], ['bs-reload']);
});
