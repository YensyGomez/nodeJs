 
function filtrotxt(x,y,callback){
 var path= require('path')
 var fs = require('fs')
 var filtro = [];
 var ext = '.' + y;
 fs.readdir(x, function(error, lista){
 	if(error)
 		return callback(error);
 	for (var i = 0;i < lista.length ; i++) {
 		if (path.extname(lista[i]) == ext)
 			filtro.push(lista[i]);
 	}
 	callback(null, filtro);
 });
}

module.exports = filtrotxt;  


/*var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) también se puede utilizar  
       var lines = contents% */
 
 

