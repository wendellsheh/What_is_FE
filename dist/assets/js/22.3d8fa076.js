(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{388:function(e,s,t){"use strict";t.r(s);var a=t(27),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"css-单位中-px-和-em-rem-的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-单位中-px-和-em-rem-的区别"}},[e._v("#")]),e._v(" css 单位中 px 和 em,rem 的区别")]),e._v(" "),t("h2",{attrs:{id:"px-绝对长度单位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#px-绝对长度单位"}},[e._v("#")]),e._v(" px（绝对长度单位）")]),e._v(" "),t("p",[e._v("相信对于前端来说 px 这个单位是大家并不陌生，px 这个单位，兼容性可以说是相当可以，大家对 px 的了解肯定是没有很大的问题的。")]),e._v(" "),t("h2",{attrs:{id:"em-相对长度单位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#em-相对长度单位"}},[e._v("#")]),e._v(" em（相对长度单位）")]),e._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("浏览器的默认字体都是 16px，那么 1em=16px，以此类推计算 12px=0.75em，10px=0.625em，2em=32px；")])]),e._v(" "),t("li",[t("p",[e._v("这样使用很复杂，很难很好的与 px 进行对应,也导致书写、使用、视觉的复杂(0.75em、0.625em 全是小数点)；")])]),e._v(" "),t("li",[t("p",[e._v("为了简化 font-size 的换算，我们在 body 中写入一下代码")])])]),e._v(" "),t("p",[e._v("body {font-size: 62.5%; } /* 公式 16px*62.5%=10px */")]),e._v(" "),t("p",[e._v("这样页面中 1em=10px,1.2em=12px,1.4em=14px,1.6em=16px，使得视觉、使用、书写都得到了极大的帮助。")]),e._v(" "),t("p",[e._v("例子如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<div class=\"font1\" style='font-size:1.6em'>我是1.6em</div>\n")])])]),t("p",[e._v("运行效果为：")]),e._v(" "),t("p",[t("img",{attrs:{src:"em_16.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点：")]),e._v(" "),t("p",[e._v("1、em 的值并不是固定的；")]),e._v(" "),t("p",[e._v("2、em 会继承父级元素的字体大小（参考物是父元素的 font-size；）；")]),e._v(" "),t("p",[e._v("3、em 中所有的字体都是相对于父元素的大小决定的；所以如果一个设置了 font-size:1.2em 的元素在另一个设置了 font-size:1.2em 的元素里，而这个元素又在另一个设置了 font-size:1.2em 的元素里，那么最后计算的结果是 1.2X1.2X1.2=1.728em")]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div class="big">\n    我是大字体\n   <div class="small">我是小字体</div>\n</div>\n样式为\n\n<style>\n     body {font-size: 62.5%; } /*  公式:16px*62.5%=10px  */\n    .big{font-size: 1.2em}\n    .small{font-size: 1.2em}\n</style>\n')])])]),t("p",[e._v("但运行结果 small 的字体大小为：1.2em*1.2em=1.44em")]),e._v(" "),t("p",[e._v("如图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"em_14.png",alt:""}})]),e._v(" "),t("p",[e._v("*宽度高度也是同理")]),e._v(" "),t("h2",{attrs:{id:"rem-相对长度单位"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rem-相对长度单位"}},[e._v("#")]),e._v(" rem（相对长度单位）")]),e._v(" "),t("h3",{attrs:{id:"使用-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-2"}},[e._v("#")]),e._v(" 使用：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("浏览器的默认字体都是 16px，那么 1rem=16px，以此类推计算 12px=0.75rem，10px=0.625rem，2rem=32px；")])]),e._v(" "),t("li",[t("p",[e._v("这样使用很复杂，很难很好的与 px 进行对应,也导致书写、使用、视觉的复杂(0.75rem、0.625em 全是小数点) ；")])]),e._v(" "),t("li",[t("p",[e._v("为了简化 font-size 的换算，我们在根元素 html 中加入 font-size: 62.5%;")])])]),e._v(" "),t("p",[e._v("html {font-size: 62.5%; } /* 公式 16px*62.5%=10px */"),t("br"),e._v("\n这样页面中 1rem=10px,1.2rem=12px,1.4rem=14px,1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助；")]),e._v(" "),t("p",[e._v("例子如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<div class=\"font1\" style='font-size:1.6rem'>我是1.6rem=16px</div>\n")])])]),t("p",[e._v("运行效果为：")]),e._v(" "),t("p",[t("img",{attrs:{src:"rem_16.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" 特点：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("rem 单位可谓集相对大小和绝对大小的优点于一身")])]),e._v(" "),t("li",[t("p",[e._v("和 em 不同的是 rem 总是相对于根元素(如:root{})，而不像 em 一样使用级联的方式来计算尺寸。这种相对单位使用起来更简单。")])]),e._v(" "),t("li",[t("p",[e._v("rem 支持 IE9 及以上，意思是相对于根元素 html（网页），不会像 em 那样，依赖于父元素的字体大小，而造成混乱。使用起来安全了很多。")])])]),e._v(" "),t("p",[e._v("例如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div class="big">\n    我是14px=1.4rem<div class="small">我是12px=1.2rem</div>\n</div>\n样式为：\n\n<style>\n    html {font-size: 10px;  } /*  公式16px*62.5%=10px  */\n    .big{font-size: 1.4rem}\n    .small{font-size: 1.2rem}\n</style>\n')])])]),t("p",[e._v("运行结果：")]),e._v(" "),t("p",[t("img",{attrs:{src:"rem_14.png",alt:""}})]),e._v(" "),t("p",[e._v("注意：")]),e._v(" "),t("p",[e._v("值得注意的浏览器支持问题： IE8，Safari 4 或 iOS 3.2 中不支持 rem 单位。\n如果你的用户群都使用最新版的浏览器，那推荐使用 rem，如果要考虑兼容性，那就使用 px,或者两者同时使用。")])])}),[],!1,null,null,null);s.default=r.exports}}]);