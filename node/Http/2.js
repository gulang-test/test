/**
 * Created by weiping.sun on 2016/10/26.
 */
/*
*
* */

var http = require('http');
http.createServer(function( req,res ){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>hello haha </h1>');
    res.end('<p>node</p>');
}).listen(5000);
console.log('http server is listening at port 5000');


