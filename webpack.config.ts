import * as  path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: './index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),  
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
};

export default config;