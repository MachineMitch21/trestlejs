const path = require('path');

const trestle_rules = [];

const trestle_options = {
	entry: './lib/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'trestle.js'
	},
	module: {
		rules: trestle_rules
	}
}

const babelLoader = {
	test: /\.js$/,
	use: 'babel-loader'
}

trestle_rules.push(babelLoader);

module.exports = [
	trestle_options
];