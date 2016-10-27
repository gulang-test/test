/**
 * Created by weiping.sun on 2016/10/25.
 */
var fs = require('fs');
var filedir = './app/source';

fs.watch( filedir,function( ev,file ){

    //console.log( ev + '/' + file );//这里不需要判断file是否有内容
    //只要有一个文件发生了变化，我们就需要对这个文件夹下的所有文件进行读取，然后合并
    fs.readdir( filedir,function( err, dataList ){
        var arr = [];
        dataList.forEach(function(f){
            if( f ){
                var info = fs.statSync( filedir + '/' + f);
                if( info.mode == 33206 ){
                    arr.push( filedir + '/' + f );
                }
            }
        });
        //console.log( arr );
        //读取数组中的文件内容，并合并
        var content ="";
        arr.forEach(function(f){
           var c = fs.readFileSync(f);
            content += c +'\n';

        });
        console.log( content );
        fs.writeFile('./app/js/index.js',content );

    } );

} );






