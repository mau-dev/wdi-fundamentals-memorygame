
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);



alert('Hello, friends.');

var cards = ["Queen", "Queen", "King", "King"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}

}

