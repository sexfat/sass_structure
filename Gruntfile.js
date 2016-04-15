module.exports = function(grunt) {
  grunt.initConfig({

    //watch
    watch: {
      css: {
        files: ['views/sass/*.scss', 'views/sass/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['views/*.html'],
      },
      js: {
        files: ['views/js/*.js']
      }
    },
    //sass
    sass: {
      build: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'views/sass/',
          src: ['*.scss'],
          dest: 'views/css/',
          ext: '.css'
        }]
      }
    },
    //  browserSync
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'views/css/*.css',
            'views/*.html',
            'views/js/*.js'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './views',
            index: 'index.html'
          }
        }
      }
    }
  });

  // load npm tasks

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // define default task
  grunt.registerTask('default', ['browserSync', 'watch']);
};
