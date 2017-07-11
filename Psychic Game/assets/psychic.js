// var alphabet bank
var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numGuess=  15;  
var userGuessed=[]; 
var loseCounter=[0]; 
var winCounter=[0]; 
var amountOfGuess=numGuess;


// Randomizes the bank
function randomizer (alphabet) {
	return alphabet[Math.floor(Math.random()* alphabet.length)];
}

//function that randomizes alphabet bank and true/false.
document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess=randomizer(alphabet);
		
	if (userGuess== computerGuess) {
		console.log("correct", userGuessed);
		document.getElementById("winCounter").innerHTML= (winCounter.length);
		userGuessed.push(userGuess);
		document.getElementById("userGuessed").innerHTML=(userGuessed);
		(winCounter+=1);

		
	} else {
		console.log("no", numGuess, userGuessed);
		document.getElementById("loseCounter").innerHTML= (loseCounter.length);
		userGuessed.push(userGuess);
		document.getElementById("userGuessed").innerHTML=(userGuessed);
		numGuess--;
		document.getElementById("numGuess").innerHTML=(numGuess);
		
	}
	if (numGuess===0 ) {
		alert("You lose! Try again.");
		reset.resetGame();
		loseCounter+=1;
		userGuessed=[];

	
	};
}


var reset = {
	resetGame: function() {
		if(numGuess==0) {
			document.onekeyup=false;
			numGuess=15;
			userGuessed=[];
		}
	}
}