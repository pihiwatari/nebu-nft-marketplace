import { resolve } from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

export default () => {
  return {
    entry: "./src/index.js",
    output: {
      path: resolve(__dirname, "dist"),
      filename: "main.js",
    },
    resolve: {
      extensions: [".js"],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        {
          test: /\.png/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        inject: true,
        filename: "index.html",
        template: resolve(__dirname, "./public/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(__dirname, "src/styles/fonts/"),
            to: resolve(__dirname, "dist/assets/fonts"),
          },
          {
            from: resolve(__dirname, "src/styles/images/"),
            to: resolve(__dirname, "dist/assets/images"),
          },
        ],
      }),
    ],
    devServer: {
      // contentBase: join(__dirname, "dist"),
      port: 8080,
    },
    optimization: {},
  };
};
