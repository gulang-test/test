/**
 * Created by weiping.sun on 2016/10/25.
 */
/*
* buf.write(要写入的字符串，从Buffer对象中的第几位开始写入，写入的字符串长度，字符串写入的字符串编码);
* */

var str = 'weiping.sun';
console.log( new Buffer( str ) );//<Buffer 77 65 69 70 69 6e 67 2e 73 75 6e>
var bf = new Buffer( 3 );

/*bf.write( str );
console.log( bf );*/
/*bf.write(str,1,2);//偏移量
console.log( bf );//<Buffer 98 77 65> 从第01位开始写入*/
