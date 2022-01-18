const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    module: {
        rules: [
            {
                test: /\.ts?x$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "commonjs",
        globalObject: "this",
    },
};
