const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin =require('html-webpack-plugin')

module.exports = {
	entry: {
		entry: './src/entry.js',
		entry2: './src/entry2.js'
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	plugins: [
		new uglify({
			test: /\.js$/,
			exclude: /\/node_modules/
		}),

		new htmlPlugin({
			minify: {
				removeAttributeQuotes: true
			},
			hash: true,
			template: './src/index.html'
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname,'dist'),
		host: 'localhost',
		compress: true,
		port: 1717
	}
}

// entry：配置入口文件的地址，可以是单一入口，也可以是多入口。
// output：配置出口文件的地址，在webpack2.X版本后，支持多出口配置。
// module：配置模块，主要是解析CSS和图片转换压缩等功能。
// plugins：配置插件，根据你的需要配置不同功能的插件。
// devServer：配置开发服务功能，后期我们会详细讲解。

// contentBase:配置服务器基本运行路径，用于找到程序打包地址。
// host：服务运行地址，建议使用本机IP，这里为了讲解方便，所以用localhost。
// compress：服务器端压缩选型，一般设置为开启，如果你对服务器压缩感兴趣，可以自行学习。
// port：服务运行端口，建议不使用80，很容易被占用，这里使用了1717.