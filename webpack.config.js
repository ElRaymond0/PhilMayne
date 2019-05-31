const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = env => {
    return {
        mode: env.NODE_ENV,
        entry: {
            'app': path.resolve(__dirname, 'src/main.js')
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'src')
        },
        module: {
            rules: [
                {
                    test: /\.(c|sa)ss$/i,
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    }
};