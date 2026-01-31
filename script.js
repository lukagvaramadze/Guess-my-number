"use strict";

let randNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randNumber);
let checkNum = document.querySelector("#guess");
let checkAns = document.querySelector("#twoDiv");
let checkBut = document.querySelector("#check");
let again = document.querySelector("#headerButton");
let ifWin = false;
let score = document.querySelector("#score");
let scoreNum = 10;
let header = document.querySelector("header");
let main = document.querySelector("main");

let highScore = 0;
let centerBox = document.querySelector("#centerBox");

again.addEventListener("click", () => {
  randNumber = Math.trunc(Math.random() * 20 + 1);
  scoreNum = 10;
  score.textContent = "💯 Score:" + scoreNum;
  checkAns.textContent = "Start guessing...";
  checkNum.value = "";
  header.style.backgroundColor = "#222";
  main.style.backgroundColor = "#222";
  checkNum.style.backgroundColor = "#222";
  centerBox.textContent = "?";
  checkBut.disabled = false;
});

checkBut.addEventListener("click", () => {
  if (scoreNum > 1) {
    if (randNumber < checkNum.value) {
      checkAns.textContent = "📈 Too High!";
    } else if (randNumber > checkNum.value) {
      checkAns.textContent = "📉 Too Low!";
    } else if (randNumber == checkNum.value) {
      checkAns.textContent = "🎉 Corect Answer!";
      ifWin = true;
      header.style.backgroundColor = "green";
      main.style.backgroundColor = "green";
      checkBut.disabled = true;
      centerBox.textContent = randNumber;
      if (scoreNum > highScore) {
        highScore = scoreNum;
        document.querySelector('#highScore').textContent = highScore;
      }
    }
    if (randNumber != checkNum.value) {
      scoreNum--;
      score.textContent = "💯 Score:" + scoreNum;
    }
  } else {
    checkAns.textContent = "💥 You Lost, Try Again";
    header.style.backgroundColor = "rgb(245, 126, 126)";
    main.style.backgroundColor = "rgb(245, 126, 126)";
    checkNum.style.backgroundColor = "rgb(245, 126, 126)";
    score.textContent = "💯 Score:" + 0;
  }
  console.log("bbwaa");
});
