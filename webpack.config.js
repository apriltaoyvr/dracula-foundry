const path = require("path");
const fileSystem = require("fs-extra");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
* Retrieves info about the Foundry installed in the system in JSON format.
* @returns JSON with Foundry configuration data.
*/
function getFoundryConfig() {
    const filePath = path.resolve(process.cwd(), "foundryconfig.json");
    let config;
    
    if (fileSystem.existsSync(filePath)) {
        config = fileSystem.readJSONSync(filePath);
    } else {
        console.log("Unable to locate configuration file at path.");
    }
    
    return config;
}

module.exports = (env, argv) => {
    let config = {
        context: __dirname,
        entry: path.resolve(__dirname, "./src/index.js"),
        module: {
            rules: [
                {
                    test: /\.(c|sa|sc)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader:"css-loader",
                            options: {
                                url: false,
                                sourceMap: true,
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true,
                            }
                        }
                    ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new MiniCssExtractPlugin({
                filename: "dracula-foundry.css",
            }),
            new CopyPlugin({
                patterns: [
                    { from: "module.json" },
                    { from: "assets", to: "assets" },
                    { from: "lang", to: "lang" },
                ],
            }),
        ],
        
        output: {
            filename: "dracula-foundry.bundle.js",
            path: path.resolve(__dirname, "dist/dracula-foundry"),
        },
    };
    
    const isProduction = argv.mode === "production";
    const foundryConfig = getFoundryConfig();
    
    if (isProduction) {
        config.mode = "production";
    } else {
        console.log(`Dev build detected.`);
        
        if (foundryConfig !== undefined) {
            config.output.path = path.join(foundryConfig.data_folder, "modules", "dracula-foundry");
        }
        
        config.watch = true;
        config.mode = "none";
    }
    
    console.log(`Generating files at: ${config.output.path}`);
    
    return config;
};