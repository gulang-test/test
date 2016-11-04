/**
 * Created by weiping.sun on 2016/11/2.
 */
var util = require('util');
function Base(){
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function(){
        console.log( 'Hello ' + this.name);
    }
}
Base.prototype.showName = function(){
    console.log(this.name);
}
function Sub(){
    this.name ='SUB';
}
util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log( objBase );

var objSub = new Sub();
objSub.showName();
console.log(objSub);