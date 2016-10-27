/**
 * Created by weiping.sun on 2016/10/25.
 */
var projectData = {
    "name" :"app",
    "fileData" : [{
        'name' : 'css',
        'type' : 'dir'
    },{
        'name' : 'js',
        'type' : 'dir'
    },{
        'name' : 'images',
        'type' : 'dir'
    },{
        'name' : 'index.html',
        'type' : 'file',
        'content':'<html>\n\t<head>\n\t\t<title>title</title></head></head>\n\t\t<body>\n\t\t<h1>hello</h1></body>\n</html>'
    }]
};
var fs = require('fs');
if( projectData.name ){
    fs.mkdirSync( projectData.name );
    //fs.mkdirSync( './a' );
    //fs.rmdir('./a',function(){});
    //console.log('./' + projectData.name)

    var fileData = projectData.fileData;
    if( fileData && fileData.forEach ){
        fileData.forEach(function(f){
            f.path = projectData.name + '/' + f.name;
            f.content = f.content ||'';
            switch (f.type ){
                case 'dir':
                    fs.mkdirSync(f.path );
                    break;
                case 'file':
                    fs.writeFileSync(f.path, f.content );
                    break;
                default :
                    break;
            }
        });
    }
}
/*
*
*
* */









