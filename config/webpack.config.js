function webpackConfig(mode) {
	return {
		mode: mode,
		entry: {
			global: './src/js/global.js',
			main: './src/js/pages/main.js'
		},
		output: {
			filename: '[name].js',
		},
		module: {
			rules: [{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}, ],
		},
	}
}

export default webpackConfig;