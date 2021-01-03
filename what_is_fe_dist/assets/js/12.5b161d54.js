(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{380:function(t,a,s){"use strict";s.r(a);var e=s(27),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令"}},[t._v("#")]),t._v(" linux 常用命令")]),t._v(" "),s("h2",{attrs:{id:"ls-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls-命令"}},[t._v("#")]),t._v(" ls 命令")]),t._v(" "),s("p",[t._v("就是 list 的缩写，通过 ls 命令不仅可以查看 linux 文件夹包含的文件，而且可以查看文件权限(包括目录、文件夹、文件权限) 查看目录信息等等。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls -a 列出目录所有文件，包含以.开始的隐藏文件\nls -A 列出除.及..的其它文件\nls -r 反序排列\nls -t 以文件修改时间排序\nls -S 以文件大小排序\nls -h 以易读大小显示\nls -l 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来\n")])])]),s("h2",{attrs:{id:"cd-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd-命令"}},[t._v("#")]),t._v(" cd 命令")]),t._v(" "),s("p",[t._v("cd(changeDirectory) 命令语法, 切换当前目录至 dirName")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("   cd /  进入目录\n   cd ~  进入home目录\n   cd - 进入上一次工作路径\n")])])]),s("h2",{attrs:{id:"pwd-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwd-命令"}},[t._v("#")]),t._v(" pwd 命令")]),t._v(" "),s("p",[t._v("pwd 命令用于查看当前工作目录路径。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  pwd 查看当前路劲\n  pwd -P 查看软链接的实际路径\n")])])]),s("h2",{attrs:{id:"mkdir-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkdir-命令"}},[t._v("#")]),t._v(" mkdir 命令")]),t._v(" "),s("p",[t._v("mkdir 命令用于创建文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" mkdir t  当前工作目录下创建名为t的文件夹\n mkdir -p  /tmp/test/t1/t  在 tmp 目录下创建路径为 test/t1/t 的目录，若不存在，则创建\n")])])]),s("h2",{attrs:{id:"rm-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rm-命令"}},[t._v("#")]),t._v(" rm 命令")]),t._v(" "),s("p",[t._v("删除一个目录中的一个或多个文件或目录")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  rm -rf test\n")])])]),s("h2",{attrs:{id:"mv-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv-命令"}},[t._v("#")]),t._v(" mv 命令")]),t._v(" "),s("p",[t._v("移动文件或修改文件名，根据第二参数类型（如目录，则移动文件；如为文件则重命令该文件）。")]),t._v(" "),s("p",[t._v("当第二个参数为目录时，第一个参数可以是多个以空格分隔的文件或目录，然后移动第一个参数指定的多个文件到第二个参数指定的目录中。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  mv test.log test1.txt    将文件 test.log 重命名为 test1.txt\n\n  mv llog1.txt log2.txt log3.txt /test3  将文件 log1.txt,log2.txt,log3.txt 移动到根的 test3 目录中\n\n  mv -i log1.txt log2.txt  将文件 file1 改名为 file2，如果 file2 已经存在，则询问是否覆盖\n\n")])])]),s("h2",{attrs:{id:"cp-命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp-命名"}},[t._v("#")]),t._v(" cp 命名")]),t._v(" "),s("p",[t._v("将源文件复制至目标文件，或将多个源文件复制至目标目录。")]),t._v(" "),s("p",[t._v("注意：命令行复制，如果目标文件已经存在会提示是否覆盖，而在 shell 脚本中，如果不加 -i 参数，则不会提示，而是直接覆盖！")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  -i 提示\n  -r 复制目录及目录内所有项目\n  -a 复制的文件与原文件时间一样\n\n  cp -ai a.txt test   复制 a.txt 到 test 目录下，保持原文件时间，如果原文件存在提示是否覆盖。\n\n")])])]),s("h2",{attrs:{id:"cat-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cat-命令"}},[t._v("#")]),t._v(" cat 命令")]),t._v(" "),s("p",[t._v("cat 主要有三大功能：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  cat filename     一次显示整个文件\n\n  cat > filename   从键盘创建一个文件\n\n  cat file1 file2 > file 将几个文件合并为一个文件:\n\n")])])]),s("h2",{attrs:{id:"which-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which-命令"}},[t._v("#")]),t._v(" which 命令")]),t._v(" "),s("p",[t._v("查看可执行文件的位置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  which node   查看node执行文件位置\n")])])]),s("h2",{attrs:{id:"whereis-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whereis-命令"}},[t._v("#")]),t._v(" whereis 命令")]),t._v(" "),s("p",[t._v("查看文件的位置")]),t._v(" "),s("h2",{attrs:{id:"kill-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kill-命令"}},[t._v("#")]),t._v(" kill 命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  kill -9  终止进程\n")])])]),s("h2",{attrs:{id:"lsof-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsof-命令"}},[t._v("#")]),t._v(" lsof 命令")]),t._v(" "),s("p",[t._v("列出谁在使用某个端口")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  lsof -i :3306\n")])])]),s("h2",{attrs:{id:"ssh-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-命令"}},[t._v("#")]),t._v(" ssh 命令")]),t._v(" "),s("p",[t._v("ssh 用于登录远程主机")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  ssh root@39.107.225.18  远程连接服务器\n")])])]),s("h2",{attrs:{id:"scp-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp-命令"}},[t._v("#")]),t._v(" scp 命令")]),t._v(" "),s("p",[t._v("scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("   scp local_file root@39.107.xxx.xx:/remote_folder\n   scp -r  local_folder root@39.107.xxx.xx:/remote_folder\n")])])]),s("h2",{attrs:{id:"vim-vi-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vim-vi-命令"}},[t._v("#")]),t._v(" vim/vi 命令")]),t._v(" "),s("p",[t._v("新建编辑文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  vi [filename]  新建并且编辑文件  然后按i键进入编辑状态，输入内容，最后按一下esc，再按冒号，输入wq就保存退出了\n\n  vi /usr/local/nginx/conf/nginx.conf 打开修改nginx配置文件\n\n")])])]),s("h2",{attrs:{id:"更多参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多参考"}},[t._v("#")]),t._v(" 更多参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.runoob.com/w3cnote/linux-common-command-2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 常用命令学习"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);