const webpack = require("webpack");
const dotenv = require('dotenv');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = webpack.container;
const dependencies = require("./package.json").dependencies;


const envPaths = {
  production: path.resolve('./', `.env.production`),
  development: path.resolve('./', `.env.development`),
};

module.exports = (_, args) => {

  const envPath = envPaths[args.mode] || envPaths.development;

  // require('dotenv').config({ path: envPath });

  dotenv.config({ path: envPath });

  const fileEnv = dotenv.config({ path: envPath }).parsed;

  // reduce it to a nice object, the same as before (but with the variables from the file)
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
      return prev;
  }, {});

  return {

    // mode: "development",
    mode: args.mode,

    optimization: {
      minimize: args.mode === 'production',
    },

    performance: {
      hints: args.mode === 'production' ? 'warning' : false,
    },

    entry: {
      main: ['@babel/polyfill', path.resolve('.', 'src', 'index.js')]
    },

    // mode: "development",

    devServer: {
      contentBase: path.join(__dirname, "public"),
      host: '0.0.0.0',
      port: 3001,
      historyApiFallback: true
    },

    output: {
      publicPath: "http://localhost:3001/",
      chunkFilename: "[id].[contenthash].js"
    },

    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
       // {
       //   test: /\.(png|svg|jpg|gif)$/,
       //   use: ['file-loader'],
       // },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name]-[hash:8].[ext]'
                  },
              },
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({

        name: 'shell',

        // filename: "remoteEntry.js",
        filename: process.env.FILENAME,

        remotes: {
          // auth: 'auth@http://localhost:3002/remoteEntry.js',
          auth: process.env.AUTH_MODULE,
        },

        exposes: {
          './ContainerShell': './src/containers/ContainerShell',
          './NotFound': './src/containers/NotFound',
        },

        shared: {
          ...dependencies,
          "react-router-dom": {
              requiredVersion: dependencies['react-router-dom'],
              singleton: true,
          },
          "react-dom": {
              requiredVersion: dependencies['react-dom'],
              singleton: true,
          },
          "react": {
              requiredVersion: dependencies['react'],
              singleton: true,
          },
          '@material-ui/styles': {
            singleton: true,
          },
        }
      }),
      new HtmlWebpackPlugin({
        template: './public/index.ejs'
      }),

      new webpack.DefinePlugin(envKeys)
    ],
  };

};
