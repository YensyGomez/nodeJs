 var fs = require('fs')
 var archivo = fs.readFile(process.argv[2], function(err,data));
 //var str = archivo.toString()
 //var count = str.split('\n').length -1;

 console.log(archivo);

