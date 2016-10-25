/**
 * Created by weiping.sun on 2016/10/24.
 */
/*
* 在一个模块中通过var定义的变量，其作用域范围是当前模块，外部不能够直接的访问
* 如果我们想一个模块能够访问另外一个模块中定义库的变量，可以：
* 1.把变量作为global对象的一个属性,但是这样的做法是不推荐的
* 2.使用模块对象，module*/
var a = 100;
//global.a = 100;
/*
* module:保存提供和当前模块有关的一些信息
* 在这个module对象，有一个子对象：exports对象
* 我们可以通过这个对象把一个模块中的局部变量对象进行提供访问
* */
//console.log(module);
// module.exports.a = a;
/*
* 在模块作用域，还有一个内置模块对象，exports,他其实就是module.exports
* */
//console.log(exports === module.exports );
//exports.a = a;
//module.exports = [1,2,4];//exports和module.exports的指向关系已经断开了