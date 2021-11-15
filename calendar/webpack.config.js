const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   mode: 'development',
   entry: './src/calendar.js',
   output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js',
  },

   module: {
     rules: [
       {
         test: /\.css/,
         use: [
           { loader: 'style-loader' },
           {
             loader: 'css-loader',
             options: {
               module: true
             }
           },
           { loader: 'sass-loader' }
         ]
       },
      {
         test: /\.s[ac]ss$/i,
         use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
       }, 
       {
         test: /\.m?js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-env']
           }
         }
       }
     ]
   },
   plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
   ],
 };