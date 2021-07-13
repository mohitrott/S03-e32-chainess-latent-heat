var seconds = 0;
var timerId;
var powerOnTimeOut;
var powerOffTimeOut;
var powerOnTimeOutNew;



function openIntroduction() {
  document.getElementById("dialogIntro").classList.remove("hideThis");
}
function closeIntroduction() {
  document.getElementById("dialogIntro").classList.add("hideThis");
}

function onHoverIntro() {
  $(".top-b").attr("src", "./Images/10005.png");
}

function offHoverIntro() {
  $(".top-b").attr("src", "./Images/10004.png");
}

function onHoverExe() {
  $(".top-b1").attr("src", "./Images/10007.png");
}

function offHoverExe() {
  $(".top-b1").attr("src", "./Images/10006.png");
}

function onHoverReset() {
  $(".resetBtn").attr("src", "./Images/Reset_h.png");
}

function offHoverReset() {
  $(".resetBtn").attr("src", "./Images/Reset.png");
}

function onHoverPowerOn() {
  $(".powerOnBtn").attr("src", "./Images/Power_on_highlight.png");
}

function offHoverPowerOn() {
  $(".powerOnBtn").attr("src", "./Images/Power_on.png");
}

function onHoverPowerOff() {
  $(".powerOffBtn").attr("src", "./Images/Power_off-hover.png");
}

function offHoverPowerOff() {
  $(".powerOffBtn").attr("src", "./Images/Power_off.png");
}

function onHoverpopup() {
  $(".pop").attr("src", "./Images/popup_close.png");
}
function offHoverpopup() {
  $(".pop").attr("src", "./Images/popup.png");
}

function powerOn() {
  startMAinTimer();
  increaseWaterLevel();
  increaseWaterLevelBeakerB();
  machineLoop();
  increaseMachineValue();
  seconds = 0;
  document.getElementById("be1").src = "./Images/B1_Heat_outwire.png";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("pop1").style.display = "none";
  clearInterval(downloadTimer);
  document.getElementById("initialJ").innerHTML = initialReading;
  document.getElementById("machineText").innerHTML = initialReading + " J";
  // document.getElementById('pop2').style.display='block'
  document.getElementById("power_glow").style.display = "none";
  document.getElementById("powerOn").style.display = "none";
  document.getElementById("powerOff").style.display = "block";
  document.getElementById("powerOff").style.opacity = "0.5";
  document.getElementById("powerOff").style.pointerEvents = "none";
  powerOnTimeOutNew = setTimeout(() => {
    document.getElementById("powerOff").style.opacity = "1";
    document.getElementById("powerOff").style.pointerEvents = "all";
    document.getElementById("power_glow").style.display = "block";
    myLoadFunction();
  }, 3000);
  timerId = setInterval(function () {
    seconds++;
    calculateMassOfBeakerA();
  }, 1000);
  powerOnTimeOut = setTimeout(() => {
    document.getElementById("popoff").style.display = "block";
    powerOff();
  clearInterval(timerId);
  setTimeout(() => {
    document.getElementById("popoff").style.display = "none";
    document.getElementById("popWait").style.display = "block";
  }, 1500);
  }, 20000);
  clearInterval(counterInterval);
}

function powerOff() {
  // console.log("seconds", seconds);
  stopMainTimer();
  clearInterval(value);
  finalValue();
  document.getElementById("be1").src = "./Images/B1_outHeat_outwire.png";
  document.getElementById("machineText").innerHTML = finalReading + " J";
  clearInterval(counterInterval);
  if(seconds < 19){
    document.getElementById("popWait").style.display = "block";
  }
  powerOffTimeOut = setTimeout(() => {
    document.getElementById("massB1").innerHTML = (Math.round(mA) / 1000).toFixed(3);
    document.getElementById("massB2").innerHTML = (Math.round(mB) / 1000).toFixed(3);
    clearInterval(waterlevel);
    clearInterval(waterlevelBeakerB);
    clearInterval(machineChange);
    document.getElementById("d1").classList.add("paused");
    document.getElementById("d1").classList.add("hideThis");
    document.getElementById("d2").classList.add("paused");
    document.getElementById("d2").classList.add("hideThis");
    clearInterval(timerId);
    // document.getElementById("popWait").style.display = "none";
  }, 2000);
  setTimeout(() => {
    document.getElementById("popWait").style.display = "none";
  }, 3500);

  document.getElementById("power_glow").style.display = "none";
  document.getElementById("powerOff").style.display = "none";
  document.getElementById("powerOn").style.display = "none";
  document.getElementById("masks").style.display = "block";
  clearTimeout(powerOnTimeOut);
  clearTimeout(powerOnTimeOutNew);
}

function reset() {
  seconds = 0;
  mA = 0;
  mB = 0;
  milisec = 0;
  sec = 0;
  miliSecOut = 0;
  secOut = 0;
  counter = 0;
  clearInterval(value);
  clearTimeout(powerOnTimeOut);
  clearTimeout(powerOffTimeOut);
  clearTimeout(powerOnTimeOutNew);
  clearInterval(timerId);
  clearInterval(counterInterval);
  clearInterval(waterlevel);
  clearInterval(machineChange);
  clearInterval(waterlevelBeakerB);
  clearInterval(x);
  myLoadFunction();
  initialReading = getRandomInt(20000, 30000);
  resetLowerValues();
  resetPopup();
}

function resetLowerValues() {
  seconds = 0;
  powerOnTimeOutNew = null;
  powerOnTimeOut = null;
  powerOffTimeOut = null;
  mLoop = 1;
  loop = 1;
  loop2 = 1;
  num = 10;
  document.getElementById("popWait").style.display = "none";
  document.getElementById("popoff").style.display = "none";
  document.getElementById("be1").src = "./Images/B1_outHeat_outwire.png";
  document.getElementById("d1").classList.remove("paused");
  document.getElementById("d1").classList.remove("hideThis");
  document.getElementById("d2").classList.remove("paused");
  document.getElementById("d2").classList.remove("hideThis");
  document.getElementById("waterlevel").src = "./Images/water/water0001.png";
  document.getElementById("waterlevelB").src = "./Images/water/water0001.png";
  document.getElementById("machineText").innerHTML = initialReading + " J";
  document.getElementById("power_glow").style.display = "block";
  document.getElementById("powerOn").style.display = "block";
  document.getElementById("powerOff").style.display = "none";
  document.getElementById("masks").style.display = "none";
  document.getElementById("initialJ").innerHTML = "";
  document.getElementById("massB1").innerHTML = "";
  document.getElementById("finalJ").innerHTML = "";
  document.getElementById("massB2").innerHTML = "";
  document.getElementById("sec").innerHTML = "00" + ":";
  document.getElementById("milisec").innerHTML = "00" + ":00";
}
