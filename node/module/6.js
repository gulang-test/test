/**
 * Created by weiping.sun on 2016/10/24.
 */
/*
* __filename:返回当前模块文件的解析后的绝对路径，该属性并非全局的，而是模块作用域下的
* __dirname:返回当前模块文件所在目录解析后的绝对路径，该属性也不是全局的，而是模块作用域下的
* */
//console.log(__filename);
//console.log(__dirname);

//var d = new Date();
//var _arr = new Array(1,2,3,4);
setInterval(function(){
    var d = new Date();
    console.log("现在是：" + d.getFullYear() + "年" + (d.getMonth()+1) + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分' + d.getSeconds() + '秒'  );
},1000);



