const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: { 
	 'panel' : path.resolve(__dirname, 'src/panel/index.tsx'),
	 'popup': path.resolve(__dirname, 'src/popup/index.tsx'),
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name]/[name].bundle.js',
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				// Testing for any .js/.jsx files to be transpiled by Babel preset-react, and to transpile down
				// any ES6+ code down to version that can be compatible with any browser
				test: /\.(js|jsx)$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				// Testing for any .css/.scss files so that webpack can fulfill the style import in 'index.js'
				// In order to use Tailwindcss, we need to use the 'postcss-loader' to process the css file
				// postcss-loader will use the 'postcss.config.js' file to process the css file and is configured with tailwindcss
				test: /\.(css)$/i,
				exclude: /(node_modules)/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules)/,
				use: ['ts-loader'],
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
				use: [
					{
						// loads files as base64 encoded data url if image file is less than set limit
						loader: 'url-loader',
						options: {
							// if file is greater than the limit (bytes), file-loader is used as fallback
							limit: 8192,
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		// Generates an HTML file based on the template we pass in to serve our webpack files
		// the chunks are no working properly and we have a hacky solution to our problem. Eventually should fix this
		new HtmlWebpackPlugin({
			filename: 'panel/panel.html',
			template: path.resolve(__dirname, './src/panel/panel.html'),
			chunks: ['panel']
		}),
		new HtmlWebpackPlugin({
			filename: 'popup/popup.html',
			template: path.resolve(__dirname, './src/popup/popup.html'),
			chunks: ['popup']
		}),
		new CopyPlugin({
			patterns: [
				{
					from:'src/public',
				}
			]
		}),
	],
	resolve: {
		// Enable importing .js and .jsx files without specifying their extension
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
};
