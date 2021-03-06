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
      var requestedFileName = request.url.split('/')[2]; // grab only filename from requested URL
      if (existingFiles.indexOf(requestedFileName) >=0){ // check if it exists localy
        var imageUrl = './files/' + requestedFileName;
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
