var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var config = {
  stats: {
    assets: false,
    hash: false,
    children: false
  },
  optimization: {
    splitChunks: { chunks: "all" },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  node: {
    fs: "empty",
  },
  entry: {
    index: [path.resolve(__dirname, "src/index.js")],
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "public"),
    chunkFilename: "[name].[contenthash].bundle.js",
    filename: "[name].[contenthash].js",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: "this",
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({ patterns: [{ from: "src/assert", to: "./" }] }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
    }),
    // new HardSourceWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:4].css",
      chunkFilename: "[name].[contenthash:4].css",
    }),
  ],
  performance: { hints: false },
  resolve: {
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.worker\.js$/,
        use: [
          {
            loader: "worker-loader",
            options: { name: "worker.[contenthash].js" },
          },
          {
            loader: "babel-loader",
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]_[local]_[contenthash:base64:5]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: {
                    mode: "local",
                    localIdentName: "[name]_[local]_[contenthash:base64:5]",
                  },
                },
              },
            ],
          },
          {
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            exclude: /\.module\.css$/,
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: { javascriptEnabled: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?name=[path][name].[ext]&limit=50000",
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=[path][name].[ext]",
      },
      {
        test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
        loader: "url-loader?mimetype=application/font-woff",
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          "url-loader?name=[path][name].[ext]&limit=50000&mimetype=application/octet-stream",
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader:
          "url-loader?name=[path][name].[ext]&limit=50000&mimetype=image/svg+xml",
      },
    ],
  },
};
module.exports = (env, argv) => {
  if (argv.mode === "development") {
  }
  if (argv.mode === "production") {
  }
  return config;
};
