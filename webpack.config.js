const path = require('path');

module.exports = {
  entry: './js/src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
};