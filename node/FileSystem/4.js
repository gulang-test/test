/**
 * Created by weiping.sun on 2016/10/25.
 */

var fs = require('fs');
fs.open('1.txt','r+',function(err,fd){
    /*
    当我们要对打开的文件进行写操作的时候,打开文件的模式应该是读写模式

    * fs.write(fd,buffer,offset,length[,position],callback);
    *   fd:打开的文件
    *   buffer:要写入的数据
    *   offset:buffer对象中要写入的数据的起始位置
    *   length：要写入的buffer数据的长度
    *   position：fd的起始位置
    *   callback：回调
    * */
    if( err ){
        console.log('打开文件失败');
    }else{
        /*var bf = new Buffer('bvda');
        fs.write( fd,bf,0,3,0,function(){
            console.log( arguments );
        } );*/

        /*
        *fs.write(fd,data[,position[,encoding]],callback);
        *   -把data写入到文档中通过制定的fd，如果data不是buffer对象的实例则会把值增强制转化成一个字符串
        * */
        fs.write(fd,'1234',6, 'utf-8');
        fs.close( fd, function(){

        } );

    }

});

