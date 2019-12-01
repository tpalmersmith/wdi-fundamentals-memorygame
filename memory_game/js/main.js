console.log("Up and running!");

var cards = [
{
	rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];
// these are the cards that will be played

var cardsInPlay = [];
// this will store the cards in play

//.  commented on this to tak out temp document.getElementsByTagName('a')[0].setAttribute(cards[cardId].cardImage)
// not sure if this will work to set the card image.


function checkForMatch(){
 if (cardsInPlay[0] === cardsInPlay[1]) {
   console.log("You found a match!");
 } else {
   console.log("Sorry, try again.");
}
//checks to see if the cards match

}

 var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
  	//loop throught the cards
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src',"images/back.png");
  cardElement.className = 'card-' +1;
  cardElement.setAttribute('data-id','cardElement' + i);
  // create a new img element and stores it in card element
  document.getElementsByName('game-board').appendChild(cardElement);
}
};

var button = document.querySelector('button');
button.addEventListener('click', flipCard);


function flipCard() {
 this.getAttribute('data-id')
 console.log("User flipped " + cards[cardId].rank);
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch();
 }

createBoard();
document.getElementsByName('src').setAttribute(cardImage);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");} else {alert("Sorry, try again.");};
