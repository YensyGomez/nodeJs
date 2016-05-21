
var filtrotxt = require('./test6.js');
var second = process.argv[3];
 
filtrotxt(process.argv[2],second, function (err, data) {  
 if (err)  
   return callback(err) // devolver el error  

 // ... no hay error, continuar con los cálculos.  

 // si todo termina bien, llamar el callback con `null` como parámetro de error  

 //callback(null, data)
 for (i in data)  
 console.log(data[i]);
}); 




/*var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) también se puede utilizar  
       var lines = contents% */
 
 

