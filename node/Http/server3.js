/**
 * Created by weiping.sun on 2016/10/26.
 */
/*
*
* */
var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer();
var HtmlDir = __dirname + '/html/';
var queryString = require('querystring');
server.on('request',function( req,res ){
    //req.url 访问路径
    //？后面的部分query string
    //console.log(req.url);
    var urlStr = url.parse( req.url );
    console.log( urlStr );
    switch( urlStr.pathname ){
        case '/':
            //首页
            sendData( HtmlDir + 'index.html', req,res );
            break;
        case '/user':
            //用户首页
            sendData( HtmlDir + 'user.html', req,res );
            break;
        case '/login':
            sendData( HtmlDir + 'login.html', req,res );
            break;
        case '/login/check':
            console.log(req.method);
            if( req.method.toUpperCase() == 'POST' ){
                console.log( queryString.parse( urlStr.query ) );
                var str = "";
                req.on('data',function( chunk ){
                    str += chunk;
                });
                req.on('end',function(){
                    console.log(str);
                    console.log( queryString.parse( str)  );
                });
            }
            break;
        default:
            sendData( HtmlDir + 'err.html', req,res );
            break;
    }
});
function sendData( file, req,res ){
    console.log(file);
    fs.readFile( file,function( err,data ){
        if( err ){
            res.writeHead( 404,{
                'content-type' : 'text/html;charset=utf-8'
            });
            res.end('<h1>页面被leo吃掉了</h1>' );
        }else{
            res.writeHead( 200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end( data );
        }
    } );
}
server.listen(8080,'localhost');

