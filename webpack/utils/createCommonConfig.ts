import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';

// constants
import { DIST_PATH, SRC_PATH } from '../constants';

export default function createCommonConfig(): Configuration {
  return {
    entry: {
      ['index']: resolve(SRC_PATH, 'index.ts'),
    },
    module: {
      rules: [
        // templates
        {
          loader: 'handlebars-loader',
          test: /\.hbs$/,
        },

        // assets
        {
          test: /\.(ttf?.+|woff?.+|woff2?.+)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.(png?.+|jpeg?.+|svg?.+)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/images/[hash][ext][query]',
          },
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(SRC_PATH, 'images'),
            to: resolve(DIST_PATH, 'assets', 'images'),
          },
        ],
      }),
    ],

    resolve: {
      alias: {
        ['@app/components']: resolve(SRC_PATH, 'components'),
        ['@app/constants']: resolve(SRC_PATH, 'constants'),
        ['@app/fonts']: resolve(SRC_PATH, 'fonts'),
        ['@app/images']: resolve(SRC_PATH, 'images'),
        ['@app/types']: resolve(SRC_PATH, 'types'),
        ['@app/utils']: resolve(SRC_PATH, 'utils'),
      },
      extensions: ['.js', '.ts', '.tsx'],
    },

    stats: {
      assetsSpace: 100,
      modules: false,
    },
  };
}
