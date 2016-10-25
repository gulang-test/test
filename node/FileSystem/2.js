/**
 * Created by weiping.sun on 2016/10/25.
 */
/*
*
*
* */
var fs = require('fs');
fs.open('1.txt','r',function(err,fd){
    console.log(err);
});
console.log('ok');

var fd = fs.openSync('1.txt','r');
console.log(fd);
console.log('openSync');

/*
ok
4
openSync
null*/
