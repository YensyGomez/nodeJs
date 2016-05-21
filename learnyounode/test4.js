 var fs = require('fs')
 var archivo;
fs.readFile(process.argv[2], 'utf8', function(err,data){
	archivo = data; 
	var str = archivo.toString()
 	var count = str.split('\n').length -1;
 	console.log(count);

});

/*var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) también se puede utilizar  
       var lines = contents% */
 
 

