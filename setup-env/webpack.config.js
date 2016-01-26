module.exports = {
  context: __dirname + "/src",
  entry: {
  	javascript: "./app.js",
  	html: "./index.html",
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  //指定可被import的模組檔案副檔名
  resolve: {
        extensions: ['', '.js', '.jsx']
    },

  module: {
	  loaders: [
	    {
	      // 只針對js與jsx檔案
	      test: /\.jsx?$/,

	      // 只包含`src`目錄
	      include: [
	        __dirname + "/src"
	      ],

	      exclude: /node_modules/,

          // 也可以使用'babel-loader'
	      loaders: ['react-hot','babel?presets[]=es2015&presets[]=react'],

	      // 其他設定preset或plugin
	      // query: {
	      //   presets: ['react', 'es2015']
	      // }
	    },
	    {
		  test: /\.html$/,
		  loader: "file?name=[name].[ext]",
		},
	  ]
  }
};