const inputBox = document.querySelectorAll(".inputBox");
const blackBg = document.querySelector(".blackBg");
let settingBtn = document.querySelector("#settingBtn").addEventListener("click", ()=> {
    selectBlock.classList.toggle("showSelectBlock");
    blackBg.classList.toggle("showBlackBg");
});
let selectBlock = document.querySelector(".selectBlock");
