# ES6-browser-sync

## How to run:

1. copy all the files inside the folder and paste it inside apache server directory.
   (if you want you can create a your own Virtual Host for Apache server)
   
2. install following tools.

           npm install --save-dev gulp
           npm install --save-dev babelify babel-preset-es2015 browserify vinyl-source-stream
           npm install --save-dev vinyl-buffer gulp-uglify
           npm install browser-sync --save-dev


3. inside the directory, open the console and run 'gulp' in order to run the gulp file.

4. browser-sync will open your apache localhost.

   if not you have to configure your virtual host server port in the `gulpfile.js` under browserSync.init function.
   more about browserSync.https://browsersync.io/docs/gulp
   
   
