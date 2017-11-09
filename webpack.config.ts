import * as  path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './distStart.ts',
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'dist'),
        filename: 'backApp.js',
        publicPath: './dist/'
    },
    devtool: 'eval-source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.webpack.ts', '.web.js', '.web.ts', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.ts$/, loader: 'ts-loader' },
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ],
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};

export default config;
