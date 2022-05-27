const board = document.querySelector(".board");

let size = 16;
let color = "black";

function populateBoard(size) {
  clearBoard();
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "lightgrey";
    // board.insertAdjacentElement("beforeend", square);
    board.appendChild(square);
  }
}

function clearBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "lightgrey"));
}

function colorSquare() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function askSize(input) {
  let question = prompt("How many squares would you like per side? (Max: 100)");
  if (question <= 100 && question > 0) {
    clearBoard();
    populateBoard(question);
  } else {
    alert("Please enter a number from 1 to 100!");
    askSize(input);
  }
}

function rainbowMode() {
  if (color === "random") {
    color = "black";
  } else {
    color = "random";
  }
}
