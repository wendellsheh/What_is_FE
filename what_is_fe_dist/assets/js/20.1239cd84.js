(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{385:function(e,a,t){"use strict";t.r(a);var s=t(27),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"webpack-基础学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-基础学习"}},[e._v("#")]),e._v(" webpack 基础学习")]),e._v(" "),t("h2",{attrs:{id:"什么是-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-webpack"}},[e._v("#")]),e._v(" 什么是 webpack")]),e._v(" "),t("p",[t("strong",[e._v("核心定义:")]),e._v(" webpack 是一个静态模块打包工具(module bundler)")]),e._v(" "),t("p",[t("strong",[e._v("模块 module:")]),e._v(" 在模块化编程中，开发者将程序分解为功能离散的 chunk，并称之"),t("em",[e._v("模块")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"webpack-天生支持的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-天生支持的模块"}},[e._v("#")]),e._v(" webpack 天生支持的模块")]),e._v(" "),t("ul",[t("li",[e._v("ES Module import 语句")]),e._v(" "),t("li",[e._v("commonJS "),t("code",[e._v("require()")]),e._v(" 语句")]),e._v(" "),t("li",[e._v("AMD "),t("code",[e._v("define")]),e._v("和"),t("code",[e._v("require")]),e._v(" 语句")]),e._v(" "),t("li",[e._v("stylesheet url(） 或者 HTML "),t("img",{attrs:{src:""}}),e._v(" 文件中的图片链接")]),e._v(" "),t("li",[e._v("WebAssembly 模块")])]),e._v(" "),t("h3",{attrs:{id:"通过-loader-支持的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过-loader-支持的模块"}},[e._v("#")]),e._v(" 通过 "),t("em",[e._v("loader")]),e._v(" 支持的模块")]),e._v(" "),t("ul",[t("li",[e._v("CoffeeScript")]),e._v(" "),t("li",[e._v("TypeScript")]),e._v(" "),t("li",[e._v("ESNext (Babel)")]),e._v(" "),t("li",[e._v("Sass")]),e._v(" "),t("li",[e._v("Less")]),e._v(" "),t("li",[e._v("Stylus")]),e._v(" "),t("li",[e._v("Elm")])]),e._v(" "),t("blockquote",[t("p",[e._v("当使用 webpack 打包 ES6 模块时，webpack 可以识别"),t("code",[e._v("import")]),e._v("和"),t("code",[e._v("export")]),e._v("语法，但是注意，如果使用其他的 ES6+ 特性，仍然需要引入 babel。")])]),e._v(" "),t("h2",{attrs:{id:"webpack-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-安装"}},[e._v("#")]),e._v(" webpack 安装")]),e._v(" "),t("ul",[t("li",[e._v("npm install webpack webpack-cli -g")])]),e._v(" "),t("h2",{attrs:{id:"webpack-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[e._v("#")]),e._v(" webpack 配置")]),e._v(" "),t("h3",{attrs:{id:"mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[e._v("#")]),e._v(" mode")]),e._v(" "),t("ul",[t("li",[e._v("提供 "),t("code",[e._v("mode")]),e._v(" 配置选项，告知 webpack 使用相应模式的内置优化。")])]),e._v(" "),t("p",[e._v("string = 'production': 'none' | 'development' | 'production'")]),e._v(" "),t("ul",[t("li",[e._v("使用"),t("code",[e._v("production")]),e._v("会对代码进行压缩，使用"),t("code",[e._v("development")]),e._v("不会")])]),e._v(" "),t("h3",{attrs:{id:"loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[e._v("#")]),e._v(" loader")]),e._v(" "),t("p",[t("code",[e._v("webpack")]),e._v(" 不能识别非 js 格式文件， 只能使用 "),t("code",[e._v("loader")]),e._v(" 用于对模块的源代码进行转换。webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 "),t("code",[e._v("loader")]),e._v("。")]),e._v(" "),t("p",[e._v("webpack 支持使用 "),t("code",[e._v("loader")]),e._v(" 对文件进行预处理。你可以构建包括 JavaScript 在内的任何静态资源。并且可以使用 Node.js 轻松编写自己的 "),t("code",[e._v("loader")]),e._v("。")]),e._v(" "),t("p",[e._v("如果一个静态文件不是 js 格式，则需要判断文件的结尾后缀，使用对应的文件格式的"),t("code",[e._v("loader")])]),e._v(" "),t("p",[t("strong",[e._v("常用配置方式")]),e._v("： "),t("code",[e._v("module.rules")]),e._v(" 允许你在 webpack 配置中指定多个 loader。")]),e._v(" "),t("h4",{attrs:{id:"打包图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包图片"}},[e._v("#")]),e._v(" 打包图片")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    module: {\n        rules: [{\n            test: /\\.(jpe?g|png|gif)$/i,\n            use: {\n                loader: 'url-loader', // 'file-loader'\n                options: {\n                    // 占位符\n                    name: 'image/[contenthash].[ext]',\n                    limit: 10240\n                }\n            }\n        }]\n    }\n")])])]),t("blockquote",[t("p",[t("code",[e._v("url-loader")]),e._v(" 与 "),t("code",[e._v("file-loader")]),e._v(" 类似, 用于打包文件，不过"),t("code",[e._v("url-loader")]),e._v("会将文件小于"),t("code",[e._v("limit")]),e._v("的值的的图片打包成 base64 格式的文件")])]),e._v(" "),t("h3",{attrs:{id:"打包样式文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包样式文件"}},[e._v("#")]),e._v(" 打包样式文件")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("style-loader 作用:")]),e._v(" 把 CSS 插入到 DOM 中。")]),e._v(" "),t("li",[t("strong",[e._v("css-loader 作用")]),e._v(" 对 "),t("code",[e._v("@import")]),e._v(" 和 "),t("code",[e._v("url()")]),e._v(" 进行处理，就像 js 解析 "),t("code",[e._v("import/require()")]),e._v(" 一样， 把多个 css 文件合并成一个")]),e._v(" "),t("li",[t("strong",[e._v("sass-loader 作用")]),e._v(" 把 sass 文件翻译成 css")]),e._v(" "),t("li",[t("strong",[e._v("postcss-loader")]),e._v(" 用来自动添加 css 浏览器商家前缀，可在"),t("code",[e._v("post.config.js")]),e._v("中进行配置")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    module: {\n        rules: [{\n            test: /\\.scss$/i,\n            use: [\n                'style-loader',\n\t\t\t\t{\n                    loader: 'css-loader',\n                    options: {\n                        // 处理scss文件里引入其他scss文件，引入的scss文件也要走两个loader\n                        importLoaders: 2,\n                        // 是否开启css module打包\n                        modules: true\n                    }\n                },\n\t\t\t\t'sass-loader',\n\t\t\t\t'postcss-loader'\n            ]\n        }]\n    }\n")])])]),t("p",[e._v("在"),t("a",{attrs:{href:"https://webpack.docschina.org/loaders/css-loader/",target:"_blank",rel:"noopener noreferrer"}},[e._v("css-loader"),t("OutboundLink")],1),e._v("的"),t("code",[e._v("options")]),e._v("将"),t("code",[e._v("module")]),e._v("设置成"),t("code",[e._v("true")]),e._v(",可以使用"),t("code",[e._v("CSS Modules")]),e._v("组织样式，避免 css 全局污染, "),t("code",[e._v("CSS Modules")]),e._v("使用方式如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" import style from './style/index.scss'\n")])])]),t("blockquote",[t("p",[e._v("注：use 数组里编译的顺序是从上到下，从右到左，如果不注意先后顺序打包时可能会报错")])]),e._v(" "),t("h3",{attrs:{id:"打包-iconfont-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打包-iconfont-文件"}},[e._v("#")]),e._v(" 打包 iconfont 文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  module: {\n        rules: [{\n            test: /\\.(eot|ttf|svg)$/,\n\t\t\tuse: {\n\t\t\t\tloader: 'file-loader'\n\t\t\t}\n        }]\n    }\n")])])]),t("p",[e._v("更多文件格式的参考 "),t("a",{attrs:{href:"https://webpack.docschina.org/loaders/",target:"_blank",rel:"noopener noreferrer"}},[e._v("loader"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" plugins")]),e._v(" "),t("p",[t("code",[e._v("plugin")]),e._v("可以在 webpack 运行到某个节点，帮你做一些事情，"),t("code",[e._v("plugin")]),e._v("目的在于解决 loader 无法实现的其他事。")]),e._v(" "),t("h3",{attrs:{id:"htmlwebpackplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#htmlwebpackplugin"}},[e._v("#")]),e._v(" HtmlWebpackPlugin")]),e._v(" "),t("p",[t("code",[e._v("HtmlWebpackPlugin")]),e._v(" 会在打包结束后自动生成一个 html 文件，并把打包生成 js 自动引入到这个 html 文件中, 在文件被打包之后执行")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n    entry: 'index.js',\n    output: {\n        path: path.resolve(__dirname, './dist'),\n        filename: 'index_bundle.js'\n    },\n    plugins: [\n      new HtmlWebpackPlugin({template: 'src/index.html'})\n    ]\n};\n\n")])])]),t("h3",{attrs:{id:"cleanwebpackplugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanwebpackplugin"}},[e._v("#")]),e._v(" CleanWebpackPlugin")]),e._v(" "),t("p",[t("code",[e._v("CleanWebpackPlugin")]),e._v(" 在打包之前，帮你清理删除某个文件夹")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    plugins: [\n\t\tnew CleanWebpackPlugin(['dist'])\n\t]\n")])])]),t("p",[e._v("更多插件参考 "),t("a",{attrs:{href:"https://webpack.docschina.org/plugins/",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugin"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"entry-output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry-output"}},[e._v("#")]),e._v(" entry & output")]),e._v(" "),t("p",[e._v("打包的入口起点和输出， 即使可以存在多个 "),t("code",[e._v("entry")]),e._v(" 起点，但只能指定一个 "),t("code",[e._v("output")]),e._v(" 配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" module.exports = {\n  entry: {\n    app: './src/app.js',\n    search: './src/search.js'\n  },\n  output: {\n    filename: '[name].js',\n    path: __dirname + '/dist',\n    publicPath: 'http://cdn.com.cn',\n  }\n};\n\n// 写入到硬盘：./dist/app.js, ./dist/search.js\n\n")])])]),t("p",[t("code",[e._v("publicPath")]),e._v(" 支持文件路径使用 cdn 地址")]),e._v(" "),t("h2",{attrs:{id:"devtool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devtool"}},[e._v("#")]),e._v(" Devtool")]),e._v(" "),t("p",[t("code",[e._v("sourceMap")]),e._v("可以将打包后的代码与原代码做具体到行和列的映射(mapping),从而便于开发者查询问题和 debug, "),t("code",[e._v("Devtool")]),e._v("属性可以选择生成"),t("code",[e._v("sourceMap")]),e._v("的方式")]),e._v(" "),t("p",[t("code",[e._v("sourceMap")]),e._v("有多种生成模式，各种模式可以自由组合，来满足各种环境下的需求 模式是"),t("code",[e._v("[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("inline-")]),e._v(" source map 转换为 DataUrl 后添加到 bundle 中")]),e._v(" "),t("li",[t("code",[e._v("clean-")]),e._v(" 没有列映射(column mapping)的 source map，可以提升构建速度")]),e._v(" "),t("li",[t("code",[e._v("eval-")]),e._v(" 每个模块使用 eval() 执行，并且 source map 转换为 DataUrl 后添加到 eval() 中")]),e._v(" "),t("li",[t("code",[e._v("module-")]),e._v(" 源自 loader 的 "),t("code",[e._v("source map")]),e._v(" 会得到更好的处理结果")])]),e._v(" "),t("h3",{attrs:{id:"最佳实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[e._v("#")]),e._v(" 最佳实践")]),e._v(" "),t("ul",[t("li",[e._v("开发环境下 "),t("code",[e._v("development")]),e._v("使用 "),t("code",[e._v("cheap-module-eval-source-map")]),e._v("，可以兼顾打包效率和精确度")]),e._v(" "),t("li",[e._v("生产环境下 "),t("code",[e._v("production")]),e._v(" 使用 "),t("code",[e._v("cheap-module-source-map")]),e._v("，提升精确度")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://webpack.docschina.org/configuration/devtool/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多关于 devtool 内容参考"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"devserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devserver"}},[e._v("#")]),e._v(" devServer")]),e._v(" "),t("p",[e._v("在每次编译代码时，手动运行 "),t("code",[e._v("npm run build")]),e._v(" 会显得很麻烦。")]),e._v(" "),t("p",[t("code",[e._v("webpack-dev-server")]),e._v("会开启一个服务器，打开一个端口，可以帮助你在代码发生变化后自动编译代码。")]),e._v(" "),t("p",[e._v("webpack 没有提供自带的工具，我们需要自己安装")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  npm install --save-dev webpack-dev-server\n")])])]),t("p",[e._v("以下配置告知 "),t("code",[e._v("webpack-dev-server")]),e._v("，将 dist 目录下的文件 serve 到 localhost:9000 下。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   devServer: {\n\t\tcontentBase: path.join(__dirname, 'dist'),\n\t\tcompress: true,\n\t\tport: 9000,\n\t\topen: true\n\t},\n")])])]),t("h3",{attrs:{id:"转发代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转发代理"}},[e._v("#")]),e._v(" 转发代理")]),e._v(" "),t("p",[e._v("当拥有单独的 API 后端开发服务器并且希望在同一域上发送 API 请求时，我们可以使用"),t("code",[e._v("webpack-dev-server")]),e._v("对请求转发进行代理。")]),e._v(" "),t("p",[e._v("使用后端在 "),t("code",[e._v("localhost:3000")]),e._v(" 上，可以使用它来启用代理")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   module.exports = {\n        devServer: {\n            proxy: {\n            '/api': 'http://localhost:3000'\n            }\n        }\n    };\n")])])]),t("p",[e._v("现在，对 "),t("code",[e._v("/api/users")]),e._v(" 的请求会将请求代理到 "),t("code",[e._v("http://localhost:3000/api/users")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"实现一个简易的-webpackserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现一个简易的-webpackserver"}},[e._v("#")]),e._v(" 实现一个简易的 webpackserver")]),e._v(" "),t("p",[e._v("同样我们可以使用"),t("code",[e._v("webpack-dev-middleware")]),e._v("和"),t("code",[e._v("express")]),e._v("来自己编写一个，简单的"),t("code",[e._v("webpack-dev-server")]),e._v("。")]),e._v(" "),t("p",[e._v("新建一个 "),t("code",[e._v("server.js")]),e._v("文件，然后执行"),t("code",[e._v("node server.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    const express = require('express');\n    const webpack = require('webpack');\n    const webpackDevMiddleware = require('webpack-dev-middleware');\n\n    const app = express();\n    const config = require('./webpack.config.js');\n    const compiler = webpack(config);\n\n    // 告知 express 使用 webpack-dev-middleware，\n    // 以及将 webpack.config.js 配置文件作为基础配置。\n    app.use(\n    webpackDevMiddleware(compiler, {\n        publicPath: config.output.publicPath,\n    })\n    );\n\n    // 将文件 serve 到 port 3000。\n    app.listen(3000, function () {\n    console.log('Example app listening on port 3000!\\n');\n    });\n")])])]),t("p",[e._v("更多 "),t("a",{attrs:{href:"https://webpack.docschina.org/configuration/dev-server/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-dev-server 配置"),t("OutboundLink")],1),e._v(" 参考")]),e._v(" "),t("h2",{attrs:{id:"解析-resolve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析-resolve"}},[e._v("#")]),e._v(" 解析 resolve")]),e._v(" "),t("p",[e._v("这些选项能设置模块如何被解析。webpack 提供合理的默认值，但是还是可能会修改一些解析的细节。")]),e._v(" "),t("p",[t("code",[e._v("resolve.alias")]),e._v("为 reslove 常用属性。创建 import 或 require 的别名，来确保模块引入变得更简单")]),e._v(" "),t("p",[e._v("例如，一些位于 src/ 文件夹下的常用模块：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    const path = require('path');\n\n    module.exports = {\n\n    resolve: {\n        alias: {\n        Utilities: path.resolve(__dirname, 'src/utilities/'),\n        Templates: path.resolve(__dirname, 'src/templates/'),\n        },\n    },\n    };\n")])])]),t("p",[e._v("可以这样使用别名")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  import Utility from 'Utilities/utility';\n")])])]),t("p",[t("a",{attrs:{href:"https://webpack.docschina.org/configuration/resolve/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多 resolve 参考"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"热模块替换-hmr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热模块替换-hmr"}},[e._v("#")]),e._v(" 热模块替换 hmr")]),e._v(" "),t("p",[e._v("**模块热替换(HMR - hot module replacement)**功能会在应用程序运行过程中，替换、添加或删除 模块，而无需重新加载整个页面。")]),e._v(" "),t("h3",{attrs:{id:"hrm-作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hrm-作用"}},[e._v("#")]),e._v(" hrm 作用")]),e._v(" "),t("ul",[t("li",[e._v("保留在完全重新加载页面期间丢失的应用程序状态。")]),e._v(" "),t("li",[e._v("只更新变更内容，以节省宝贵的开发时间。")]),e._v(" "),t("li",[e._v("在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。")])]),e._v(" "),t("h3",{attrs:{id:"hrm-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hrm-使用"}},[e._v("#")]),e._v(" hrm 使用")]),e._v(" "),t("p",[t("code",[e._v("webpack")]),e._v(" 配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    devServer: {\n\t\tcontentBase: path.join(__dirname, 'dist'),\n\t\tport: 9000,\n\t\topen: true,\n\n\t\thot: true,\n\t\thotOnly: true\n\t}\n")])])]),t("p",[e._v("当更新 js 文件时，可以在 js 文件中添加如下方法，实现某个模块的热替换")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    if (module.hot) {\n        module.hot.accept('./print.js', function() {\n            printMe();\n        })\n    }\n")])])]),t("p",[e._v("当更新 css 文件时，"),t("code",[e._v("style-loader")]),e._v("帮我们自动完成了热替换；当它通过 HMR 接收到更新，它会使用新的样式替换旧的样式。")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://webpack.docschina.org/concepts/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer"}},[e._v("模块热替换(hot module replacement)"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://webpack.docschina.org/api/hot-module-replacement/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hot Module Replacement API"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel"}},[e._v("#")]),e._v(" babel")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("babel")]),e._v("对 js 文件进行转化，是的 ES6 语法变成各个浏览器能够识别的语法")]),e._v(" "),t("p",[e._v("webpack 引入"),t("code",[e._v("babel-loader")]),e._v(", 并且新建"),t("code",[e._v(".babelrc")]),e._v("文件对 babel 进行配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    module: {\n\t\trules: [{\n\t\t\ttest: /\\.js$/,\n\t\t\texclude: /node_modules/,\n\t\t\tloader: 'babel-loader',\n\t\t}]\n    }\n")])])]),t("p",[e._v("如果对 react 项目进行打包，需用使用"),t("code",[e._v("@babel/preset-react")]),e._v("对文件进行处理，是的"),t("code",[e._v("jsx")]),e._v("格式语法能够被翻译")]),e._v(" "),t("p",[e._v("更多参考"),t("a",{attrs:{href:"https://babeljs.io/setup#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel 文档"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);