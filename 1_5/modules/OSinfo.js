var os = require('os');
var colors = require('colors');
var timeConverter = require('./TimeConverter.js');

function getOSinfo(){
  var type = os.type();
  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();

  if (type === 'Darwin'){
    type = "OSX";
  } else if (type === 'Windows_NT'){
    type = "Windows";
  }
  console.log('System: '.gray, type);
  console.log('Release: '.red, release);
  console.log('CPU: '.cyan, cpu);
  console.log('Uptime: '.green,timeConverter.timeConverter(uptime))
  console.log('Username: '.yellow,userInfo.username);
  console.log('Homedir: '.blue,userInfo.homedir);
}

exports.print = getOSinfo;
