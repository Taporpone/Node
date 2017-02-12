var http = require('http');
var fs = require('fs');

http.createServer(function(request,response){
  function notFound(file){
    response.writeHeader(404,{"Content-Type":"text/html; charset=utf-8"});
    response.write('<h1>404</h1>');
    response.end();
    console.log(file + ' not found, serving static text!');
  }

  function serveContent(code,data,contentType){
    response.writeHeader(code,{"Content-Type":contentType});
    response.write(data);
    response.end();
    }

  if (request.url === "/"){
    fs.readFile('index.html',function(err,data){
      if (err){
        notFound('index.html');
      }else{
        serveContent(200,data,"text/html; charset=utf-8");
      }
    });
  }else{
    fs.readFile('404.jpg',function(err,data){
      if (err){
        notFound('404.jpg');
      }else{
        serveContent(404,data,"image/jpeg; charset=utf-8");
      }
    });
  }
}).listen(9000);
