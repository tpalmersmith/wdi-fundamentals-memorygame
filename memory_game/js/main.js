console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
// these are the cards that will be played

var cardsInPlay = [];
// this will store the cards in play

function checkForMatch(){
 if (cardsInPlay[0] === cardsInPlay[1]) {
   console.log("You found a match!");
 } else {
   console.log("Sorry, try again.");
}

}

function flipCard(cardId) {

 

 console.log("User flipped " + cards[cardId]);
 cardsInPlay.push(cards[cardId]);

checkForMatch();
 
}

flipCard(0);
flipCard(2);


if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");} else {alert("Sorry, try again.");};