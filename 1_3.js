process.stdin.setEncoding('utf-8');

process.stdout.write('Type:\n/lang to view your system wide language\n/ver to view version of your node installation\n/exit to quit\n');

process.stdin.on('readable',function(){
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction){
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
      case '/lang':
        var language = process.env.LANG;
        if (!language){
          process.stderr.write("Language isn't defined :(. Google around I guess...\n")
        }else{
          process.stdout.write('Language: ' + language + '\n');
        }
        break;
      case '/ver':
        var version = process.versions.node;
        if (!version){
          process.stderr.write("Thats strange since you are running this script using node, BUT I can't read node's version O.o\n");
        }else{
          process.stdout.write('Node version: ' + version + '\n')
        }
        break;
      default:
        process.stdout.write('Wrong instruction!\n');
    }
  }
});
