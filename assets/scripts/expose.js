// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectImage = document.getElementById("horn-select");
  const result = document.getElementsByTagName("img");
  const selectAudio = document.getElementsByClassName("hidden");
  const selectVolume = document.getElementById("volume-controls");
  const playButton = document.getElementsByTagName("button");

  const jsConfetti = new JSConfetti();
  var party = false;

  selectImage.addEventListener("change", (event) => {
    if(event.target.value == "party-horn") {
      party = true;
    }
    else {
      party = false;
    }
    result[0].src = "assets/images/" + event.target.value + ".svg";
    selectAudio[0].src = "assets/audio/" + event.target.value + ".mp3";
  });

  selectVolume.addEventListener("change", (event) => {
    selectAudio[0].volume = event.target.value/100;
    if(event.target.value == 0) {
      result[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(event.target.value < 33) {
      result[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(event.target.value < 67) {
      result[1].src = "assets/icons/volume-level-2.svg";
    }
    else {
      result[1].src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton[0].onclick = (event) => {
    if(party) {
      jsConfetti.addConfetti();
    }
    selectAudio[0].play();
  };
}
  
