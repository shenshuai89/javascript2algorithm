## 使用 JavaScript 编写算法

### 使用 jest 进行测试

测试文件编写在 test 文件夹下
运行测试命令，yarn test

### 使用 babel 对 es6 编译

配置 babel.config.js

```js
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
```

### 使用 rollup 进行代码编译

运行命令 yarn rollup
