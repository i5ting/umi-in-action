# umi-in-action

- https://zh.mweb.im/
- gitbook打包输出
- web采用vuepress预览

参考https://www.yuque.com/umijs/umi

# Summary

* [本书简介](README.md)
* [01 起步](1.md)
    - 从cra说起
    - 前端无比负责
    - 三分天下
    - 为什么选择umi
    - 你的第一个umi工程 
        - umirc
        - umi dev，umi build
        - 定义title和html
        - hello world组件
* [02 Umi技术栈](2.md)
    - 历史由来
    - 路由，布局
    - 目录约定
    - 应用架构
    - 配置说明
    - antd+dva
* [03 Umi入门](3.md)
    - 创建项目
        - 1）ant-design-pro  - Create project with an layout-only
        - 2）app             - Create project with a simple boilerplate, support typescript.
        - 3）block           - Create a umi block.
        - 4）library         - Create a library with umi.
        - 5）plugin          - Create a umi plugin.
    - 定义组件
    - 基本调试（vscode）
    - 概念
        - block
        - 按需加载
        - 运行时配置
        - mock数据
    - 官方模块
    - 插件机制
    - 生命周期
* [04 五大基础知识](4.md)
    - Node.js和npm
    - React
        - React标准写法和编码规范（hooks）
        - React-router v4
        - loading
        - antd（pro）
    - Webpack 4
        - code split
        - dll
        - hmr
        - devserver
        - 中间件hot+dev
    - 状态管理
        - redux
        - dva
        - mobx
    - Typescript
        - 类型
        - 面向对象
        - 设计模式
        - 周边生态
* [05 例子](5.md)
    - 开发流程
    - 功能点
    - 创建应用程序
    - 程序数据模型
    - mock数据和请求发送
    - 任务1：账户注册
    - 任务2：登入登出
    - 任务3：上传照片
    - 任务4：显示照片
    - 任务5：删除照片
    - 任务6：删除用户
* [06 增强](6.md)
    - jest测试
    - 获得webpack配置
    - ssr
    - uglify配置
    - dll和dynamic
    - 环境变量和配置
    - proxy
    - ie兼容
    - 构建发布到cdn
* [07 Typescript+SSR+Egg例子](7.md)
    - c端ssr优化的意义
    - 集成midway
        - koa
        - egg
        - midway(ioc)
        - 数据库操作
        - 视图
    - 开启ssr
    - 开启pwa
    - 使用egg/koa中间件
* [08 高级定制](8.md)
    - 编写插件
    - 源码解读
        - 如何源码跑起来
        - afwebpack
        - chain
        - lerna
    - 测试和测试覆盖率
    - 开源机制
    - 老项目如何快速迁移
* [09 umi的未来](9.md)
    - mpa
