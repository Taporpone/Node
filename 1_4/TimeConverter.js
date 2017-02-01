/**
* @see:http://stackoverflow.com/q/6312993
**/
function timeConverter(uptime) {
  var hours = Math.floor(uptime / 3600);
  var minutes = Math.floor((uptime - (hours * 3600)) / 60);
  var seconds = Math.floor(uptime - (hours * 3600) - (minutes * 60));
  var time = '';

  if (hours !== 0){
    time = hours + ' godz. '
  }
  if (minutes !== 0 || time !== '') {
    time += minutes + ' min. ';
  }
  if (time === '') {
    time = seconds + ' sek. ';
  }
  else {
    time += seconds + ' sek. ';
  }
  return time
}

exports.timeConverter = timeConverter;
