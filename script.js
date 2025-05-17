const startGameBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const newCardBtn = document.getElementById("new-card-btn");
let playerEl = document.getElementById("player-el");

let message = "";
let hasBlackJack = false;
let isAlive = false;
let sum = 0;
let cards = [];
let player = {
  name: "Player",
  chips: 145,
};
playerEl.textContent = player.name + ": $" + player.chips;

function StartGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards.join(" ");
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You lose!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function NewCard() {
  // if the game is not active, do nothing
  if (hasBlackJack || !isAlive) {
    return;
  }
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  console.log(cards);
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

startGameBtn.addEventListener("click", StartGame);
newCardBtn.addEventListener("click", NewCard);
