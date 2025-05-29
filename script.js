"use strict";

const luckyButton = document.querySelector(".main__button-luck");
const logo = document.querySelector(".main__logo");
let turned = false;

luckyButton.addEventListener("click", () => {
  if (turned) {
    logo.src = "./src/images/google-logo.png";
    turned = false;
  } else {
    logo.src = "./src/images/oddity-logo.jpeg";
    turned = true;
  }
});
