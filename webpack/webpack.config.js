const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (options) => ({
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './src',
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
        alias: {
            'fides-helvetica': path.resolve(__dirname, '..'),
        }
    },
    entry: {
        main: './src/index.js',
        style: './src/scss/fides-helvetica.scss'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|fides-bootstrap)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            sourceMap: true,
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: 'eslint-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loaders: ['file-loader?hash=sha512&digest=hex&name=content/[hash].[ext]']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                            convertToAbsoluteUrls: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/demo.html',
            inject: 'head'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: {
                target: 'http://localhost:3060'
            },
            ghostMode: {
                clicks: false,
                forms: false,
                scroll: false,
                location: false
            }
        }, {
            reload: true
        }),
    ]
});
