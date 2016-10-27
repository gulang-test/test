/**
 * Created by weiping.sun on 2016/10/25.
 */
var fs = require('fs');
var filename = '2.new.txt';
fs.watch( filename,function( event,filename ){
    console.log( event,filename);
    if( filename ){
        console.log( filename + '发生了改变' );
    }else{
        console.log( '...' );
    }

} );


