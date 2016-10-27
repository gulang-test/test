/**
 * Created by weiping.sun on 2016/10/26.
 */
/*
* 搭建一个http的服务器，用户处理用户发送的http请求
* 需使用node提供的一个模块 http
*
* */
//加载一个http模块
var http = require('http');
//通过http模块下的createServer创建并返回一个web服务器对象
var server = http.createServer();//request回调函数可在这传参编写

server.on('error',function( err ){
    console.log( err );
});
server.on('listening',function(){
    console.log('listening...');

});
server.on('request',function( req, res ){
    console.log( '有客户端请求了。。。');
    //console.log( req );
    //res.write('hello');
    res.writeHead( 200,'weiping.sun',{
        'content-type' : 'text/plain'
    });
    res.write('<h1>hello again</h1>');
    res.end();
});

server.listen( 8080,'localhost' );

console.log(server.address());


