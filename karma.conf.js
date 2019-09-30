// Karma configuration
// Generated on Fri Aug 02 2019 02:11:01 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set( {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      // 'esm',
      'mocha',
      'chai',
      'browserify'
    ],

    plugins: [
      // require.resolve('@open-wc/karma-esm'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-browserify'),
      require('karma-chrome-launcher')
    ],

    browserify: {
      debug: true,
      plugin: [
        [ require('esmify'), { /* ... options ... */ } ]
      ]
    },

    // list of files / patterns to load in the browser
    files: [
      // { pattern: '*.test.js', type: 'module' },
      '*.test.js',
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '*.test.js': [ 'browserify' ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // esm: {
    //   // if you are using 'bare module imports' you will need this option
    //   nodeResolve: true,
    //   // set compatibility mode to all
    //   compatibility: 'all',
    //   // compatibility: 'none',
    // },
  } )
}
