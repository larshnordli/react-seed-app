const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   context: __dirname,
   devtool: debug ? 'source-map' : null,
   entry:{
      main: './src/scripts/app.js',
      main: './src/styles/sass/style.scss'
   },
   output: {
       path: __dirname + '/dist',
      filename: '[name].js'
   },
   module: {
      loaders: [
          // SASS Loader and Transpiler
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              //resolve-url-loader may be chained before sass-loader if necessary
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
         },

         //Vendor: Font Awesome Loaders
         { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
         { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      ]
   },
   plugins: [
      new webpack.optimize.UglifyJsPlugin(
         {
            mangle:false,
            sourcemap: false
         }),
      new ExtractTextPlugin('[name].css'),
     new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        })
   ],
};
