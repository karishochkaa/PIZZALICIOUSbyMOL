const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: [
      path.resolve(__dirname, "./src/index.js"),
    ],
    main: path.resolve(__dirname, "./src/pages/main/main.js"),
    about: path.resolve(__dirname, "./src/pages/about/about.js"),
    menu: path.resolve(__dirname, "./src/pages/menu/menu.js"),
    contact: path.resolve(__dirname, "./src/pages/contact/contact.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.hbs$/i,
        loader: "handlebars-loader",
        exclude: /(node_modules)/,
      },
      {
        test: /\.(ico|png|jpeg|webp|svg)$/,
        type: "asset/resource",

        generator: {
          filename: "img/[name].[hash:8][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "main",
      filename: "main.html",
      template: "./src/pages/main/main.html",
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      title: "about",
      filename: "about.html",
      template: "./src/pages/about/about.html",
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      title: "menu",
      filename: "menu.html",
      template: "./src/pages/menu/menu.html",
      chunks: ['menu'],
    }),
    new HtmlWebpackPlugin({
      title: "contact",
      filename: "contact.html",
      template: "./src/pages/contact/contact.html",
      chunks: ['contact'],
    }),
    
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false, // Вимкнення попереджень про розмір файлів
    maxAssetSize: 512000, // Максимальний розмір активу в байтах (500 КБ)
    maxEntrypointSize: 512000, // Максимальний розмір точки входу в байтах (500 КБ)
  },
  devServer: {
    port: 4444,
    open: true,
  },
};
