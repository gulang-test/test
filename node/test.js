//child_process.exec(cmd, [options], callback) 
//
var exec =  require('child_process').exec;
var CMDStr = 'mkdir test';
exec( CMDStr , function(){
    console.log( arguments );
});


