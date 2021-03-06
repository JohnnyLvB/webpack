const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundlle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
}