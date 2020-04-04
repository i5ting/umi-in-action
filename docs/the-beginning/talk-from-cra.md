---
title: 从cra说起
author: i5ting
---

框架和基本探索稳定后，大家就开始想如何更好的用，更简单的用。各家大厂都在前端技术栈思考如何选型和降低成本，统一技术栈。

关于 Webpack 的封装实践有很多，比如知名的 af-webpack，ykit，easywebpack。

- af-webpack 是支付宝定制的Webpack，把 webpack-dev-server 等Node.js模块直接打包进去，同时对配置做了更好的处理，以及插件化
- ykit 是去哪儿开源的Webpack，内置 Connect 作为Web server，结合dev和hot中间件，对于多项目构建提效明显，对版本文件发布有不错的实践
- easywebpack 也是插件化，但对解决方案，boilerplate 等做了非常多的集成，比如egg的ssr是有深入思考的，尽管不赞同这种做法。

在 create-react-app（cra）项目里使用的是 react-scripts 作为启动脚本，它和 egg-scripts 类似，也都是通过约定，隐藏具体实现细节，让开发者不需要关注构建。在未来，类似的封装还会有更多的封装，偏于应用层面。
