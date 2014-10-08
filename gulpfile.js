var livereload = require('gulp-livereload'),
    gulp = require('gulp');

gulp.task('server', function(next) {
    var express = require('express'),
        app = express();
    app.use(express.static(__dirname));
    app.listen(process.env.PORT || 3000, next);
});

gulp.task('watch', ['server'], function() {
    var server = livereload();
    gulp.watch('./*.*').on('change', function(file) {
        console.log('lol', file.path);
        server.changed(file.path);
    });
});