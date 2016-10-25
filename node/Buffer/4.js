/**
 * Created by weiping.sun on 2016/10/25.
 */
/*
*
* */

var bf = new Buffer('weiping.sun');
console.log(bf);//<Buffer 77 65 69 70 69 6e 67 2e 73 75 6e>

/*var bf2 = bf.slice();
console.log(bf2);*///<Buffer 77 65 69 70 69 6e 67 2e 73 75 6e>

/*
 var bf3 = bf.slice(2,4);
 console.log( bf3 );//<Buffer 69 70>
 bf3[0] = 2;//引用的是同一对象，会修改bf，与数组不一样，数组不会有此情况
 console.log(bf3);//<Buffer 02 70>
 console.log(bf);//<Buffer 77 65 02 70 69 6e 67 2e 73 75 6e>*/

var bf4 = new Buffer(10);
bf.copy(bf4);
console.log(bf4);
bf4[0]  = 2;
console.log(bf4);
console.log(bf);
//bf.copy(目标buf，[targetStart],[sourceStart],[sourceEnd]);
