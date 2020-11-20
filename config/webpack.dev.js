const path = require("path")

module.exports = {
	entry: {
		main: [
			// "babel-polyfill",
			// "core-js/fn/promise",
			"./src/main.js"
		]
	},
	mode: "development",
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "../dist")
	},
	devServer: {
		contentBase: "dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{ loader: "babel-loader" }
				],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.html$/,
				use: [
					{ loader: "file-loader", options: { name: "[name].html" } },
					{ loader: "extract-loader" },
					{ loader: "html-loader", options: { attributes: {
						list: [
							// All default supported tags and attributes
							{
								tag: 'img',
								attribute: 'src',
								type: 'src'
							},
						]
					} } }
				]
			},
			{
				test: /\.jpg$/,
				use: [
					{ loader: "file-loader", options: { name: "images/[name].[ext]" } }
				]
			}
		]
	}
}