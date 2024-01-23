const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const PugPlugin = require("pug-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";
const sourcePath = path.join(__dirname, "app/view/"); // => /path/to/src

const config = {
  target: "web",
  entry: {},
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    liveReload: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["app/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
  plugins: [
    new PugPlugin({
      //filename: (pathData) => {
      //const sourceFile = pathData.filename; // => /path/to/src/pages/about.pug
      //console.log("Parsing", sourceFile);
      //const relativeFile = path.relative(sourcePath, sourceFile); // => pages/about.pug
      //const { dir, name } = path.parse(relativeFile); // dir: 'pages', name: 'about'
      //return `${dir}/${name}.html`; // => dist/pages/about.html
      //},
      verbose: true,
      pretty: true,
      //postprocess: (content, info, compilation) => {
      //console.log(info);
      //console.log("Compilation", compilation);
      //console.log("Content", content);
      ////return eval(content);
      ////return content;
      //},
    }),
    new HtmlBundlerPlugin({
      // When this test is enable, the pug files in the directory are parsed, but they are converted as JS modules.
      //test: /\.(pug|html)$/,
      // The entry point doesn't process pug files unless they are individualy specified or tested
      //entry: "app/view/",
      entry: {
        index: "app/view/index.pug",
        "about-us": "app/view/about-us.pug",
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
            isProduction,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
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
