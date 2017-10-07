module.exports = {
	plugins: [
		require("autoprefixer")({
			browsers: ["last 2 versions", "> 1%", "ie >= 7"]
		}),
		require("postcss-csso")({
			comments: false
		}),
		require("cssnano")({
			mergeRules: false,
			discardComments: false
		}),
		require("postcss-cssstats")(function (stats) {
			console.log("Size: ", stats.size, ", ", "gzip Size", stats.gzipSize);
		})
	]
};