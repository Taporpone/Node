var fs = require('fs');
var formidable = require('formidable');
var crypto = require('crypto');

function filenameGenerator(){
  var filename = crypto.randomBytes(5).toString('hex');
  var path = './files/' + filename + '.png';
  return path;
}

exports.upload = function(request,response){
  console.log('Serving Upload page');
  var form = new formidable.IncomingForm();
  path = filenameGenerator();  //global for after upload /show purposes
  form.parse(request,function(error,fields,files){
    fs.renameSync(files.upload.path,path);
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write('Image url: <br />http://127.0.0.1:9000/files/' + path.split('/')[2]);
    response.write("<img src='/show' />");
    response.end();
  });
}

exports.welcome = function(request,response){
  console.log('Serving welcome');
  fs.readFile('templates/start.html',function (err,html){
      response.writeHead(200,{"Content-Type":"text-html; charset=utf-8"})
      response.write(html);
      response.end();
  });
}

exports.error = function(request,response){
  console.log('Error');
  response.write('404');
  response.end();
}

exports.show = function(reuqest,response){
  fs.readFile(path,'binary',function(error,file){
    response.writeHead(200,{"Content-Type":"image/png"});
    response.write(file,'binary');
    response.end();
  });
}

exports.image = function(request,response,imageUrl){
  fs.readFile(imageUrl,'binary',function(error,file){
    response.writeHead(200,{"Content-Type":"image/png"});
    response.write(file,'binary');
    response.end();
  })
}
