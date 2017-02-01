var fs = require('fs');

fs.readdir('.',function(err,files){
  fs.writeFile('./tekst.txt',files,function(err){
    if (err) throw err;
  });
});
