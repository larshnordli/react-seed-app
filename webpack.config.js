const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: debug ? 'source-map' : null,
   entry:{
      main: './src/scripts/app.js'
   },
   output: {
       path: path.resolve('dist'),
      filename: '[name].js',
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
        //  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
          { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
        // JS Loaders
       {
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
             presets: ['react', 'es2015', 'stage-2'],
             plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          }
       },
        //Vendor: Font Awesome Loaders
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

        //Image Loader
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack-loader',
            options: {bypassOnDebug:true, optimizationLevel:7, interlaced:false}
        }
      ]
   },
   plugins:
    debug ? [
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
         template: __dirname + '/src/index.html',
         filename: 'index.html',
         inject: 'body'
     }),
    ] : [
     new ExtractTextPlugin('[name].css'),
     new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
    ],
};
