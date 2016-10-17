module.exports = {
    entry: {
        app: "./src/main.ts",
        polyfill: "./src/polyfill.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        filename: "./dest/[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html/,
                loader: "raw-loader",
                exclude: /node_modules/
            }
        ]
    },
    watch: true,
    resolve: {
        extensions: ["", ".js", ".ts"]
    }
}