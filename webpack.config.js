const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				},
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
		]
	},
  resolve: {
		extensions: ['.*', '.js', '.jsx', '.scss', '.sass']
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 8080,
		proxy: {
			'/api/**': 'http://localhost:3000',
		}
	},
}







