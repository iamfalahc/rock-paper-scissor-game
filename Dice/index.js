
var randomNumber1 = Math.floor(Math.random() * 3 + 1);
var randomDiceImage = "img" + randomNumber1 + ".png";
var randomImagSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagSource);

var randomNumber2 = Math.floor(Math.random() * 3 + 1);
var randomImage2 = "img" + randomNumber2 + ".png";
var randomImage2source = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
// image2.style.transform="rotate(180deg)"
image2.style.transform = " scaleX(-1)";

image2.setAttribute("src", randomImage2source);

function start() {
  location.reload()
}



const player1 = randomNumber1;
const player2 = randomNumber2;

let resultMessage;

if (player1 === player2) {
  resultMessage = "Draw";
} else if (
  (player1 === 1 && player2 === 2) ||
  (player1 === 2 && player2 === 3) ||
  (player1 === 3 && player2 === 1)
) {
  resultMessage = "Player 2 wins";
} else {
  resultMessage = "Player 1 wins";
}

document.querySelector("h1").innerHTML = resultMessage;
