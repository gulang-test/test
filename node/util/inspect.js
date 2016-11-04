/**
 * Created by weiping.sun on 2016/11/2.
 */
var util = require('util');
function Person(){
    this.name = 'Person';
    this.toString = function(){
        return this.name;
    }
}
var obj = new Person();
console.log( util.inspect(obj) );
console.log( util.inspect(obj,true) );