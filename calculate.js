var finalReading;
var mA;
var mB = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function finalValue() {
  console.log("final sec",seconds);
  if(seconds<=18){
    finalReading = initialReading + 60 * ((seconds+2) * 15);
  }
  else{
    finalReading = initialReading + 60 * (seconds * 15);
  }
  document.getElementById("finalJ").innerHTML = finalReading;
}

function calculateMassOfBeakerA() {
  mB = mB + 0.9;
  mB = Math.round(mB * 10) / 10;
  if (mB > 27) {
    mB = 27;
  }
  if (seconds <= 0) {
    mA = mB;
    document.getElementById("B1Text").innerHTML = Math.round(mB) + " g";
    console.log("massB if ", mB);
    console.log("massA ", mA);
  } else {
    mA = mB + 0.16 * (seconds * 15);
    mA = Math.round(mA * 10) / 10;
    document.getElementById("B1Text").innerHTML = Math.round(mA) + " g";
    console.log("massA else ", mA);
    console.log("massB else ", mB);
  }
  document.getElementById("B2Text").innerHTML = Math.round(mB) + " g";
  console.log("secound ", seconds);
}
