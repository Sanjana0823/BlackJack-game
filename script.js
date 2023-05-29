let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el"); //let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el");

let player = {
  name: "Sanjana",
  chips: 100,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}

// // enter a club
// let age = 22;

// if (age < 21) {
//   console.log("You can not enter the club!");
// } else {
//   console.log("Welcome!");
// }

// // get a bday card from king in norvay
// let age = 100
// if (age < 100) {
//   console.log("Not elegible")
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!")
// }else {
//   console.log("Not elegible, you have already gotten one")
// }

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false

// //ARRAY

// let myself = ["sanjana", 22, true];

// // Add a new value an array

// let a = [3, 9];
// a.push(1);

// let b = 3;
// a.push(b);
// console.log(a); //[3, 9, 1, 3]

// //remove the last item in an array
// a.pop();
// console.log(a); //[3, 9, 1]

// //    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 21;  count += 1 )  {

//   console.log(count)

// }

// // ARRAY WITH FOR LOOP

// let massege = ["hello", "I'm", "joy", "hangout", "ok"];
// for (i = 0; i < massege.length; i += 1) {
//   console.log(massege[i]);
// }

// let cards = [3, 9, 11];
// for (i = 1; i < cards.length; i++) {
//   console.log(cards[i]);
// }
