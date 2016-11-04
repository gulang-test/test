/**
 * Created by weiping.sun on 2016/11/2.
 */

process.stdout.write('hello,weiping.sun');
process.stdin.resume();
process.stdin.on('data',function( data ){
    process.stdout.write('read from consle.log:' + data.toString() );
});
process.nextTick(function(){
    process.stdout.write('haha,good');
});
/*
function doSomething(args, callback) {
    somethingComplicated(args);
    callback();
 }
 doSomething(function onEnd() {
    compute();
 });
* */