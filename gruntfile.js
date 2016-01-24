'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    babel: {
      options: { sourceMap: true },
      dist: {
        files: { 'dist/es5.js': 'src/es6.js' }
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('build', ['babel'])

};
