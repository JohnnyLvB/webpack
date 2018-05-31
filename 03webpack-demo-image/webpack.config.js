const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

var website ={
	publicPath:"http://localhost:1010/"
}

module.exports = {
  entry: {
		entry: './src/entry.js',
  },
  output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'app.js',
		publicPath: website.publicPath
  },
  module: {
		rules: [
			{
				test: /\.css$/,
				use: extractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 500,
						outputPath: 'images/'
					}
				}]
			},
			{
				test: /\.(htm|html)$/,
				use:['html-withimg-loader']
			},
			{
				test: /\.less$/,
				use: extractTextPlugin.extract({
					use:[{
						loader: "css-loader"
					},{
						loader: "less-loader"
					}],
					fallback: "style-loader"
				})
			},
			{
				test: /\.scss$/,
				use: extractTextPlugin.extract({
					use:[{
						loader: "css-loader"
					},{
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			}
		]
  },
  plugins: [
    new htmlPlugin({
			minify: {
				removeAttributeQuotes: true
			},
			hash: true,
			template: './src/index.html'
		}),
		new extractTextPlugin("/css/index.css")
  ],
  devServer: {
		contentBase: path.resolve(__dirname,'dist'),
		host: 'localhost',
		compress: true,
		port: 1010
  }
}