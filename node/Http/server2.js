/**
 * Created by weiping.sun on 2016/10/26.
 */
/*
*
* */
var http = require('http');
var server = http.createServer();
var url = require('url');
var urlStr = url.parse('http://www.baidu.com/a/index.html?tab=2');
console.log(urlStr);
server.on('request',function( req,res ){
    //req.url 访问路径
    //？后面的部分query string
    //console.log(req.url);
    var urlStr = url.parse( req.url );
    //console.log( urlStr );
    switch( urlStr.pathname ){
        case '/':
            //首页
            res.writeHead(200,{
                'content-type' :'text/html;charset=utf-8'
            });
            res.end('<h1>个人中心</h1>');
            break;
        case '/user':
            //用户首页
            res.writeHead(200,{
                'content-type' :'text/html;charset=utf-8'
            });
            res.end('<h1>用户中心</h1>');
            break;
        default:
            res.writeHead(404,{
                'content-type' :'text/html;charset=utf-8'
            });
            res.end('<h1>页面被leo吃掉了</h1>');
            break;
    }
});
server.listen(8080,'localhost');
