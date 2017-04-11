var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   context: __dirname + '/src',
   devtool: debug ? 'inline-sourcemap' : null,
   entry: './scripts/app.js',
   module: {
      rules: [
         // SASS loaders
         {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: "style-loader",
               use: ['css-loader', 'sass-loader']
            })
         },
         // JS Loaders
         {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
               presets: ['react', 'es2015', 'stage-0'],
               plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
         }
      ]
   },
   output: {
      path: __dirname + '/src/',
      filename: 'app.min.js'
   },
   plugins: debug ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(
         {
            mangle:false,
            sourcemap: false
         }),
      new ExtractTextPlugin(
         {
            allChunks: false,
            filename: './styles/style.css',
            disable: process.env.NODE_ENV === "development"
         }),
   ],
};
