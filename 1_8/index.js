var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
  if (request.url == "/"){
    fs.readFile('index.html',function(err,data){
      response.writeHeader(200,{"Content-Type":"text/html; charset=utf-8"});
      response.write(data);
      response.end()
    });
  }else{
    fs.readFile('404.jpg',function(err,data){
      if (err) throw err;
      response.writeHeader(404,{"Content-Type":"image/jpeg; charset=utf-8"});
      response.write(data);
      response.end()
    });
  }
}).listen(9000);
