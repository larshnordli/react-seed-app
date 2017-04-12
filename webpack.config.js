const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   context: __dirname,
   devtool: debug ? 'source-map' : null,
   entry:{
      main: './src/scripts/app.js',
   },
   output: {
      filename: './dist/scripts/[name].js'
   },
   module: {
      loaders: [
         // SASS Loader and Transpiler
         {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
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
   plugins: debug ? [
      new ExtractTextPlugin({
         filename:'./dist/styles/[name].css',
         allChunks: true
      })
   ] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(
         {
            mangle:false,
            sourcemap: false
         }),
         new ExtractTextPlugin({
            filename:'./dist/styles/[name].css',
            allChunks: true
         })
   ],
};
