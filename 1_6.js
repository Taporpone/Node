var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();
emitter.on('beforeCommand',function(instruction){
  console.log('YOu wrote: ' + instruction + ' trying to run command.')
});
emitter.on('afterCommand',function(){
  console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable',function(){
  var input = process.stdin.read();
  if (input !== null){
    var instruction = input.trim();
    emitter.emit('beforeCommand',instruction);
    switch(instruction){
      case '/exit':
          process.stdout.write('Quitting app!');
          process.exit();
          break;
      case '/sayhello':
          process.stdout.write('Hi!\n');
          break;
      case '/getOSinfo':
          process.stdout.write("Well, no.");
          break;
      default:
          process.stderr.write("Wrong instruction!");
    };
    emitter.emit('afterCommand');
  }
})
