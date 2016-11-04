/**
 * Created by weiping.sun on 2016/11/3.
 */

var express = require('express');
console.log('express',express);
var app = express.createServer();
app.use( express.bodyParser() );
app.all('/',function( req,res ){
    res.send( req.body.title + req.body.text );
});
app.listen(3000);

