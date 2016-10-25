/**
 * Created by weiping.sun on 2016/10/25.
 */
/*
* 类方法，静态方法
* */

/*console.log(Buffer.isEncoding('utf-8'));//true 支持的方法
console.log(Buffer.isEncoding('utf-88'));//false

var arr = [1,3,4]
var bf = new Buffer( 10 );

console.log( Buffer.isBuffer(arr) );
console.log( Buffer.isBuffer(bf) );

var str1 = 'weiping.sun';
console.log( str1.length );
console.log( Buffer.byteLength(str1) );//字节长度

var str2 = '唯品';
console.log( str2.length ); //2
console.log( Buffer.byteLength(str2,'utf-8') );  //6*/

/*var str1 = 'weiping.sun';
var str2 = '唯品';

var list = [new Buffer( str1 ),new Buffer(str2)];
console.log(list);//[ <Buffer 77 65 69 70 69 6e 67 2e 73 75 6e>,<Buffer e5 94 af e5 93 81> ]

var bf = Buffer.concat(list);//Buffer.concat( arr,length );
console.log(bf);//<Buffer 77 65 69 70 69 6e 67 2e 73 75 6e e5 94 af e5 93 81>*/

process.stdout.write('请输入内容：');
process.stdin.resume();
process.stdin.on('data',function( data ){
    //console.log( data.toString() );
    console.log( '输入的内容是：' + data );
});


