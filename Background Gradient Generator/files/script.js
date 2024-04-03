const buttonOne = document.querySelector(".btn1-js");
const buttonTwo = document.querySelector(".btn2-js");
const colorProperty = document.querySelector(
  ".propertyWrapper .colorProperty-js"
);
const copyBtn = document.querySelector(".copyBtn-js");

let hexValues = "0123456789ABCDEF";

function hexCodeGenerator() {
  let randomHexCode = "#";
  for (let i = 0; i <= 5; i++) {
    randomHexCode += hexValues[Math.floor(Math.random() * 16)];
  }
  return randomHexCode;
}

let hexCode1 = "#25A72B";
let hexCode2 = "#21A4B7";

buttonOne.textContent = hexCode1;
buttonTwo.textContent = hexCode2;

setProp(hexCode1, hexCode2);

//Handling Buttons
let color = false;

function handleButtonOne() {
  color = true;
  hexCode1 = hexCodeGenerator();
  buttonOne.textContent = hexCode1;
  setProp(hexCode1, hexCode2);
}

function handleButtonTwo() {
  color = false;
  hexCode2 = hexCodeGenerator();
  buttonTwo.textContent = hexCode2;
  setProp(hexCode1, hexCode2);
}
//-----------------

function setProp(hexCode1, hexCode2) {
  let gradient = `linear-gradient(to right, ${hexCode1}, ${hexCode2})`;
  colorProperty.value = `background: linear-gradient(to right, ${hexCode1}, ${hexCode2})`;
  document.body.style.background = gradient;
}

function copyStyle() {
  let bgGradient = colorProperty.value;
  colorProperty.select();
  colorProperty.setSelectionRange(0, bgGradient.length);
  navigator.clipboard.writeText(bgGradient);
}

buttonOne.addEventListener("click", handleButtonOne);
buttonTwo.addEventListener("click", handleButtonTwo);
copyBtn.addEventListener("click", copyStyle);
