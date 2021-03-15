const webpack = require("webpack");
const dotenv = require('dotenv');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = webpack.container;
const dependencies = require("./package.json").dependencies;


const envPaths = {
  production: path.resolve('./', `.env.production`),
  development: path.resolve(__dirname + '/', `.env.development`),
};

module.exports = (_, args) => {

  const envPath = envPaths[args.mode] || envPaths.development;

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

    devServer: {
      contentBase: path.join(__dirname, "public"),
      host: '0.0.0.0',
      port: 3002,
      historyApiFallback: true
    },

    resolve: {
      alias: {
        src: path.resolve('.', 'src')
      },
      extensions: ['*', '.js', '.jsx']
    },

    output: {
      publicPath: "http://localhost:3002/",
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

        // O nome desse módulo para a federação será "auth"
        name: 'auth',

        // filename: "remoteEntry.js",
        filename: process.env.FILENAME,

        remotes: {
          // shell: process.env.SHELL_MODULE,
        },

        exposes: {
          './authRoutes': './src/router/routes',
          './PrivateRoute': './src/router/PrivateRoute',
          './AuthProvider': './src/providers/AuthProvider',
          './Authenticated': './src/containers/Authenticated',
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
          react: {
              requiredVersion: dependencies['react'],
              singleton: true,
          },
          '@material-ui/styles': {
            singleton: true,
          },
        }
      }),
      new HtmlWebpackPlugin({
        title: 'Olá, faça o login!',
        template: './public/index.ejs'
      }),

      new webpack.DefinePlugin(envKeys)
    ],
  };

};
