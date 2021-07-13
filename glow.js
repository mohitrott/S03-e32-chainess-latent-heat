var num = 10;
var loop = 1;
var loop2 = 1;
var mloop = 1;
var z;
var i = 1;
window.addEventListener("load", myLoadFunction);

function myLoadFunction() {
  counterInterval = setInterval(function () {
    document.getElementById("power_glow").src =
      "./Images/btn-Glow/p100" + num + ".png";
    num += 1;

    if (num > 20) {
      num = 10;
    }
  }, 70);
}


function iceLoop() {
  iceshake = setInterval(function () {
    document.getElementById("shake1").src =
      "./Images/Ice lopp/ice_loop000" + i + ".png";
      document.getElementById("shake2").src =
      "./Images/Ice lopp/ice_loop000" + i + ".png";
    i += 1;

    if (i > 8) {
      i = 1;
    }
  }, 100);
}


function increaseMachineValue() {
  z = initialReading;
  value = setInterval(function () {
    z = z + 8;
    document.getElementById("machineText").innerHTML = z + " J";
  }, 10);
}

function increaseWaterLevel() {
  loop = 1;
  waterlevel = setInterval(function () {
    if (loop < 10) {
      document.getElementById("waterlevel").src =
        "./Images/water/water000" + loop + ".png";
      loop += 1;
    } else if (loop >= 10 && loop < 100) {
      document.getElementById("waterlevel").src =
        "./Images/water/water00" + loop + ".png";
      loop += 1;
    } else if (loop >= 100 && loop <= 601) {
      document.getElementById("waterlevel").src =
        "./Images/water/water0" + loop + ".png";
      loop += 1;
    }
  }, 30);
}

function increaseWaterLevelBeakerB() {
  loop2 = 1;
  waterlevelBeakerB = setInterval(function () {
    if (loop2 < 10) {
      document.getElementById("waterlevelB").src =
        "./Images/water/water000" + loop2 + ".png";
      loop2 += 1;
    } else if (loop2 >= 10 && loop2 < 100) {
      document.getElementById("waterlevelB").src =
        "./Images/water/water00" + loop2 + ".png";
      loop2 += 1;
    } else if (loop2 >= 100 && loop2 <= 200) {
      document.getElementById("waterlevelB").src =
        "./Images/water/water0" + loop2 + ".png";
      loop2 += 1;
    }
  }, 90);
}

function machineLoop() {
  mLoop = 1;
  machineChange = setInterval(function () {
    if (mLoop < 10) {
      document.getElementById("machineLooping").src =
        "./Images/machine loop/Machine-loop1000" + mLoop + ".png";
      mLoop += 1;
    } else if (mLoop >= 10 && mLoop < 100) {
      document.getElementById("machineLooping").src =
        "./Images/machine loop/Machine-loop100" + mLoop + ".png";
      mLoop += 1;
    }
    if (mLoop > 26) {
      mLoop = 1;
    }
  }, 50);
}
