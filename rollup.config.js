import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
export default {
  // 核心选项
  input: "src/index.js", // 必须
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],

  output: {
    file: "./dist/bundle.js",
    format: "umd",
    name: "myBundle",
  },
};
