(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{385:function(e,v,l){"use strict";l.r(v);var t=l(27),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,l=e._self._c||v;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"creactreactapp-webapck-配置分析"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#creactreactapp-webapck-配置分析"}},[e._v("#")]),e._v(" creactReactApp webapck 配置分析")]),e._v(" "),l("p",[l("code",[e._v("creactReactApp")]),e._v("是最流行的"),l("code",[e._v("React")]),e._v("脚手架工具,可以满足各种不同的需求项目的开发和打包， 通过阅读学习"),l("code",[e._v("creactReactApp")]),e._v("这种脚手架项目"),l("code",[e._v("webpack")]),e._v("配置，可以更多的了解到关于"),l("code",[e._v("webpack")]),e._v("的一些细节和深层次的东西，并且学会了如何配置大型项目的"),l("code",[e._v("wepbapck")]),e._v("。")]),e._v(" "),l("p",[e._v("执行"),l("code",[e._v("npm run eject")]),e._v("之后目录生成"),l("code",[e._v("scripts")]),e._v("和"),l("code",[e._v("config")]),e._v("两个文件家，"),l("code",[e._v("scripts")]),e._v("文件夹包含"),l("code",[e._v("npm")]),e._v("命令文件，"),l("code",[e._v("config")]),e._v("文件夹则是"),l("code",[e._v("webpack")]),e._v("配置相关的文件。")]),e._v(" "),l("p",[l("code",[e._v("config")]),e._v("文件夹下包含以下文件和具体作用")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[e._v("├── env.js // 获取环境变量\n├── getHttpsConfig.js // 获取 Https 配置\n├── modules.js // 获取 alias 等\n├── paths.js // 获取路径信息\n├── pnpTs.js // pnp 加速\n├── webpack.config.js // webpack 配置\n└── webpackDevServer.config.js // devserver 配置\n")])])]),l("h2",{attrs:{id:"思维导图"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#思维导图"}},[e._v("#")]),e._v(" 思维导图")]),e._v(" "),l("p",[e._v("webpack 开发模式"),l("code",[e._v("delvploment")]),e._v("和生产模式"),l("code",[e._v("production")]),e._v("很多配置是不一样的，"),l("code",[e._v("creactReactApp")]),e._v("没有像常规的做法分为"),l("code",[e._v("common")]),e._v(","),l("code",[e._v("dev")]),e._v(","),l("code",[e._v("prd")]),e._v("三个配置文件进行打包，而是将所有环境配置都写在一个文件中。为方便分析，提取了不同环境相同和不同配置做成思维导图")]),e._v(" "),l("p",[l("img",{attrs:{src:"/create-react-app+webpack%E9%85%8D%E7%BD%AE.svg",alt:""}})]),e._v(" "),l("h2",{attrs:{id:"配置详解"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#配置详解"}},[e._v("#")]),e._v(" 配置详解")]),e._v(" "),l("h3",{attrs:{id:"mode"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[e._v("#")]),e._v(" mode")]),e._v(" "),l("ul",[l("li",[e._v("dev\n"),l("ul",[l("li",[e._v("develop // 开发模式，不进行优化提升开发效率")])])]),e._v(" "),l("li",[e._v("prd\n"),l("ul",[l("li",[e._v("production // 生产模式，默认开启代码优化")])])])]),e._v(" "),l("h3",{attrs:{id:"bail"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#bail"}},[e._v("#")]),e._v(" bail")]),e._v(" "),l("p",[e._v("在第一个错误出现时抛出失败结果，而不是容忍它，会导致打包退出")]),e._v(" "),l("ul",[l("li",[e._v("dev\n"),l("ul",[l("li",[e._v("默认值 false")])])]),e._v(" "),l("li",[e._v("prd\n"),l("ul",[l("li",[e._v("true")])])])]),e._v(" "),l("h3",{attrs:{id:"devtool"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#devtool"}},[e._v("#")]),e._v(" devtool")]),e._v(" "),l("ul",[l("li",[e._v("dev\n"),l("ul",[l("li",[e._v("cheap-module-source-map 没有列信息不包含 loader 的 sourcemap")])])]),e._v(" "),l("li",[e._v("prd\n"),l("ul",[l("li",[e._v("source-map")])])])]),e._v(" "),l("h3",{attrs:{id:"entry"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[e._v("#")]),e._v(" entry")]),e._v(" "),l("ul",[l("li",[e._v("common\n"),l("ul",[l("li",[e._v("${appIndexJs} 代码入口")])])]),e._v(" "),l("li",[e._v("dev\n"),l("ul",[l("li",[e._v("${appIndexJs} 代码入口")]),e._v(" "),l("li",[e._v("react-dev-utils/webpackHotDevClient // 解决模块热更新 websocket 可能出现的问题")])])])]),e._v(" "),l("h3",{attrs:{id:"output"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[e._v("#")]),e._v(" output")]),e._v(" "),l("ul",[l("li",[e._v("common\n"),l("ul",[l("li",[e._v("publicPath: ${publicUrlOrPath} // 可以放置 cdn 地址")]),e._v(" "),l("li",[e._v("jsonpFunction")]),e._v(" "),l("li",[e._v("globalObject: 'this' // 决定使用哪个全局对象来挂载 library")]),e._v(" "),l("li",[e._v("devtoolModuleFilenameTemplate // 从硬盘上获取依赖的具体位置，来帮助调错")])])]),e._v(" "),l("li",[e._v("dev\n"),l("ul",[l("li",[e._v("path: undefined // 打包进入内存")]),e._v(" "),l("li",[e._v("pathInfo: true // bundle 中引入「所包含模块信息」的相关注释")]),e._v(" "),l("li",[e._v("filename: static/js/bundle.js // 文件名")]),e._v(" "),l("li",[e._v("chunkFilename: static/js/[name].bundle.js // 非入口 chunk 文件的名称")])])]),e._v(" "),l("li",[e._v("prd\n"),l("ul",[l("li",[e._v("path: ${appBuildPath} // 目标输出目录 path 的绝对路径")]),e._v(" "),l("li",[e._v("filename: static/js/[name].[contenthash:8].js // 文件名")]),e._v(" "),l("li",[e._v("chunkFilename: static/js/[name].[contenthash:8].chunk.js // 非入口 chunk 文件的名称")])])])]),e._v(" "),l("h3",{attrs:{id:"resolve"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#resolve"}},[e._v("#")]),e._v(" resolve")]),e._v(" "),l("ul",[l("li",[e._v("common\n"),l("ul",[l("li",[e._v("alias // 别名")]),e._v(" "),l("li",[e._v("extensions // 自动解析确定的扩展")]),e._v(" "),l("li",[e._v("modules // webpack 解析模块时应该搜索的目录")]),e._v(" "),l("li",[e._v("plugins\n"),l("ul",[l("li",[e._v("ModuleScopePlugin // 限制自己编写的模块只能从 src 引入")]),e._v(" "),l("li",[e._v("PnpWebpackPlugin //")])])])])])]),e._v(" "),l("h3",{attrs:{id:"resolveloader"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#resolveloader"}},[e._v("#")]),e._v(" resolveLoader")]),e._v(" "),l("p",[e._v("引入 loader 时才会执行")]),e._v(" "),l("h3",{attrs:{id:"optimization"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#optimization"}},[e._v("#")]),e._v(" optimization")]),e._v(" "),l("ul",[l("li",[e._v("prd\n"),l("ul",[l("li",[e._v("minimize: true // 是否压缩， 线上环境压缩")]),e._v(" "),l("li",[e._v("minimizer\n"),l("ul",[l("li",[e._v("TerserPlugin // 压缩 js")]),e._v(" "),l("li",[e._v("OptimizeCSSAssetsPlugin // 优化压缩 css")])])]),e._v(" "),l("li",[e._v("splitChunks // 用于 code-splitting 代码拆分\n"),l("ul",[l("li",[e._v("chunks: all //动态和非动态模块同时进行优化打包")]),e._v(" "),l("li",[e._v("name: false")])])]),e._v(" "),l("li",[e._v("runtimeChunk // 把 runtime 模块的代码单独打包\n"),l("ul",[l("li",[e._v("name: entrypoint => runtime-${entrypoint.name}")])])])])])]),e._v(" "),l("h3",{attrs:{id:"module"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#module"}},[e._v("#")]),e._v(" module")]),e._v(" "),l("ul",[l("li",[e._v("common\n"),l("ul",[l("li",[e._v("strictExportPresence // 引入模块必须明确导出自己的内容")])])]),e._v(" "),l("li",[e._v("rules\n"),l("ul",[l("li",[e._v("js|mjs|jsx|ts|tsx 先进行 eslint 语法检测")]),e._v(" "),l("li",[e._v("/.bmp/, /.gif/, /.jpe?g/, /.png/ url-loader 解析")]),e._v(" "),l("li",[e._v("js|mjs|jsx|ts|tsx babel-loader，cacheDirectory: true 开启缓存")]),e._v(" "),l("li",[e._v("/.css$/ style-loader MiniCssExtractPlugin css-loader postcss-loader")]),e._v(" "),l("li",[e._v("/.module.css$/ 开启 cssmodule")]),e._v(" "),l("li",[e._v("同时也支持 sass 和 sassmodule")])])])]),e._v(" "),l("h3",{attrs:{id:"plugins"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[e._v("#")]),e._v(" plugins")]),e._v(" "),l("ul",[l("li",[l("p",[e._v("common")]),e._v(" "),l("ul",[l("li",[e._v("HtmlWebpackPlugin //打包到 Html 中")]),e._v(" "),l("li",[e._v("InterpolateHtmlPlugin // 允许在 html 中加入变量")]),e._v(" "),l("li",[e._v("ModuleNotFoundPlugin // 找不到 module 提示")]),e._v(" "),l("li",[e._v("DefinePlugin // 定义变量")]),e._v(" "),l("li",[e._v("ManifestPlugin // 资源映射文件")]),e._v(" "),l("li",[e._v("IgnorePlugin // 忽略掉某些包")]),e._v(" "),l("li",[e._v("ForkTsCheckerWebpackPlugin // Ts 类型检测")])])]),e._v(" "),l("li",[l("p",[e._v("dev")]),e._v(" "),l("ul",[l("li",[e._v("HotModuleReplacementPlugin // 热更新")]),e._v(" "),l("li",[e._v("CaseSensitivePathsPlugin // 路径区分大小写")]),e._v(" "),l("li",[e._v("WatchMissingNodeModulesPlugin // npm install 后不需要重新 restart")])])]),e._v(" "),l("li",[l("p",[e._v("prd")]),e._v(" "),l("ul",[l("li",[e._v("MiniCssExtractPlugin // 将 css 提取到单独的文件")]),e._v(" "),l("li",[e._v("WorkboxWebpackPlugin // pwa 开启 servicework")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);