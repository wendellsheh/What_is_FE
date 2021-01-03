(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{389:function(e,r,a){"use strict";a.r(r);var t=a(27),o=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-实例应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-实例应用"}},[e._v("#")]),e._v(" webpack 实例应用")]),e._v(" "),a("h2",{attrs:{id:"打包-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-library"}},[e._v("#")]),e._v(" 打包 library")]),e._v(" "),a("p",[e._v("webpack 除了可以打包一个业务项目应用程序，还可以打包一些类库"),a("code",[e._v("library")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"暴露-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暴露-library"}},[e._v("#")]),e._v(" 暴露 library")]),e._v(" "),a("p",[e._v("当我们打包"),a("code",[e._v("library")]),e._v("时，我们希望使用者有多种方式可以引用它，例如"),a("code",[e._v("ES2015 module import")]),e._v(", "),a("code",[e._v("Commonjs Module require")]),e._v(", "),a("code",[e._v("AMD Module require")]),e._v(", "),a("code",[e._v("script标签")]),e._v("等引用方法，，需要在 output 中添加 "),a("code",[e._v("library")]),e._v("和"),a("code",[e._v("libraryTarget")]),e._v(" 属性。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    output: {\n        path: path.resolve(__dirname, 'dist'),\n        filename: 'libary.js',\n        library: 'root',\n        libraryTarget: 'umd' // this/window/global\n    }\n")])])]),a("p",[e._v("当"),a("code",[e._v("libraryTarget")]),e._v("配置成'umd'时，将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/configuration/output/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多关于 libraryTarget 和 library 参考"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"将公用库-externals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将公用库-externals"}},[e._v("#")]),e._v(" 将公用库 externals")]),e._v(" "),a("p",[e._v("有时如果执行 "),a("code",[e._v("webpack")]),e._v("，你会发现创建了一个体积相当大的文件。如果你查看这个文件，会看到公用库如 "),a("code",[e._v("lodash")]),e._v(" 也被打包到代码中。在这种场景中，我们更倾向于把 "),a("code",[e._v("lodash")]),e._v(" 当作 "),a("code",[e._v("peerDependency")]),e._v("。也就是说，用户应该已经安装过 "),a("code",[e._v("lodash")]),e._v("。这是可以使用"),a("code",[e._v("externals")]),e._v("来配置。")]),e._v(" "),a("p",[e._v("具有外部依赖(external dependency)的 bundle 可以在各种模块上下文(module context)中使用，例如 CommonJS, AMD, 全局变量和 ES2015 模块。外部 library 可能是以下任何一种形式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    externals: {\n        lodash: {\n            commonjs: 'lodash',\n            commonjs2: 'lodash',\n            amd: 'lodash',\n            root: '_'\n        }\n    }\n")])])]),a("ul",[a("li",[a("strong",[e._v("root")]),e._v("：可以通过一个全局变量访问 "),a("code",[e._v("library")]),e._v("（例如，通过 script 标签）。")]),e._v(" "),a("li",[a("strong",[e._v("commonjs")]),e._v("：可以将 "),a("code",[e._v("library")]),e._v(" 作为一个 "),a("code",[e._v("CommonJS")]),e._v(" 模块访问。")]),e._v(" "),a("li",[a("strong",[e._v("commonjs2")]),e._v("：和上面的类似，但导出的是 "),a("code",[e._v("module.exports.default")]),e._v("。")]),e._v(" "),a("li",[a("strong",[e._v("amd")]),e._v("：类似于 "),a("code",[e._v("commonjs")]),e._v("，但使用 AMD 模块系统")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多关于 externals 的参考"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://webpack.docschina.org/guides/author-libraries/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多关于 library 库打包参考"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"打包-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-typescript"}},[e._v("#")]),e._v(" 打包 Typescript")]),e._v(" "),a("p",[a("code",[e._v("TypeScript")]),e._v(" 是 "),a("code",[e._v("JavaScript")]),e._v(" 的超集，为其增加了类型系统，可以编译为普通 "),a("code",[e._v("JavaScript")]),e._v(" 代码。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("ts-loader")]),e._v(" 对 tsx 文件进行打包")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    module: {\n      rules: [\n        {\n          test: /\\.tsx?$/,\n          use: 'ts-loader',\n          exclude: /node_modules/\n        }\n      ]\n    }\n")])])]),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/typescript/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多 typescript 参考"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"打包-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包-pwa"}},[e._v("#")]),e._v(" 打包 PWA")]),e._v(" "),a("p",[e._v("渐进式网络应用程序("),a("code",[e._v("progressive web application - PWA")]),e._v(")，是一种可以提供类似于 native app(原生应用程序) 体验的 web app(网络应用程序)。PWA 可以用来做很多事。其中最重要的是，在离线("),a("code",[e._v("offline")]),e._v(")时应用程序能够继续运行功能。这是通过使用名为 "),a("code",[e._v("Service Workers")]),e._v(" 的 web 技术来实现的。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("workbox-webpack-plugin")]),e._v("可以实现 PWA 功能。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    // plugins 配置\n    new WorkboxPlugin.GenerateSW({\n       // 这些选项帮助快速启用 ServiceWorkers\n       // 不允许遗留任何“旧的” ServiceWorkers\n       clientsClaim: true,\n       skipWaiting: true,\n     })\n")])])]),a("p",[e._v("这是打包会发现生成一个"),a("code",[e._v("service-worker.js")]),e._v("文件，接下来我们注册 Service Worker")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  if ('serviceWorker' in navigator) {\n   window.addEventListener('load', () => {\n     navigator.serviceWorker.register('/service-worker.js').then(registration => {\n       console.log('SW registered: ', registration);\n     }).catch(registrationError => {\n       console.log('SW registration failed: ', registrationError);\n     });\n   });\n }\n\n")])])]),a("p",[e._v("接下来我们停止 "),a("code",[e._v("server")]),e._v(" 并刷新页面，我们会发现依然可以访问到页面。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/progressive-web-application/",target:"_blank",rel:"noopener noreferrer"}},[e._v("更多关于 pwa 打包"),a("OutboundLink")],1),e._v("参考")]),e._v(" "),a("h2",{attrs:{id:"打包单页面应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包单页面应用"}},[e._v("#")]),e._v(" 打包单页面应用")]),e._v(" "),a("p",[e._v("当使用"),a("code",[e._v("react-router-dom")]),e._v(" 的 "),a("code",[e._v("BrowserRouter")]),e._v("的路由使用单页面应用时，开发时需要将"),a("code",[e._v("devServer")]),e._v("的"),a("code",[e._v("historyApiFallback")]),e._v("设置为 "),a("code",[e._v("true")]),e._v("，否则将路由将无法跳转，生产环境下需要后端做 "),a("code",[e._v("nignx")]),e._v(" 配置")])])}),[],!1,null,null,null);r.default=o.exports}}]);