/**
 * Created by weiping.sun on 2016/10/25.
 */
var fs = require('fs');
/*
* fs.mkdir( path,[mode],callback);  创建文件夹
* */
/*fs.mkdir( './1',function(){
    console.log( arguments );
} );*/

/*fs.rmdir('./1',function(){//删除文件夹
    console.log( arguments );
});*/

fs.readdir( './',function( err, filelist ){
    //console.log( arguments );
    filelist.forEach(function( f, index ){

        fs.stat( f,function( err, info ){
            //console.log( arguments );
            switch( info.mode ){
                case 16822:
                    console.log( '[文件夹]' + f );
                    break;
                case 33206:
                    console.log( '[文件]' + f );
                    break;
                default :
                    console.log( '[其他类型]' + f );
                    break;
            }
        } );

    });


} );

