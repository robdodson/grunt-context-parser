'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('context_parser', 'Run elements through context-free-parser', function () {
    var generate = require('context-parser');
    var options = this.options({
      config: null,
      merge: false
    });

    grunt.file.mkdir(this.data.dest);
    generate(this.data.src, this.data.dest, options);
  });
};
