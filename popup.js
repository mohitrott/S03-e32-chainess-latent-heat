var timeleft = 10;
var downloadTimer = setInterval(start, 1000);
var initialReading = getRandomInt(20000,30000);
calculateMassOfBeakerA();
function start(){
    if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").style.display = "none"
      document.getElementById('pop1').style.display='none'
      document.getElementById('pop2').style.display='block'
      setTimeout(hidePopup, 1500);
      powerOn();
      document.getElementById("initialJ").innerHTML = initialReading;
      document.getElementById("machineText").innerHTML = initialReading + " J";
    
    } else {
      calculateMassOfBeakerA();
      document.getElementById("countdown").style.display = "block"
      document.getElementById("countdown").innerHTML = timeleft ;
      // console.log("start method count ", count)
    }
    
    
    timeleft -= 1;
    // timeleft = 10;
}

function resetPopup(){
  // document.getElementById("machineText").innerHTML = initialReading + " J";
  document.getElementById('boxy').style.visibility='visible';
  document.getElementById('pop1').style.display='block';
  document.getElementById('pop2').style.display='none';
  timeleft = 10;
  clearInterval(downloadTimer);
  downloadTimer = setInterval(start, 1000);
}

function hidePopup()
{
  document.getElementById('boxy').style.visibility='hidden';
}