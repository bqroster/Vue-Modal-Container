import vue from "rollup-plugin-vue2";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { uglify } from "rollup-plugin-uglify";
import minimist from "minimist";
import { terser } from 'rollup-plugin-terser'

const argv = minimist(process.argv.slice(2));

const config = {
    input: "src/main.js",
    output: {
        name: "VueBpPckg",
        exports: "named"
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        commonjs(),
        vue({
            css: true,
            compileTemplate: true,
            template: {
                isProduction: true
            }
        }),
        buble(),
        terser()
    ]
};

// minify browser
if (argv.format === "iife") {
    config.plugins.push(uglify());
}

export default config;