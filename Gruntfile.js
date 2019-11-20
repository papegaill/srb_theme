/**
 * @file
 * Grunt Configuration file.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // WATCH TASK - important.
    watch: {
      sass: {
        files: ['**/*.{scss,sass}', 'sass/**/*.html'],
        tasks: ['sass']
      },
    },

    sass: {
      options: {
        outputStyle: 'compressed',
        sourceMap: false,
        sourceMapEmbed: false
      },
      dist: {
        files: {
          'css/srb.min.css': 'scss/style.scss'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['watch:sass']);
};
