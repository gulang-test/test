/**
 * Created by weiping.sun on 2016/10/24.
 */
/*
*-process对象
* process对象是一个全局对象，可以在任何地方都能访问到他，通过这个对象提供的属性和方法，使我们可以对当前运行的程序的进程进行访问和控制
* argv
*   -Array:一组包含命令行参数的数组
* execPath
*   -开启当前进程的绝对路径
* env
*   -返回用户环境信息
* */
//console.log( process );
//console.log( global.process )
//console.log( process.argv );//[ 'D:\\nodejs\\node.exe','e:\\work\\gitlist\\test\\node\\process\\1.js' ]
//console.log( process.env );
//console.log( process.pid );
/*console.log( process.title );
setInterval(function(){

},5000);
setTimeout(function(){
    process.exit();
},6000);*/
/*
* -stdin.stdout:标准输入输出流(IO)
*   --标准输入设备：http://baike.baidu.com/view/632680.htm
*   --标准输出设备：http://baike.baidu.com/view/632676.htm
*   --stdin和stdout提供了操作输入数据和输出数据的方法，我们也通常称为IO操作
* -stdin  标准输入流
* -stdout  标准输出流
* */
//process.stdout.write('hello');
function log(str){
    process.stdout.write(str);
}
//log('hi');
//默认情况下，输入流是关闭的，要监听处理输入流数据，首先要开启输入流
process.stdin.resume();
//用于监听用户的输入数据
/*process.stdin.on('data',function( data ){
    console.log('用户输入了：' + data );
});*/
var a;
var b;
process.stdout.write('请输入a的值：');
process.stdin.on('data',function(data){
    if( !a ){
        a = Number(data);
        process.stdout.write( '请输入b的值：' );
    }else if( !b ){
        b = Number(data);
        process.stdout.write( '结果是：' + (a+b) );
        console.log( "touch 'test.text'" );
        process.exit();
    }
});
