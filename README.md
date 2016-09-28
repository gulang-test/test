# test
test
npm install -g supervisor   监控代码的改动
supervisor XXX 代替node启动相关程序

node 支持同步与异步文件读取操作

Node.js 的事件循环对开发者不可见，由 libev 库实现

Node.js 调试命令
run 执行脚本，在第一行暂停
restart 重新执行脚本
cont, c 继续执行，直到遇到下一个断点
next, n 单步执行
step, s 单步执行并进入函数
out, o 从函数中步出
setBreakpoint(), sb() 在当前行设置断点
setBreakpoint(‘f()’), sb(...) 在函数f的第一行设置断点
setBreakpoint(‘script.js’, 20), sb(...) 在 script.js 的第20行设置断点
clearBreakpoint, cb(...) 清除所有断点
backtrace, bt 显示当前的调用栈
list(5) 显示当前执行到的前后5行代码
watch(expr) 把表达式 expr 加入监视列表
unwatch(expr) 把表达式 expr 从监视列表移除
watchers 显示监视列表中所有的表达式和值
repl 在当前上下文打开即时求值环境
kill 终止当前执行的脚本
scripts 显示当前已加载的所有脚本
version 显示 V8 的版本

远程调试
node --debug[=port] script.js
node --debug-brk[=port] script.js

在使用 Eclipse 之前，首先需要安装 JDK，可以在 http://www.oracle.com/technetwork/java/
javase/downloads/index.html 获得，然后在 http://www.eclipse.org/downloads/ 取得一份 Eclipse。
启动 Eclipse，选择菜单栏中 Help→Install New Software...，此时会打开一个安装对话框，
点击右边的按钮Add...，接下来会打开一个标题为Add Repository的对话框，在 Location 中输
入 http://chromedevtools.googlecode.com/svn/update/dev/，Name 中输入 Chrome Developer，然
后点击OK按钮。

首先，使用 npm install -g node-inspector 命令安装 node-inspector，然后在终
端中通过 node --debug-brk=5858 debug.js 命令连接你要除错的脚本的调试服务器，
启动 node-inspector：
$ node-inspector