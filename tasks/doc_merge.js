'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('doc_merge', 'Run elements through doc-merge', function () {
    var generate = require('doc-merge');
    var options = this.options({
      config: null,
      merge: false
    });

    grunt.file.mkdir(this.data.dest);
    generate(this.data.src, this.data.dest, options);
  });
};
