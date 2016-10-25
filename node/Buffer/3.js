/**
 * Created by weiping.sun on 2016/10/25.
 */
var bf = new Buffer('weiping.sun');

console.log( bf.toString() );

console.log( bf.toString('utf-8',1,3) );//ei

var bf2 = new Buffer('唯品');
console.log(bf2);
console.log( bf2.toString('utf-8',1) );//��品 乱码

console.log( bf.toJSON() );//{ type: 'Buffer',data: [ 119, 101, 105, 112, 105, 110, 103, 46, 115, 117, 110 ] }  字节数组


