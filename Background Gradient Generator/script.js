const buttonOne = document.querySelector(".btn1-js");
const buttonTwo = document.querySelector(".btn2-js");

let hexValues = "0123456789ABCDEF";

function hexCodeGenerator() {
  let randomHexCode = "#";
  for (let i = 0; i <= 5; i++) {
    randomHexCode += hexValues[Math.floor(Math.random() * 16)];
  }
  return randomHexCode;
}
let hexCode = "";
function handleButtonOne() {
  hexCode = hexCodeGenerator();
  buttonOne.textContent = hexCode;
}

function handleButtonTwo() {
  hexCode = hexCodeGenerator();
  buttonTwo.textContent = hexCode;
}

buttonOne.addEventListener("click", handleButtonOne);
buttonTwo.addEventListener("click", handleButtonTwo);
