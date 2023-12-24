let playSection = document.querySelector(".input");
let resultSec = document.querySelector(".result-section");
let inputField = document.querySelector("input");
let remain = document.querySelector(".remain");
let enter = document.querySelector(".enter-number");
let form = document.querySelector("form");
let result = document.querySelector(".result");
let hint = document.querySelector(".hint");
let again = document.querySelector(".play-again");
let reset = document.querySelector(".reset");
var totalTry = 3;
var random = Math.floor(Math.random() * 10);


const color = (n) => {
    if (n == 3) return "rgb(94, 255, 0)"
    if (n == 2) return "yellow"
    if (n == 1) return "tomato"
}

remain.innerHTML = `<span style="color: ${color(totalTry)}">${totalTry}</span> try remains`;


form?.addEventListener("submit", (e) => {
  e.preventDefault();
  totalTry--;
  if (totalTry === 0) {
    resultSec.classList.add("flex");
    playSection.style.display = "none";
    result.innerHTML = "<span style='color: tomato'>You loss the game.</span>";
  }
  remain.innerHTML = `<span style="color: ${color(totalTry)}">${totalTry}</span> try remains`;
  let inputValue = inputField?.value;
  if (inputValue == parseInt(random)) {
    resultSec?.classList.add("flex");
    playSection.style.display = "none";
    result.innerHTML = "<span style='color: rgb(94, 255, 0)'>You won the game.</span>";
  } else if (inputValue > parseInt(random)) {
    hint.innerHTML = "Hint: Try a smaller one.";
  } else if (inputValue < parseInt(random)) {
    hint.innerHTML = "Hint: Try a bigger one.";
  }
  inputField.value = null;
});

reset?.addEventListener("click", () => {
  totalTry = 3;
  random = Math.floor(Math.random() * 10);
  remain.innerHTML = `<span style="color: ${color(totalTry)}">${totalTry}</span> try remains`;
  hint.innerHTML = "";
  inputField.value = null;
});

again?.addEventListener("click", () => {
  totalTry = 3;
  random = Math.floor(Math.random() * 10);
  remain.innerHTML = `<span style="color: ${color(totalTry)}">${totalTry}</span> try remains`;
  resultSec?.classList.remove("flex")
  playSection.style.display = "flex";
  hint.innerHTML = "";
  inputField.value = null;
});
