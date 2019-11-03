var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
		}
		else {
			console.log("Sorry, try again.");
		}
	}
}

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(0);
flipCard(2);



//var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log(cardsInPlay.length);
//console.log("User flipped " + cardsInPlay[0]);
//console.log("User flipped " + cardsInPlay[1]);

//alert('Hello, friends.');