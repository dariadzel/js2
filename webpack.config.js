const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
            },
                exclude: '/node_modules/'
            },
            {
                test: /\.scss$/,
                use:  [  'style-loader', 
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader']
              },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
            }
        ]

    },
    devtool: 'source-map',

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        })
    ]
}
module.exports = config;