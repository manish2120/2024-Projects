const text = document.querySelector(".js-textbox");
const convertBtn = document.querySelector(".js-convertBtn");
const resetBtn = document.querySelector(".js-resetBtn");

let isSpeaking = true;
const synth = window.speechSynthesis;

// ------- HANDLING CONVERT BUTTON -------
convertBtn.addEventListener("click", () => {
  const textVal = text.value;

  if (!synth.speaking && textVal) {
    const utterance = new SpeechSynthesisUtterance(textVal);
    synth.speak(utterance);
  }

  if (textVal.length > 20) {
    if (synth.speaking && isSpeaking) {
      convertBtn.innerText = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      convertBtn.innerText = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    convertBtn.innerText = "Speaking";
  }

  convertBtn.style.backgroundColor = "#3baeb0";

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      convertBtn.innerText = "Convert to Speech";
      convertBtn.style.backgroundColor = "#2D9596";
    }
  }, 1000);
});
// -------------------------------------

// ----- HANDLING RESET BUTTON ------
resetBtn.addEventListener("click", () => {
  if (synth.speaking) {
    synth.cancel();
  }
  text.value = "";
});
// -------------------------------
