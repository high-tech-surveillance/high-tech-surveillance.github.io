const autoprefixer = require("autoprefixer");
const path = require("path");
const PugPlugin = require("pug-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const OUTPUT_DIR = "dist";

const sourcePath = path.join(__dirname, "app/view/"); // => /path/to/src

const config = {
  target: "web",
  output: {
    path: path.resolve(__dirname, OUTPUT_DIR),
    filename: "[name].[contenthash:8][ext]",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "app/assets/"),
      font: path.resolve(__dirname, "app/assets/fonts"),
      logo: path.resolve(__dirname, "app/assets/img/logo.svg"),
      style: path.resolve(__dirname, "app/style/"),
      utils: path.resolve(__dirname, "app/view/utils/"),
      fragments: path.resolve(__dirname, "app/view/fragments/"),
      /*"showcase-carousel": path.resolve(
        __dirname,
        "components/showcase-carousel/dist/"
      ),  */
      markdown: path.resolve(
        __dirname,
        "app/style/high-tech-surveillance/markdown.sass"
      ),
      theme: path.resolve(
        __dirname,
        "app/style/high-tech-surveillance/style.sass"
      ),
    },
  },
  devServer: {
    open: true,
    host: "localhost",
    liveReload: true,
    static: {
      directory: path.join(__dirname, OUTPUT_DIR),
    },
    watchFiles: {
      paths: ["app/**/*.*", "./tailwind.config.js"],
      options: {
        usePolling: true,
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: ["CNAME"],
    }),
    new PugPlugin({
      entry: "app/view/pages/",
      //verbose: true,
      //pretty: true,
      js: {
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: "render",
          data: {
            // Pass isProduction variable to inject HRM code when is on development
            isProduction,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(mp4)$/i,
        type: "asset/resource",
        generator: {
          filename: "video/[hash][ext][query]",
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.(svg)$/i,
        type: "asset/inline",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
