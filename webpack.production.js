const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new BundleStatsWebpackPlugin({
            html: true,
            outDir: './stats'
        }),
    ],
    stats: {
        assets: true,
        entrypoints: true,
        chunks: true,
        modules: true,
        builtAt: true,
        hash: true
    }
});
