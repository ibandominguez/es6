'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    babel: {
      options: { sourceMap: true },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['*.js'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('build', ['babel'])

};
