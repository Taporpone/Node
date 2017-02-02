var http = require('http');
var colors = require('colors');
var fs = require('fs');

var handlers = require('./handlers');

var existingFiles = fs.readdirSync('./files');

function start(){
  function onRequest(request,response) {
    console.log(request.connection.remoteAddress, ' requested ', request.url);
    response.writeHead(200,{"Content-Type":"text/plain"});
    if (request.url === '/' || request.url === '/start'){
        handlers.welcome(request,response);
    }
    else if (request.url === '/upload'){
      handlers.upload(request,response);
    }
    else if (request.url === '/show'){
      handlers.show(request,response);
      existingFiles = fs.readdirSync('./files'); // reload
    }
    else if (request.url.includes('/files/')){
      if (existingFiles.indexOf(request.url.split('/')[2]) >=0){
        var imageUrl = './files/' + request.url.split('/')[2]
        handlers.image(request,response,imageUrl);
      }else{
        handlers.error(request,response);
      }
    }
    else {
      handlers.error(request,response);
    }
  }
  http.createServer(onRequest).listen(9000);
  console.log("Server is running...".green);
}

exports.start = start;
