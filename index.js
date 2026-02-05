let score;

const users = ["player1", "player2"];
let current;
let counter;
startGame();

function startGame() {
  secretNumber = 100;
  score = 0;
  current = users[Math.floor(Math.random() * users.length)];
  console.log(current);
  dice();

  document.getElementsByClassName("player1").textContent = " ";
  document.getElementsByClassName("score1").textContent = score;
   document.getElementsByClassName("counter").textContent = counter;
}
function playerSubstitution() {
  if (current === "player1") {
    current === "player2";
  } else {
    current === "player1";
  }
  console.log(current);
}
function dice() {
  const dice1 = [1, 2, 3, 4, 5, 6];
  const result1 = dice1[Math.floor(Math.random() * dice1.length)];
   document.getElementById("result1").textContent = result1;
  const dice2 = [1, 2, 3, 4, 5, 6];
  const result2 = dice2[Math.floor(Math.random() * dice2.length)];
  document.getElementById("result2").textContent = result2;
  if (result1 === result2) return;
  const sum = result1 + result2;
  score += sum;
  document.getElementById("counterNum").textContent = score;
  console.log(result1, result2, `sum: ${sum}`);
}
