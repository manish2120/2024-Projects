const text = document.querySelector(".js-textbox");
const convertBtn = document.querySelector(".js-convertBtn");
const resetBtn = document.querySelector(".js-resetBtn");

let isSpeaking = true;
convertBtn.addEventListener("click", () => {
  const synth = window.speechSynthesis;
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

  if (!synth.speaking && !isSpeaking) {
    isSpeaking = true;
    convertBtn.innerText = "Convert to Speech";
  }
});

resetBtn.addEventListener("click", () => {
  if (synth.speaking) {
    synth.cancel();
    text.value = "";
  }
});
