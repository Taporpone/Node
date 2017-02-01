// Logic: http://stackoverflow.com/q/6312993
// Math.floor: http://www.w3schools.com/jsref/jsref_floor.asp


function timeConverter(uptime) {
  var base_time = uptime;
  var hours = Math.floor(base_time/3600);
  var minutes = Math.floor((base_time - (hours*3600))/60);
  var seconds = Math.floor(base_time - (hours*3600) - (minutes*60));
  var time = ""; // init to "" for following if statements

  if (hours != 0){
    time = hours + " godz. "
  }
  if (minutes != 0 || time !== "") {
    time += minutes + " min. ";
  }
  if (time === "") {
    time = seconds + " sek. ";
  }
  else {
    time += seconds + " sek. ";
  }
  
  return time
}

exports.timeConverter = timeConverter;
