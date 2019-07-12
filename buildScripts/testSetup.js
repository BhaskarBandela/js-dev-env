// This file is not transpiled, so CommonJS and ES5 must be used

// Register Babel to transpile before our tests run
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};