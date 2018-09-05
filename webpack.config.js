var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

htmlWebpackPlugin = new HtmlWebpackPlugin ({
        template: path.join(__dirname, 'public/index.html'),
        filename: './index.html'
    });

module.exports = {
	entry : './src/index.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, 'dist')
	},
	"module" : {
		rules : [
			{
				test : /\.js?$/,
				loader : 'babel-loader',
				exclude : path.resolve(__dirname, 'node_modules'),
				query : {
					presets : [ 'es2015', 'react' ]
				}
			}, {
				test : /\.css$/,
				use : [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [htmlWebpackPlugin],
	devServer : {
		contentBase : path.resolve(__dirname, 'dist')
	}
};
