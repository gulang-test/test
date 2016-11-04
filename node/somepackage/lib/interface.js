/**
 * Created by weiping.sun on 2016/11/2.
 */

function Interface(){
    this.hello = function(){
        console.log('new hello');
    }
    console.log('interface');
}
//exports.hello = interface;
module.exports = Interface;
//module.exports = interface;