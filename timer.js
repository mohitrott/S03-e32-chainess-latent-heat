
var milisec = 0;
var sec = 0;
var miliSecOut = 0;
var secOut = 0;
var counter = 0;
var t = 0
var hrs; 
var mins;
var secs;

function format(time) {   
  // Hours, minutes and seconds
  hrs = ~~(time / 3600);
  mins = ~~((time % 3600) / 60);
  secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}




function startMAinTimer() {
  x = setInterval(timer, 66);
}

function stopMainTimer() {
  clearInterval(x);
  t = (seconds+2)*15;
  console.log(format(t));

  document.getElementById("sec").innerHTML = "0"+mins + ":";
  if(secs < 10){
    document.getElementById("milisec").innerHTML = "0"+secs + ":00";
  }
  else{
    document.getElementById("milisec").innerHTML = secs + ":00";
  }
  
  if(seconds >= 19){
    document.getElementById("sec").innerHTML = "05" + ":";
    document.getElementById("milisec").innerHTML = "00" + ":00";
}
}
function checkTime(i) {
    counter++;
    // console.log("counter", counter)
    if (counter <= 600){
        if (i < 10) {
            i = "0" + i;
          }
    }
    else{
        clearInterval(x);
    }
    return i;
    
 
  }
  
function timer() {
  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  milisec = ++milisec;

  if (milisec === 60) {
    milisec = 0;
    sec = ++sec;
  }
if(counter <= 600){
    document.getElementById("milisec").innerHTML = miliSecOut + ":00";
    document.getElementById("sec").innerHTML = secOut + ":";
}
else{
    document.getElementById("sec").innerHTML = "05" + ":";
    document.getElementById("milisec").innerHTML = "00" + ":00";
}
  
}

// function startStop() {
//   startstop = startstop + 1;

//   if (startstop === 1) {
//     start();

//     isPaused = true;
//   } else if (startstop === 2) {
//     isPaused = false;
//     startstop = 0;
//     stop();
//   }
// }
