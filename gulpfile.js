var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();

gulp.task('build', function () {
    return browserify({ entries: './src/js/app.js', debug: true })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['build'], function (done) {
    browserSync.reload();
done();
   
});

gulp.task('compile_css',function(){
    gulp.src('css/*.scss')
    
        .pipe(compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'css'
        }))
    
        .pipe(gulp.dest('css'))
        .pipe(sftp(sftp_config));
    });
    
gulp.task('default', ['build'], function(){

 browserSync.init({
      
    proxy: {
        target: "localhost:80", // can be [virtual host, sub-directory, localhost with port]
        ws: true // enables websockets
    }
    });
    gulp.watch('./src/js/*.js', ['watch']);
gulp.watch('./css/*.css').on('change', browserSync.reload);

});
