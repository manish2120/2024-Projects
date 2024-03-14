const uploadImg = document.querySelector(".upload-box");
const fileInput = uploadImg.querySelector("input");
const previewImg = uploadImg.querySelector("img");
const inputWidth = document.querySelector(".width input");
const inputHeight = document.querySelector(".height input");
const ratioInput = document.querySelector(".ratio input");

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

fileInput.addEventListener("change", loadFile);
uploadImg.addEventListener("click", () => fileInput.click());
