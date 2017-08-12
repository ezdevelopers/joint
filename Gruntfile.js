module.exports = function(grunt) {
  const optipng = require('imagemin-jpegtran');
  const jpegtran = require('imagemin-jpegtran');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'assets/js/bootstrap.js',
        dest: 'assets/js/build/global.min.js'
      }
    },

    imagemin: {
      dynamic: {
        options: {
                optimizationLevel: 3,
                svgoPlugins: [{removeViewBox: false}],
                use: [jpegtran(),optipng()] // Example plugin usage
            },
            files: [{
                expand: true,
                cwd: 'assets/img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'assets/images/'
            }]
        }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Default task(s).
  grunt.registerTask('default', ['uglify','imagemin']);

};
