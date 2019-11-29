console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
// these are the cards that will be played

var cardsInPlay = [];
// this will store the cards in play

var cardOne = cards[0];
//This assigns the first card in the array to cardOne

cardsInPlay.push(cardOne);
// Adds cardOne to the cardsInPlay array

console.log("User flipped queen")
//since the first card in the array is queen...

var cardTwo = cards[2];
//This assigns the third card in the array to cardOne

cardsInPlay.push(cardTwo);
// Adds cardTwo to the cardsInPlay array

console.log("User flipped king")
//since the third card in the array is king...

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");} else {alert("Sorry, try again.");};