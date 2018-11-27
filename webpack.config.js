const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const conf = {
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:8080',
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
    publicPath: 'dist/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: '/node_modules/',
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        },

        {
          loader: 'css-loader',
        },
        {
          loader: 'postcss-loader',
          /* eslint-disable */
          options: {
            ident: 'postcss',
            plugins: () => [
              require('autoprefixer'),
            ],
          },
        },
        {
          loader: 'less-loader',
        }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          'svgo-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'img/'
            }
        }]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

module.exports = (env, options) => {
  const production = options.mode === 'production';
  conf.devtool = production
    ? false
    : 'eval-sourcemap';
  return conf;
};
