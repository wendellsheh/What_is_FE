(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{400:function(e,t,n){"use strict";n.r(t);var a=n(27),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue-数据响应式原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-数据响应式原理"}},[e._v("#")]),e._v(" vue 数据响应式原理")]),e._v(" "),n("h2",{attrs:{id:"什么是数据响应式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据响应式"}},[e._v("#")]),e._v(" 什么是数据响应式")]),e._v(" "),n("p",[e._v("Vue.js 一个核心思想是"),n("strong",[e._v("数据驱动")]),e._v("。所谓数据驱动，是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。")]),e._v(" "),n("p",[e._v("为实现数据驱动，需要将数据变成"),n("strong",[e._v("响应式")]),e._v("的，数据模型仅仅是普通的 javascript 对象，而当我们修改数据时，视图会进行更新，避免 DOM 操作，提高开发效率。")]),e._v(" "),n("p",[e._v("与 React 的"),n("strong",[e._v("单项数据流不同")]),e._v("，Vue 实现了"),n("strong",[e._v("双向绑定")]),e._v("即数据改变，视图改变；视图改变，数据也随之改变。可以使用 "),n("code",[e._v("v-modal")]),e._v(" 在表单元素上创建双向数据绑定。")]),e._v(" "),n("h2",{attrs:{id:"响应式核心原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式核心原理"}},[e._v("#")]),e._v(" 响应式核心原理")]),e._v(" "),n("p",[e._v("根据官方文档"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入响应式原理"),n("OutboundLink")],1),e._v("的解释，在 Vue2.x 中，当你把一个普通的 JavaScript 对象传入 Vue 实例作为 "),n("code",[e._v("data")]),e._v(" 选项，Vue 将遍历此对象所有的 property，并使用 "),n("code",[e._v("Object.defineProperty")]),e._v(" 把这些 property 全部转为 "),n("code",[e._v("getter/setter")]),e._v("。")]),e._v(" "),n("p",[e._v("代码模拟")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 模拟 Vue 中的 data 选项\nlet data = {\n  msg: 'hello',\n  count: 10\n}\n\n// 模拟 Vue 的实例\nlet vm = {}\n\nproxyData(data)\n\nfunction proxyData(data) {\n  // 遍历 data 对象的所有属性\n  Object.keys(data).forEach(key => {\n    // 数据劫持：当访问或者设置 vm 中的成员的时候，做一些干预操作\n    // 把 data 中的属性，转换成 vm 的 setter/setter\n    Object.defineProperty(vm, key, {\n      // 可枚举（可遍历）\n      enumerable: true,\n      // 可配置（可以使用 delete 删除，可以通过 defineProperty 重新定义）\n      configurable: true,\n      // 当获取值的时候执行\n      get () {\n        console.log('get: ', key, data[key])\n        return data[key]\n      },\n      // 当设置值的时候执行\n      set (newValue) {\n        console.log('set: ', key, newValue)\n        if (newValue === data[key]) {\n          return\n        }\n        data[key] = newValue\n        // 数据更改，更新 DOM 的值\n        document.querySelector('#app').textContent = data[key]\n      }\n    })\n  })\n}\n\n// 测试\nvm.msg = 'Hello World'\nvm.count = '9'\nconsole.log(vm.msg)  // 'Hello World'\nconsole.log(data.msg) // 'Hello World'\n")])])]),n("p",[e._v("在 vue3.0 中则使用"),n("code",[e._v("proxy")]),e._v("代替"),n("code",[e._v("Object.defineProperty")]),e._v("进行数据劫持，直接监听对象，而非属性，所以不用遍历对象。"),n("code",[e._v("proxy")]),e._v("是 ES 6 中新增的特性，性能由浏览器优化，所以比"),n("code",[e._v("Object.defineProperty")]),e._v("更快一点。更多关于"),n("code",[e._v("proxy")]),e._v("的介绍参考"),n("a",{attrs:{href:"https://what-is-fe.licop.cn/syntax&API/ES%E8%AF%AD%E6%B3%95/ECMAScript%202015%20%E8%AF%AD%E6%B3%95.html#proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("代码模拟")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 模拟 Vue 中的 data 选项\nlet data = {\n  msg: 'hello',\n  count: 0\n}\n\n// 模拟 Vue 实例\nlet vm = new Proxy(data, {\n  // 执行代理行为的函数\n  // 当访问 vm 的成员会执行\n  get (target, key) {\n    console.log('get, key: ', key, target[key])\n    return target[key]\n  },\n  // 当设置 vm 的成员会执行\n  set (target, key, newValue) {\n    console.log('set, key: ', key, newValue)\n    if (target[key] === newValue) {\n      return\n    }\n    target[key] = newValue\n    document.querySelector('#app').textContent = target[key]\n  }\n})\n\n// 测试\nvm.msg = 'Hello World'\nconsole.log(vm.msg)\n")])])]),n("h2",{attrs:{id:"发布订阅模式和观察者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅模式和观察者模式"}},[e._v("#")]),e._v(" 发布订阅模式和观察者模式")]),e._v(" "),n("p",[n("strong",[e._v("什么是发布订阅模式？")])]),e._v(" "),n("p",[e._v('我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"(publish)一个信号，其他任务可以向信号中心"订阅"(subscribe)这个信号，从而知道什么时候自己可以开始执行。这就叫做 '),n("strong",[e._v('"发布/订阅模式"(publish-subscribe pattern)')])]),e._v(" "),n("p",[e._v("vue 中的兄弟组件通信过程就是发布订阅模式, B 组件向消息中心"),n("strong",[e._v("订阅")]),e._v("了"),n("code",[e._v("add-todo")]),e._v("信号，并注册了执行函数"),n("code",[e._v("this.addTodo")]),e._v(",然后在 A 组件中"),n("strong",[e._v("发布")]),n("code",[e._v("add-todo")]),e._v("信号，并传递了参数，B 组件通过事件中心"),n("code",[e._v("eventHub")]),e._v("接收到信号，然后开始执行"),n("code",[e._v("this.addTodo")]),e._v("接受 A 组件传递过来的参数，完成组件件的通信。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// eventBus.js\n// 事件中心\nlet eventHub = new Vue()\n\n// ComponentA.vue\n// 发布者\naddTodo: function () {\n  // 发布消息(事件)\n  eventHub.$emit('add-todo', { text: this.newTodoText })\n  this.newTodoText = ''\n}\n\n// ComponentB.vue\n// 订阅者\ncreated: function () {\n  // 订阅消息(事件)\n  eventHub.$on('add-todo', this.addTodo)\n}\n")])])]),n("p",[e._v("代码实现事件中心，实现发布订阅机制")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 事件触发器\nclass EventEmitter {\n  constructor() {\n    // { eventType: [ handler1, handler2 ] }\n    this.subs = Object.create(null)\n  }\n  // 注册事件\n  $on(eventTpye, handler) {\n    this.subs[eventTpye] = this.subs[eventTpye] || [];\n    this.subs[eventTpye].push(handler)\n  }\n  // 触发事件\n  $emit() {\n    // 第一个参数是对应的 event 值，直接用数组的 shift 方法取出\n    let eventTpye = [].shift.call(arguments);\n    if(this.subs[eventTpye]) {\n      this.subs[eventTpye].forEach(handler => {\n        handler.apply(this, arguments)\n      })\n    }\n  }\n}\n\nconst em = new EventEmitter()\n\nem.$on('click', () => {\n  console.log('click 1')\n})\nem.$on('click', (content) => {\n  console.log('click 2', content)\n})\nem.$emit('click', 'emit')\n")])])]),n("p",[n("strong",[e._v("什么是观察者模式？")])]),e._v(" "),n("p",[e._v("我们假设你正在找一份软件工程师的工作，对“香蕉公司”很感兴趣。所以你联系了他们的 HR，给了他你的联系电话。他保证如果有任何职位空缺都会通知你。这里还有几个候选人也你一样很感兴趣。所以职位空缺大家都会知道，如果你回应了他们的通知，他们就会联系你面试。\n所以，以上和“观察者模式”有什么关系呢？这里的“香蕉公司”就是"),n("strong",[e._v("发布者(Dependency）")]),e._v("，用来维护"),n("strong",[e._v("观察者(Watcher)")]),e._v("（和你一样的候选人），为某些 event（比如职位空缺）来 "),n("strong",[e._v("通知（notify)")]),e._v(" 观察者。")]),e._v(" "),n("p",[e._v("所以观察者模式没有发布订阅模式下的事件中心，观察者模式的订阅者与发布者之间是存在依赖的。")]),e._v(" "),n("p",[e._v("代码模拟观察者模式")]),e._v(" "),n("ul",[n("li",[e._v("观察者(订阅者) -- Watcher\n"),n("ul",[n("li",[e._v("update():当事件发生时，具体要做的事情")])])]),e._v(" "),n("li",[e._v("目标(发布者) -- Dep\n"),n("ul",[n("li",[e._v("subs 数组:存储所有的观察者")]),e._v(" "),n("li",[e._v("addSub():添加观察者")]),e._v(" "),n("li",[e._v("notify():当事件发生，调用所有观察者的 update() 方法")])])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" // 发布者-目标\nclass Dep {\n  constructor () {\n    // 记录所有的订阅者\n    this.subs = []\n  }\n  // 添加订阅者\n  addSub (sub) {\n    if (sub && sub.update) {\n      this.subs.push(sub)\n    }\n  }\n  // 发布通知\n  notify () {\n    this.subs.forEach(sub => {\n      sub.update()\n    })\n  }\n}\n// 订阅者-观察者\nclass Watcher1 {\n  update () {\n    console.log('Watcher1')\n  }\n}\nclass Watcher2 {\n  update () {\n    console.log('Watcher2')\n  }\n}\n\n// 测试\nlet dep = new Dep()\nlet watcher1 = new Watcher1()\nlet watcher2 = new Watcher2()\ndep.addSub(watcher1)\ndep.addSub(watcher2)\n\ndep.notify()\n")])])]),n("p",[n("strong",[e._v("发布订阅和观察者模式之间的区别")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("观察者模式")]),e._v("是由具体目标调度，比如当事件触发，Dep 就会去调用观察者的方法，所以观察者模式的订阅者与发布者之间是存在依赖的。")]),e._v(" "),n("li",[n("strong",[e._v("发布/订阅模式")]),e._v("由统一调度中心调用，因此发布者和订阅者不需要知道对方的存在。")])]),e._v(" "),n("p",[n("img",{attrs:{src:"/framework/sub_pub.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"响应式实现模拟"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式实现模拟"}},[e._v("#")]),e._v(" 响应式实现模拟")]),e._v(" "),n("h3",{attrs:{id:"功能需求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#功能需求"}},[e._v("#")]),e._v(" 功能需求")]),e._v(" "),n("p",[e._v("下面来模拟 Vue 响应式,实现一个 小型的 Vue 来模拟下面的功能：")]),e._v(" "),n("ul",[n("li",[e._v("Vue 支持"),n("code",[e._v("el")]),e._v("，"),n("code",[e._v("data")]),e._v("，"),n("code",[e._v("methods")]),e._v("选项")]),e._v(" "),n("li",[n("code",[e._v("data")]),e._v("数据变成响应式, 改变数据，视图也随之改变")]),e._v(" "),n("li",[e._v("模板编译"),n("strong",[e._v("差值表达式")])]),e._v(" "),n("li",[e._v("实现"),n("code",[e._v("v-text")]),e._v(","),n("code",[e._v("v-modal")]),e._v(","),n("code",[e._v("v-on")]),e._v("和"),n("code",[e._v("v-html")]),e._v("指令")]),e._v(" "),n("li",[n("code",[e._v("v-modal")]),e._v("实现双向绑定语法糖，改变视图，数据也会随之改变")]),e._v(" "),n("li",[n("code",[e._v("methods")]),e._v("中的方法绑定"),n("code",[e._v("this")]),e._v("指向 Vue 实例")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<div id="app">\n  <h1>差值表达式</h1>\n  <h3>{{ msg }}</h3>\n  <h3>{{ count }}</h3>\n  <h1>v-text</h1>\n  <div v-text="msg"></div>\n  <h1>v-model</h1>\n  <input type="text" v-model="msg">\n  <input type="text" v-model="count">\n  <p v-html="html"></p>\n  <button v-on:click="changeColor()">点击改变color</button>\n  <button v-on:click="print(count, 10, \'licop\')">点击打印count</button>\n</div>\n<script>\n  let vm = new Vue({\n    el: \'#app\',\n    data: {\n      msg: \'Hello Vue\',\n      count: 20,\n      person: {\n        name: \'licop\'\n      },\n      html: \'<span style="color: red">red</span>\',\n      items: [\'a\', \'b\', \'c\']\n    },\n    methods: {\n      print(count, num, str) {\n        console.log(count, num, str)\n        console.log(this.msg)\n      },\n      changeColor: function () {\n        this.html = \'<span style="color: blue">blue</span>\'\n      }\n    }\n  })\n  // vm.msg = {\n  //   test: \'try\'\n  // }\n<\/script>\n\n')])])]),n("h3",{attrs:{id:"整体结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整体结构"}},[e._v("#")]),e._v(" 整体结构")]),e._v(" "),n("p",[e._v("Vue 响应式是通过"),n("strong",[e._v("数据拦截")]),e._v("和"),n("strong",[e._v("观察者模式")]),e._v("实现的，外加"),n("strong",[e._v("编译模板")]),e._v("功能，综合上边对响应式核心原理和观察者模式的介绍，所以实现一个简易的 Vue 需要 5 个模块")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Vue")]),e._v(": 把 data 中的成员注入到 Vue 实例，并且把 data 中的成员转成 getter/setter,调用"),n("code",[e._v("Observer")]),e._v("和"),n("code",[e._v("Compiler")])]),e._v(" "),n("li",[n("strong",[e._v("Observer")]),e._v(": 能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知 Dep")]),e._v(" "),n("li",[n("strong",[e._v("Compiler")]),e._v(": 解析每个元素中的指令/插值表达式，并替换成相应的数据")]),e._v(" "),n("li",[n("strong",[e._v("Dep")]),e._v(": 添加观察者(watcher)，当数据变化通知所有观察者")]),e._v(" "),n("li",[n("strong",[e._v("Watcher")]),e._v(": 数据变化更新视图")])]),e._v(" "),n("p",[n("strong",[e._v("整体结构")]),e._v(" "),n("img",{attrs:{src:"/framework/Vue%E5%93%8D%E5%BA%94%E5%BC%8F.png",alt:""}})]),e._v(" "),n("p",[e._v("下面分别介绍每个模块：")]),e._v(" "),n("h3",{attrs:{id:"vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" Vue")]),e._v(" "),n("p",[n("code",[e._v("new Vue()")]),e._v("初始化"),n("code",[e._v("Vue")]),e._v("实例，代码入口")]),e._v(" "),n("p",[n("strong",[e._v("功能")])]),e._v(" "),n("ul",[n("li",[e._v("负责接收初始化的参数(选项)")]),e._v(" "),n("li",[e._v("负责把 "),n("code",[e._v("data")]),e._v(" 中的属性注入到 Vue 实例，转换成 getter/setter")]),e._v(" "),n("li",[e._v("负责把 "),n("code",[e._v("methods")]),e._v("里方法的 this 绑定到 Vue 实例")]),e._v(" "),n("li",[e._v("负责调用 "),n("code",[e._v("observer")]),e._v(" 监听 data 中所有属性的变化")]),e._v(" "),n("li",[e._v("负责调用 "),n("code",[e._v("compiler")]),e._v(" 解析指令/插值表达式")])]),e._v(" "),n("p",[n("strong",[e._v("代码")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Vue {\n  constructor (options) {\n    // 通过属性保存选项中的数据\n    this.$options = options || {};\n    this.$data = options.data || {};\n    this.$methods= options.methods || {};\n    this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el\n\n    // 把data中的成员转换成getter和setter，注入到vue实例中\n    this._proxyData(this.$data)\n    // 将methods里的方法this绑定到Vue实例，使其能够获取Vue的属性和方法\n    this._bindMethods(options.methods)\n    // 调用observer对象，使用getter和setter监听数据读取和变更\n    new Observer(this.$data)\n    // 调用compiler对象，解析指令和差值表达式\n    new Compiler(this)\n  }\n\n  _proxyData (data) {\n    // 遍历data中的所有属性\n    Object.keys(data).forEach(key => {\n      Object.defineProperty(this, key, {\n        enumerable: true,\n        configurable: true,\n        get () {\n          return data[key]\n        },\n        set (newValue) {\n          if(newValue === data[key]) {\n            return\n          }\n          data[key] = newValue\n        }\n      })\n    })\n  }\n\n  _bindMethods (methods) {\n    Object.keys(methods).forEach(key => {\n      this.$methods[key] = methods[key].bind(this)\n    })\n  }\n}\n\n")])])]),n("h3",{attrs:{id:"observer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#observer"}},[e._v("#")]),e._v(" Observer")]),e._v(" "),n("p",[n("code",[e._v("Observer")]),e._v("类负责"),n("strong",[e._v("数据劫持")])]),e._v(" "),n("p",[n("strong",[e._v("功能")])]),e._v(" "),n("ul",[n("li",[e._v("负责把 data 选项中的属性转换成"),n("strong",[e._v("响应式")]),e._v("数据")]),e._v(" "),n("li",[e._v("data 中的某个属性也是对象，利用递归把该属性转换成"),n("strong",[e._v("响应式")]),e._v("数据")]),e._v(" "),n("li",[e._v("如果给属性赋值为新对象，把新对象的成员设置为 "),n("code",[e._v("getter/setter")]),e._v("转换成"),n("strong",[e._v("响应式")]),e._v("数据")]),e._v(" "),n("li",[n("code",[e._v("setter")]),e._v("方法监听属性访问，调用"),n("code",[e._v("dep.addSub()")]),e._v("给 "),n("code",[e._v("Dep")]),e._v(" 实例添加 "),n("code",[e._v("Watcher")]),e._v(" 依赖")]),e._v(" "),n("li",[n("code",[e._v("getter")]),e._v("方法监听属性变更，调用 "),n("code",[e._v("dep.notify()")]),e._v("给"),n("code",[e._v("Dep")]),e._v(" 实例发送通知")])]),e._v(" "),n("p",[n("code",[e._v("new Vue")]),e._v("初始化的时候完成"),n("code",[e._v("data")]),e._v("里属性转换成"),n("strong",[e._v("响应式")]),e._v("数据，所以后期想给实例添加属性，或者使用"),n("code",[e._v("methods")]),e._v("方法给"),n("code",[e._v("data")]),e._v("里的对象属性添加新的属性则不会变成响应式的。如果想把属性变成响应式参考"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("文档"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("如果给属性重新赋值成一个对象则会变成"),n("strong",[e._v("响应式")]),e._v("的，因为属性在"),n("code",[e._v("data")]),e._v("定义过，当重新赋值的时候会触发"),n("code",[e._v("setter")]),e._v("方法，然后遍历对象的属性变成"),n("strong",[e._v("响应式")]),e._v("的。")]),e._v(" "),n("p",[n("strong",[e._v("代码")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Observer {\n  constructor (data) {\n    this.walk(data)\n  }\n\n  walk (data) {\n    // 判断data是否是对象\n    if(!data || typeof data !== 'object') {\n      return\n    }\n    // 遍历data对象所有属性\n    Object.keys(data).forEach(key => {\n      this.defineReactive(data, key, data[key])\n    })\n  }\n\n  defineReactive (obj, key, val) {\n    let that = this\n    // dep负责收集依赖，并发送通知\n    let dep = new Dep()\n    // 如果val是对象，把val内部的属性转化为响应式数据\n    this.walk(val)\n\n    Object.defineProperty(obj, key, {\n      enumerable: true,\n      configurable: true,\n      // 如果返回obj[key]会造成死递归，因为每次访问obj[key]都会调用get方法，造成堆栈溢出\n      get () {\n        // 收集依赖，Dep.target为Watcher实例\n        Dep.target && dep.addSub(Dep.target)\n        return val\n      },\n      set (newValue) {\n        if(newValue === val) {\n          return\n        }\n        val = newValue\n        // 如果属性被赋予新的值是对象，newValue内部属性转化为响应式\n        that.walk(newValue)\n        // 向Watcher实例发送通知，更新update()\n        dep.notify()\n      }\n    })\n  }\n}\n")])])]),n("h3",{attrs:{id:"compiler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compiler"}},[e._v("#")]),e._v(" Compiler")]),e._v(" "),n("ul",[n("li",[e._v("负责编译模板，解析指令/插值表达式")]),e._v(" "),n("li",[e._v("负责页面的首次渲染")]),e._v(" "),n("li",[e._v("在数据变化，视图需要改变的地方，添加 "),n("code",[e._v("Wathcher")]),e._v(" 实例，当数据变化后执行回调函数，重新渲染视图")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Compiler {\n  constructor (vm) {\n    this.el = vm.$el\n    this.vm = vm\n    this.compile(this.el)\n  }\n  // 编译模板，处理本文节点和元素节点\n  compile (el) {\n    let childNodes = el.childNodes;\n    // 伪数组变成数组\n    Array.from(childNodes).forEach(node => {\n      if(this.isTextNode(node)) {\n        this.compileText(node)\n      } else if(this.isElementNode(node)) {\n        this.compileElement(node)\n      }\n      // 判断node是否有子节点，如果有递归调用compiler\n      if(node.childNodes && node.childNodes.length !== 0) {\n        this.compile(node)\n      }\n    })\n  }\n  // 编译元素节点，处理指令\n  compileElement (node) {\n    // 遍历所有的属性节点，判断是否是指令\n    Array.from(node.attributes).forEach(attr => {\n      // 判断是否是指令\n      let attrName = attr.name\n      if(this.isDirective(attrName)) {\n        // v-text --\x3e text\n        attrName = attrName.substr(2)\n        let key = attr.value\n        this.update(node, key, attrName)\n      }\n    })\n  }\n\n  update (node, key, attrName) {\n    let updateFn = this[attrName.split(':')[0] + 'Updater']\n    updateFn && updateFn(node, key, attrName)\n  }\n\n  // 处理v-text指令\n  textUpdater = (node, key) => {\n    node.textContent = this.vm[key]\n    new Watcher(this.vm, key, () => {\n      node.textContent = this.vm[key]\n    })\n  }\n\n  // 处理v-model指令\n  modelUpdater = (node, key) => {\n    node.value = this.vm[key]\n    new Watcher(this.vm, key, () => {\n      node.value = this.vm[key]\n    })\n\n    // 双向绑定, 语法糖\n    node.addEventListener('input', () => {\n      this.vm[key] = node.value\n    })\n  }\n\n  // 处理v-html指令\n  htmlUpdater = (node, key) => {\n    node.innerHTML = this.vm[key]\n\n    new Watcher(this.vm, key, () => {\n      node.innerHTML = this.vm[key]\n    })\n  }\n\n  // 处理v-on指令\n  onUpdater = (node, key, attrName) => {\n    const event = attrName.split(':')[1]\n    // 匹配函数名和参数\n    const reg = /(.+?)\\((.+?|\\s?)\\)/\n    if(reg.test(key)) {\n      let fnKey = RegExp.$1.trim()\n      let args = RegExp.$2.trim()\n      if(args) {\n        args = args.split(',').map(arg => {\n          let _arg = arg.replace(/\\s+/, '')\n           // todo 这里只实现了参数是数字，字符串和data里属性的情形\n          if(_arg.startsWith('\"') ||  _arg.startsWith(\"'\")) {\n            return _arg.slice(1, _arg.length - 1)\n          } else if(Number(_arg)) {\n              return Number(_arg)\n          }\n          return this.vm.$data[_arg]\n        })\n      } else {\n        args = []\n      }\n      node.addEventListener(event, () => { this.vm.$methods && this.vm.$methods[fnKey](...args) });\n    }\n  }\n\n  // 编译文本节点，处理差值表达式 {{ msg }}\n  compileText (node) {\n    let reg = /\\{\\{(.+?)\\}\\}/\n    let value = node.textContent\n    if (reg.test(value)) {\n      // 将花括号里的值提取出来,正则表达式里使用小括号包裹\n      let key = RegExp.$1.trim()\n      node.textContent = value.replace(reg, this.vm[key])\n\n      // 创建watcher对象，当数据改变更新视图\n      new Watcher(this.vm, key, (newValue) => {\n        console.log(key, newValue);\n        node.textContent = newValue\n      })\n    }\n  }\n  // 判断元素属性是否是执行\n  isDirective (attrName) {\n    return attrName.startsWith('v-')\n  }\n  // 判断节点是否是本文节点\n  isTextNode (node) {\n    return node.nodeType === 3\n  }\n  // 判断节点是否是元素节点\n  isElementNode (node) {\n    return node.nodeType === 1\n  }\n}\n")])])]),n("h3",{attrs:{id:"dep"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dep"}},[e._v("#")]),e._v(" Dep")]),e._v(" "),n("p",[n("strong",[e._v("功能")])]),e._v(" "),n("ul",[n("li",[e._v("每个属性对应一个 Dep 实例")]),e._v(" "),n("li",[n("code",[e._v("addSub()")]),e._v("负责收集依赖")]),e._v(" "),n("li",[n("code",[e._v("notify()")]),e._v("想依赖发起通知，调用依赖中的"),n("code",[e._v("update()")]),e._v("方法")])]),e._v(" "),n("p",[n("strong",[e._v("代码")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Dep {\n  constructor () {\n    // 存储所有的观察者\n    this.subs = []\n\n  }\n  // 添加观察者\n  addSub (sub) {\n    if (sub && sub.update) {\n      this.subs.push(sub)\n    }\n  }\n  // 发送通知\n  notify () {\n    this.subs.forEach(sub => {\n      sub.update()\n    })\n  }\n}\n")])])]),n("h3",{attrs:{id:"watcher"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#watcher"}},[e._v("#")]),e._v(" Watcher")]),e._v(" "),n("p",[n("strong",[e._v("功能")])]),e._v(" "),n("ul",[n("li",[e._v("页面中所有依赖数据的地方都需要创建一个 "),n("code",[e._v("Watcher")]),e._v("实例")]),e._v(" "),n("li",[n("code",[e._v("Watcher")]),e._v("自身实例化的时候往 dep 对象中添加自己")]),e._v(" "),n("li",[e._v("当数据变化触发依赖， "),n("code",[e._v("dep")]),e._v("通知所有的 "),n("code",[e._v("Watcher")]),e._v(" 实例更新视图")]),e._v(" "),n("li",[n("code",[e._v("Watcher")]),e._v("必须拥有一个"),n("code",[e._v("update")]),e._v("方法，当值发生变化的时候触发回调函数")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Watcher {\n  constructor (vm, key, cb) {\n    this.vm = vm\n    // data中的属性名称\n    this.key = key\n    // 回调函数负责更新视图\n    this.cb = cb\n\n    // 把watcher对象记录到Dep类的静态属性target中 ?为何添加到Dep中，添加到Watcher也可工作\n    Dep.target = this;\n    // 触发get方法，在get方法中调用addSub\n    this.oldValue = vm[key]\n\n    Dep.target = null;\n  }\n\n  // 当数据发生变化的时候更新视图\n  update () {\n    let newValue = this.vm[this.key]\n    if (this.oldValue === newValue) {\n      return\n    }\n    // 更新视图\n    this.cb(newValue)\n  }\n}\n")])])]),n("p",[n("a",{attrs:{href:"https://github.com/licop/vue-reactivity",target:"_blank",rel:"noopener noreferrer"}},[e._v("完整代码参考"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"更多参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多参考"}},[e._v("#")]),e._v(" 更多参考")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档 深入响应式原理"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/DMQ/mvvm",target:"_blank",rel:"noopener noreferrer"}},[e._v("剖析 Vue 实现原理 - 如何实现双向绑定 mvvm"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://juejin.cn/post/6844903513009422343",target:"_blank",rel:"noopener noreferrer"}},[e._v("观察者模式 vs 发布-订阅模式"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://tool.oschina.net/uploads/apidocs/jquery/regexp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("正则表达式文档"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);