/**
 * Created by weiping.sun on 2016/10/25.
 */
var fs = require('fs');
/*
* fs.writeFile(filename,data,[options],callback);
*   -异步的将数据写入一个文件，如果文件不存在则新建，如果文件原先存在，会被替换，data可以是一个string，也可以是一个原声buffer
* */
/*
* fs.writeSync(filename,data,[option]);
* */
 var filename = '24.txt';
/*
* 向一个制定的文件中写入数据，如果该文件不存在，则新建，如果存在则新的的内容会覆盖原有的文件内容
* */
/*fs.writeFile( filename, 'weiping', function(){
    console.log(arguments);
} );*/

/*fs.appendFile(filename,'-hello',function(){
    console.log(arguments);
});*/
/*检测文件是否存在
* */
/*fs.exists( filename,function( isExists ){
    //console.log(isExists);
    if( !isExists ){
        fs.writeFile(filename,'唯品',function( err ){
           if( err ){
               console.log('出错了');
           }else{
               console.log('创建新文件成功');
           }
        });
    }else{
        fs.appendFile(filename,' 会',function(err){
            if( err ){
                console.log('新的内容追加失败');
            }else{
                console.log('新内容追加成功');
            }
        });
    }
});*/

if( !fs.existsSync(filename) ){
    fs.writeFileSync(filename,'weiping')
    console.log('新文件创建成功');
}else{
    fs.appendFileSync(filename,'hh')
    console.log('新内容追加成功');
}





