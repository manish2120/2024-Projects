const uploadImg = document.querySelector(".upload-box");
const fileInput = uploadImg.querySelector("input");
const previewImg = uploadImg.querySelector("img");
const inputWidth = document.querySelector(".width input");
const inputHeight = document.querySelector(".height input");
const ratioInput = document.querySelector(".ratio input");
const qualityInput = document.querySelector(".quality input");
const downloadBtn = document.querySelector(".download-btn");

let imageRatio;
const loadFile = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    document.querySelector(".wrapper").classList.add("active");
    imageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
    inputWidth.value = previewImg.naturalWidth;
    inputHeight.value = previewImg.naturalHeight;
  });
};

inputWidth.addEventListener("keyup", () => {
  const height = ratioInput.checked
    ? inputWidth.value / imageRatio
    : inputHeight.value;
  inputHeight.value = Math.floor(height);
});

inputHeight.addEventListener("keyup", () => {
  const width = ratioInput.checked
    ? inputHeight.value * imageRatio
    : inputWidth.value;
  inputWidth.value = Math.ceil(width);
});

const reduceQuality = qualityInput.checked ? 0.7 : 1.0;

const downloadFile = () => {
  const canvas = document.createElement("canvas");
  const a = document.createElement("a");
  const ctx = canvas.getContext("2d");
  canvas.width = inputWidth.value;
  canvas.height = inputHeight.value;
  ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
  console.log(canvas.width);
  console.log(canvas.height);
  if (canvas.width > 0 || canvas.height > 0) {
    downloadBtn.disabled = false;
    a.href = canvas.toDataURL("image/jpeg", reduceQuality);
    a.download = new Date().getTime();
    a.click();
  }
};

fileInput.addEventListener("change", loadFile);
uploadImg.addEventListener("click", () => fileInput.click());
downloadBtn.addEventListener("click", downloadFile);
