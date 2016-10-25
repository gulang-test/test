/**
 * Created by weiping.sun on 2016/10/25.
 */
/*
* Buffer类
*     用于操作二进制数据流
* */
// new Buffer(size);size[Number] 创建一个Buffer对象，并为这个对象分配一个大小
//当我们为一个Buffer对象分配空间大小以后，其长度是固定的，不能更改
/*
var bf = new Buffer(5);
console.log(bf);
bf[6] = 10;
bf[1] = 10;
console.log(bf);*/


//new Buffer(array);
/*var bf = new Buffer([1,2,3]);
console.log(bf);
bf[6] = 10;
console.log(bf);*/

//new Buufer( String, [encoding]);
/*var bf = new Buffer('weiping.sun','utf-8');
console.log(bf);//显示16进制的

for( var i=0;i<bf.length;i++ ){
    //console.log(bf[i]);//显示二级制的
    //console.log( bf[i].toString(16) );
    console.log( String.fromCharCode( bf[i] ) );//转成普通字符串
};*/

var str1 = 'weiping.sun';
var bf1 = new Buffer( str1 );
console.log( str1.length );
console.log( bf1.length );

var str2 = '唯品';
var bf2 = new Buffer( str2 );
console.log( str2.length );
console.log( bf2.length );

