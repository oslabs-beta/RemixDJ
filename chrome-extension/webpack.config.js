const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: { 
	 "devtools/devtools" : path.resolve(__dirname, "src/devtools/index.tsx") ,
	 "popup/popup": path.resolve(__dirname, "src/popup/index.tsx") 
	},
	
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js",
		publicPath: "/",
	},
	devtool: "inline-source-map",
	mode: "development",
	module: {
		rules: [
			{
				// Testing for any .js/.jsx files to be transpiled by Babel preset-react, and to transpile down
				// any ES6+ code down to version that can be compatible with any browser
				test: /\.(js|jsx)$/i,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", `@babel/preset-react`],
					},
				},
			},
			{
				// Testing for any .css/.scss files so that webpack can fulfill the style import in 'index.js'
				test: /\.(scss)$/i,
				exclude: /(node_modules)/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /(node_modules)/,
				use: ["ts-loader"],
			},
			{
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
				use: [
					{
						// loads files as base64 encoded data url if image file is less than set limit
						loader: "url-loader",
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
		// Generates an HTML file based on the template we pass in to serve our webpack files
		new HtmlWebpackPlugin({
			filename: "devtools/devtools.html",
			template: path.resolve(__dirname, "./src/devtools/devtools.html"),
			chunks: ["devtools-devtools"]
		}),
		new HtmlWebpackPlugin({
			filename: "popup/popup.html",
			template: path.resolve(__dirname, "./src/popup/popup.html"),
			chunks: ["popup"]
		}),
		new CopyPlugin({
			patterns: [
				{
					from:"src/public",
				}
			]
		})
	],
	resolve: {
		// Enable importing .js and .jsx files without specifying their extension
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
};
