const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('nav>a'); /* changed to work for header&footer */

/* SFX function */
function clickSound(e){
  let soundKey = e.target.dataset['sound'];
  console.log (soundKey);
  let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
  console.log (audio);
  /*alert(soundKey);*/ /* troubleshoot */
  audio.currentTime = 0; /* reset .wav playback */
  audio.play();
}

/* navbar section selection */
function switchInstrument(e){
  e.preventDefault();
  let inst1 = document.querySelector("#stage1"); /* Mario section */
  let inst2 = document.querySelector("#stage2"); /* LoZ section */
  let inst3 = document.querySelector("#stage3"); /* Sonic section */
  let instrument = e.target.dataset['instrument']; /* mouse target selection */
  if (instrument=="stage1"){
    inst1.style.display = "block";
    inst2.style.display = "none";
    inst3.style.display = "none";
  } else if (instrument=="stage2"){
    inst1.style.display = "none";
    inst2.style.display = "block";
    inst3.style.display = "none";
  } else {
    inst1.style.display = "none";
    inst2.style.display = "none";
    inst3.style.display = "block";
  }
  return;
}

/* mouseclick event over "keys" (sound) */
keys.forEach(function(key){
  key.addEventListener("click", clickSound);
});

/* mouseclick event over "instruments" (stage/section) */
instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});
