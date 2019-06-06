const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
    return {
        mode: env.NODE_ENV,
        entry: {
            'app': path.resolve(__dirname, 'src/main.js')
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'public'),
            publicPath: '/PhilMayne/'
        },
        module: {
            rules: [
                {
                    test: /\.(c|sc)ss$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader?name=/[name].[ext]'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
              }),
        ]
    }
};