const pkg = require("./package.json")
const commonjs = require("rollup-plugin-commonjs")
module.exports = {
    input: "src/index.js",
    output: {
        format: "cjs",
        file: pkg.main
    },
    plugins: [
        commonjs()
    ]
}