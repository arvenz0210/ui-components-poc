const path = require("path");

mode: "development",
    (module.exports = {
        entry: "./src/index.js",
        module: {
            rules: [
                {
                    test: /\.ts?x$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
    });
