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
var cardsInPlay = [];
var cardsInPlayId = [];
var totalCardsInPlay = [];
var correctPairCounter = 0;
var score = 0;
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', resetBoard);

function createBoard() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.id = ("card" + i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

function resetBoard() { //logic for game reset button so no page-refresh necessary
	var boardList = document.getElementById("game-board");
	var total = boardList.childNodes.length;
	for (i = 0; i < total; i++) {
		boardList.removeChild(boardList.childNodes[0]);
	}
	failArrayReset();
	correctPairCounter = 0;
	createBoard();
	this.style.display = "none";
}

function failArrayReset() { //reset game logic arrays
	cardsInPlay = [];
	cardsInPlayId = [];
}

function failCardReset() { //flip the failed match back over.
	for (i = 0; i < cardsInPlayId.length; i++) {
		document.getElementById("card" + cardsInPlayId[i]).setAttribute('src', 'images/back.png');
	}
	failArrayReset();
}

function gameWinCheck() {
	if ((correctPairCounter * 2) === cards.length) {
		alert("You Won!");
		resetButton.style.display = "inline-block";
	}
}

function updateScore() {
	//set the html score value to reflect the games 
	//use .textContent
	document.getElementById("scoreNum").textContent = score;
}

function checkForMatch() {
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
			correctPairCounter++;
			score += 2;
			updateScore();
			gameWinCheck();
			failArrayReset();
		}
		else {
			console.log("Sorry, try again.");
			score -= 1;
			updateScore();
			setTimeout(failCardReset, 800);
		}
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlayId.push(cardId);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
}

createBoard();