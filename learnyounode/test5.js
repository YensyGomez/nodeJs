 var path= require('path')
 var fs = require('fs')
 var filtro;
 var ext = '.'+process.argv[3]
 fs.readdir(process.argv[2],function(error, lista){
 	for (var i = 0;i < lista.length ; i++) {
 		if (path.extname(lista[i])==ext)
 			console.log(lista[i]);
 	}
 });

/*var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) también se puede utilizar  
       var lines = contents% */
 
 

